import axios from 'axios'
import cassandraDriver from 'cassandra-driver'
import { Router } from 'express'
import * as fs from 'fs'
import xlsx from 'node-xlsx'
import { v4 as uuidv4 } from 'uuid'
import { cassandraClientOptions } from '../../configs/cassandra.config'
import { axiosRequestConfig } from '../../configs/request.config'
import { CONSTANTS } from '../../utils/env'
import {
    createKeycloakUser,
    getAuthToken,
    sendActionsEmail,
    UpdateKeycloakUserPassword,
} from '../../utils/keycloak-user-creation'
import { logError, logInfo } from '../../utils/logger'
import { extractUserIdFromRequest } from '../../utils/requestExtract'
import { wTokenApiMock } from '../user/details'

const filePath = CONSTANTS.USER_BULK_UPLOAD_DIR || process.cwd() + '/user_upload/'
// tslint:disable-next-line: max-line-length
const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
const REGISTRATION_BASE = `${CONSTANTS.SB_EXT_API_BASE_2}/v1/content-sources`
const API_ENDPOINTS = {
    deregisterUsers: (source: string) => `${REGISTRATION_BASE}/${source}/deregistered-users`,
    listUsers: (source: string) => `${REGISTRATION_BASE}/${source}/users`,
    registrationStatus: REGISTRATION_BASE,
    wtokenPath: `http://localhost:3003/protected/v8/user/details/wtokenprotected/v8/user/details/wtoken`,
}

export const userRegistrationApi = Router()

