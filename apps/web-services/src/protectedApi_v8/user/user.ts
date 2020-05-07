/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Router } from 'express'
import { accessControlApi } from './accessControl'
import { accountSettingsApi } from './account-settings'
import { autocompleteApi } from './auto-complete'
import { badgeApi } from './badge'
import { changeEmailApi } from './changeEmail'
import { classDiagramApi } from './classDiagram'
import { codeApi } from './code'
import { userContentApi } from './content'
import { dashboardApi } from './dashboard'
import { detailsApi } from './details'
import { emailApi } from './email'
import { emailToUserIdApi } from './emailToUserId'
import { evaluateApi } from './evaluate'
import { exerciseApi } from './exercise'
import { feedbackApi } from './feedback'
import { feedbackV2Api } from './feedbackV2'
import { followApi } from './follow'
import { goalsApi } from './goals'
import { userGroupApi } from './group'
import { historyApi } from './history'
import { iconBadgeApi } from './iconBadge'
import { userMiniProfile } from './miniProfile'
import { myAnalyticsApi } from './myAnalytics'
import { notificationsApi } from './notifications'
import { ocmApi } from './ocm'
import { playlistApi } from './playlist'
import { protectedPreference } from './preference'
import { profileApi } from './profile'
import { progressApi } from './progress'
import { ratingApi } from './rating'
import { rdbmsApi } from './rdbms'
import { realTimeProgressApi } from './realTimeProgress'
import { protectedRoles } from './roles'
import { shareApi } from './share'
import { skillsApi } from './skills'
import { telemetryApi } from './telemetry'
import { protectedTnc } from './tnc'
import { userTokenApi } from './token'
import { topicApi } from './topic'
import { topicsApi } from './topics'
import { validateApi } from './validate'
import { viewProfileApi } from './viewprofile'

export const user = Router()
user.use('/group', userGroupApi)
user.use('/accessControl', accessControlApi)
user.use('/account-settings', accountSettingsApi)
user.use('/mini-profile', userMiniProfile)
user.use('/change-email', changeEmailApi)
user.use('/autocomplete', autocompleteApi)
user.use('/badge', badgeApi)
user.use('/class-diagram', classDiagramApi)
user.use('/code', codeApi)
user.use('/content', userContentApi)
user.use('/dashboard', dashboardApi)
user.use('/details', detailsApi)
user.use('/email', emailApi)
user.use('/emailToUserId', emailToUserIdApi)
user.use('/evaluate', evaluateApi)
user.use('/feedback', feedbackApi)
user.use('/feedbackV2', feedbackV2Api)
user.use('/follow', followApi)
user.use('/goals', goalsApi)
user.use('/history', historyApi)
user.use('/iconBadge', iconBadgeApi)
user.use('/myAnalytics', myAnalyticsApi)
user.use('/notifications', notificationsApi)
user.use('/ocm', ocmApi)
user.use('/playlist', playlistApi)
user.use('/preference', protectedPreference)
user.use('/profile', profileApi)
user.use('/progress', progressApi)
user.use('/rating', ratingApi)
user.use('/rdbms', rdbmsApi)
user.use('/roles', protectedRoles)
user.use('/share', shareApi)
user.use('/skills', skillsApi)
user.use('/telemetry', telemetryApi)
user.use('/tnc', protectedTnc)
user.use('/token', userTokenApi)
user.use('/topic', topicApi)
user.use('/topics', topicsApi)
user.use('/viewprofile', viewProfileApi)
user.use('/validate', validateApi)
user.use('/realTimeProgress', realTimeProgressApi)
user.use('/exercise', exerciseApi)