userRegistrationApi.get('/listUsers/:source', async (req, res) => {
    try {
        const rootOrg = req.header('rootOrg')
        const source = req.params.source
        const response = await axios.get(
            API_ENDPOINTS.listUsers(source),
            { headers: { rootOrg } }
        )
        res.json(response.data)
    } catch (err) {
        logError('ERROR ON GET ALL REGISTERED USERS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/deregisterUsers/:source', async (req, res) => {
    try {
        const rootOrg = req.header('rootOrg')
        const source = req.params.source
        const response = await axios.post(
            API_ENDPOINTS.deregisterUsers(source),
            req.body,
            { headers: { rootOrg } }
        )
        res.json(response.data)
    } catch (err) {
        logError('ERROR ON DEREGISTER USERS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.get('/getAllSources', async (req, res) => {
    try {
        const rootOrg = req.header('rootOrg')
        const response = await axios.get(`${API_ENDPOINTS.registrationStatus}?registrationProvided=false`, {
            ...axiosRequestConfig,
            headers: { rootOrg },
        })
        const data = response.data.filter((o: { registrationUrl: string | null }) => o.registrationUrl !== null)
        res.json(data || {})
    } catch (err) {
        logError('ERROR ON GET ALL SOURCES >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.get('/getSourceDetail/:id', async (req, res) => {
    try {
        const rootOrg = req.header('rootOrg')
        const source = req.params.id
        const response = await axios.get(`${API_ENDPOINTS.registrationStatus}/${source}`, {
            ...axiosRequestConfig,
            headers: { rootOrg },
        })
        res.json(response.data || {})
    } catch (err) {
        logError('ERROR ON GET SOURCE DETAILS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.get('/checkUserRegistrationContent/:source', async (req, res) => {
    try {
        const source = req.params.source
        const uuid = extractUserIdFromRequest(req)
        const rootOrg = req.header('rootOrg')
        const response = await axios.get(
            `${API_ENDPOINTS.registrationStatus}/${source}/users/${uuid}`, {
            ...axiosRequestConfig,
            headers: { rootOrg },
        })
        res.json(response.data || {})
    } catch (err) {
        logError('ERROR ON CHECK SOURCE REGISTRATION STATUS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/register', async (req, res) => {
    try {
        const source = req.body.source
        const rootOrg = req.header('rootOrg')
        const response = await axios.post(
            `${API_ENDPOINTS.registrationStatus}/${source}/users`,
            req.body.items,
            {
                ...axiosRequestConfig,
                headers: {
                    rootOrg,
                },
            }
        )
        res.json(response.data || {})
    } catch (err) {
        logError('ERROR ON REGISTRATIO USERS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/create-user', async (req, res) => {
    try {
        let createKeycloak: void | { id: string }
        createKeycloak = await createKeycloakUser(req)
            .catch((error) => {
                if (error.response.status === 409) {
                    res.status(400).send(`1005: User with email ${req.body.email} is already exists !!`)
                } else {
                    res.status(400).send('1003: User could not be created in Keycloack !!' || {})
                }
            })
        if (createKeycloak && createKeycloak.id) {
            await UpdateKeycloakUserPassword(createKeycloak.id, false)
                .catch((error) => {
                    // tslint:disable-next-line: no-duplicate-string
                    logError('/create-user ERROR ON UpdateKeycloakUserPassword', error)
                    res.status(400).send('1003: User default password could not be set !!' || {})
                })
            getAuthToken(req.body.email).then(async (kcaAuthToken) => {
                if (kcaAuthToken && kcaAuthToken.access_token) {
                    const wTokenResponse = await wTokenApiMock(req, kcaAuthToken.access_token)
                    // tslint:disable-next-line: max-line-length
                    if (wTokenResponse && wTokenResponse.user && wTokenResponse.user.length) {
                        logInfo('New User keycloak auth successfull')
                        logInfo(`User: ${req.body.email} -- wid: ${wTokenResponse.user[0].wid}`)
                    }
                }
            }).catch((error) => {
                logError('ERROR ON getAuthToken', error)
                res.status(400).send('1004: User getAuthToken failed !!' || {})
            })
            await UpdateKeycloakUserPassword(createKeycloak.id, true)
                .catch((error) => {
                    logError('/create-user ERROR ON UpdateKeycloakUserPassword after getAuthtoken', error)
                    res.status(400).send('1003: User default password could not be set !!' || {})
                })
            await sendActionsEmail(createKeycloak.id)
                .catch((error) => {
                    logError('ERROR ON sendActionsEmail', error)
                    // res.status(400).send('1003: Email could not be set !!' || {})
                })
            // console.log('kcaAuthToken', kcaAuthToken)
            res.json({ data: 'User Created successfully!' })
        }
    } catch (err) {
        logError('ERROR ON CREATE USERS >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/user/access-path', async (req, res) => {
    try {
        const clientConnect = new cassandraDriver.Client(cassandraClientOptions)
        // return new Promise((resolve, _reject) => {
        const query = `SELECT * FROM ${CONSTANTS.CASSANDRA_KEYSPACE}.user_access_paths
            WHERE user_id=${req.body.wid}`
        clientConnect.execute(query, (err, result) => {
            if (!err && result && result.rows) {
                const key = result.rows
                clientConnect.shutdown()
                res.json(key || {})
            } else if (err) {
                logError(`ERROR executing the query >> ${query}`)
                res.status(400).send('/user/access-path:: Something went wrong!')
            }
        })
        // })
    } catch (err) {
        logError('/user/access-path:: ERROR ON access-path >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/user/update-access-path', async (req, res) => {
    try {
        const clientConnect = new cassandraDriver.Client(cassandraClientOptions)
        const query = `INSERT INTO ${CONSTANTS.CASSANDRA_KEYSPACE}.user_access_paths
            (root_org, org, user_id, cas_id, access_paths, temporary , ttl) VALUES (?, ?, ?, ?, ?, ?, ?)`
        const params = [
            req.body.root_org,
            req.body.org,
            req.body.user_id,
            req.body.cas_id,
            req.body.access_paths,
            req.body.temporary,
            req.body.ttl,
        ]
        clientConnect.execute(query, params, (err, _result) => {
            if (!err) {
                clientConnect.shutdown()
                logInfo('Update Query to user_access_paths successful')
                res.json('User access paths updated successfully !!')
            } else if (err) {
                clientConnect.shutdown()
                logError(`ERROR executing the query >> ${query}`)
                res.status(400).send('/user/update-access-path:: Something went wrong!')
            }
        })
        // })
    } catch (err) {
        logError('/user/update-access-path:: ERROR ON access-path >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.post('/bulkUpload', async (req, res) => {
    try {
        const fileName = req.body.name
        const ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase()
        const base64data = req.body.content.replace(/^data:.*,/, '')
        const uuid = uuidv4()
        const reportData = [['email', 'status']]
        fs.writeFileSync(filePath + `${uuid}.${ext}`, base64data, 'base64')
        const reqToInsert = {
            name: `${fileName}`,
            report: null,
            status: 'processing',
            user_id: extractUserIdFromRequest(req),
            uuid,
        }
        await insertBulkUploadStatus(reqToInsert)
        res.json(`User upload started with id: ${uuid}, After process is finished you can download the report`)
        const workSheetsFromFile = xlsx.parse(filePath + `${uuid}.${ext}`)
        for (const sheet of workSheetsFromFile) {
            for (const row of sheet.data.slice(1)) {
                // tslint:disable-next-line: no-any
                const [fname, lname, email] = row as any
                if (!email) {
                    reportData.push([`\n${email}`, `Invalid Email & failed`])
                }
                if (email.length > 254) {
                    reportData.push([`\n${email}`, `Invalid Email & failed`])
                }
                const valid = emailRegex.test(email)
                if (!valid) {
                    reportData.push([`\n${email}`, `Invalid Email & failed`])
                } else {
                    const reqToNewUser = {
                        body: {
                            email,
                            fname,
                            lname,
                        },
                    }
                    const userId = await createUser(reqToNewUser)
                        .catch((err) => {
                            if (err.response.status === 409) {
                                reportData.push([`\n${email}`, `User with email ${email} is already exists`])
                            } else {
                                reportData.push([`\n${email}`, `User could not be created in Keycloack`])
                            }
                        })
                    if (userId) {
                        let msg = ''
                        await performNewUserSteps(userId, req)
                            .catch((err) => {
                                // reportData.push([`\n${email}`, `${err}`])
                                msg = `${err}`
                            })
                        reportData.push([`\n${email}`, `success & ${msg} `])
                    }
                }

            }
        }
        const reqToUpdate = {
            name: `${fileName}`,
            report: reportData,
            status: 'completed',
            user_id: extractUserIdFromRequest(req),
            uuid,
        }
        await insertBulkUploadStatus(reqToUpdate)

    } catch (err) {
        logError('ERROR ON BULK UPLOAD >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

// tslint:disable-next-line: no-any
export async function createUser(req: any) {
    return new Promise(async (resolve, reject) => {
        try {
            let createKeycloak: void | { id: string }
            createKeycloak = await createKeycloakUser(req)
                .catch((err) => {
                    reject(err)
                })
            if (createKeycloak && createKeycloak.id) {
                resolve(createKeycloak.id)
            }
        } catch (err) {
            logError('ERROR ON CREATE USERS >', err)
        }
    })
}

// tslint:disable-next-line: no-any
export async function performNewUserSteps(userId: any, req: any) {
    return new Promise(async (resolve, reject) => {
        await UpdateKeycloakUserPassword(userId, false)
            .catch((error) => {
                logError('performNewUserSteps:: ERROR ON UpdateKeycloakUserPassword', error)
                reject('User default password could not be set')
            })
        // tslint:disable-next-line: no-identical-functions
        getAuthToken(req.body.email).then(async (kcaAuthToken) => {
            if (kcaAuthToken && kcaAuthToken.access_token) {
                const wTokenResponse = await wTokenApiMock(req, kcaAuthToken.access_token)
                // tslint:disable-next-line: max-line-length
                if (wTokenResponse && wTokenResponse.user && wTokenResponse.user.length) {
                    logInfo('New User keycloak auth successfull')
                    logInfo(`User: ${req.body.email} -- wid: ${wTokenResponse.user[0].wid}`)
                }
            }
        }).catch((error) => {
            logError('ERROR ON getAuthToken', error)
            reject(' User getAuthToken failed')
        })
        await UpdateKeycloakUserPassword(userId, true)
            // tslint:disable-next-line: no-identical-functions
            .catch((error) => {
                logError('performNewUserSteps:: ERROR ON UpdateKeycloakUserPassword after getAuthToken', error)
                reject('User default password could not be set')
            })
        await sendActionsEmail(userId)
            .catch((error) => {
                logError('ERROR ON sendActionsEmail', error)
                reject('Email could not be sent')
            })
        resolve()
    })
}

// tslint:disable-next-line: no-any
export async function insertBulkUploadStatus(req: any) {
    try {
        const clientConnect = new cassandraDriver.Client(cassandraClientOptions)
        const query = `INSERT INTO ${CONSTANTS.CASSANDRA_KEYSPACE}.bulk_user_upload_detail
            (id, name, user_id, status, report) VALUES
            (${req.uuid}, \'${req.name}\', ${req.user_id}, \'${req.status}\', textAsblob\(\'${req.report}\'\))`
        return clientConnect.execute(query, async (err, _result) => {
            if (!err) {
                clientConnect.shutdown()
                logInfo('Insert Query to bulk_user_upload_detail successful')
            } else if (err) {
                clientConnect.shutdown()
                logError(`ERROR executing the query >> ${query}`)
            }
        })
        // })
    } catch (err) {
        logError('ERROR ON insertBulkUploadStatus >', err)
    }
}

userRegistrationApi.get('/bulkUploadData', async (req, res) => {
    try {
        const clientConnect = new cassandraDriver.Client(cassandraClientOptions)
        const query = `SELECT id,name,status FROM ${CONSTANTS.CASSANDRA_KEYSPACE}.bulk_user_upload_detail
            WHERE user_id=${extractUserIdFromRequest(req)}  allow filtering`
        // tslint:disable-next-line: no-identical-functions
        clientConnect.execute(query, (err, result) => {
            if (!err && result && result.rows) {
                const key = result.rows
                clientConnect.shutdown()
                res.json(key || {})
            } else if (err) {
                logError(`ERROR executing the query >> ${query}`)
                res.status(400).send('Something went wrong!')
            }
        })
    } catch (err) {
        logError('ERROR ON bulkUploadData >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})

userRegistrationApi.get('/bulkUploadReport/:id', async (req, res) => {
    logInfo('fetching bulk-upload-report with id: ', req.params.id)
    try {
        const clientConnect = new cassandraDriver.Client(cassandraClientOptions)
        const query = `SELECT report FROM ${CONSTANTS.CASSANDRA_KEYSPACE}.bulk_user_upload_detail
            WHERE id=${req.params.id}  allow filtering`
        // tslint:disable-next-line: no-identical-functions
        clientConnect.execute(query, async (err, result) => {
            if (!err && result && result.rows.length > 0) {
                const key = result.rows[0]
                clientConnect.shutdown()
                res.json(key || {})
            } else if (err) {
                logError(`ERROR executing the query >> ${query}`)
                res.status(400).send('Something went wrong!')
            }
        })
    } catch (err) {
        logError('ERROR ON /bulkUploadReport/:id >', err)
        res.status((err && err.response && err.response.status) || 500)
            .send(err && err.response && err.response.data || {})
    }
})
