
export namespace NSProfileDataV2 {
  export interface IProfileJsonData {
    tabs: IProfileTab[]
  }

  export interface IProfileTab {
    name: string
    key: string
    render: boolean
    badges: {
      enabled: boolean
      uri?: string
    }
    enabled: boolean
    routerLink: string
  }
  export interface IProfile {
    id: string
    userId: string
    academics?: IAcademics[]
    employmentDetails?: IEmploymentDetails
    interests: IInterests[]
    photo: string | null | undefined
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    personalDetails: IPersonalDetails
    professionalDetails: IProfessionalDetails[]
    skills: ISkills[]

  }
  export interface IAcademics {
    nameOfInstitute: string
    nameOfQualification: string
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    type: string
    yearOfPassing: string
  }

  export interface IEmploymentDetails {
    allotmentYearOfService: string
    cadre: string
    civilListNo: string
    departmentName: string
    dojOfService: string
    employeeCode: string
    officialPostalAddress: string
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    payType: string
    pinCode: string
    service: string
  }

  export interface IInterests {
    hobbies: any[]
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    professional: any[]
  }
  export interface IPersonalDetails {
    category: string
    countryCode: string
    dob: string
    domicileMedium: string
    firstname: string
    lasttname: string
    gender: string
    knownLanguages: any[]
    maritalStatus: string
    middlename: string
    mobile: number
    nationality: string
    officialEmail: string
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    personalEmail: string
    pincode: string
    postalAddress: string
    primaryEmail: string
    surname: string
    telephone: string
  }
  export interface IProfessionalDetails {
    additionalAttributes: { osid: string }
    completePostalAddress: string
    description: string
    designation: string
    designationOther: string
    doj: string
    industry: string
    industryOther: string
    location: string
    name: string
    nameOther: string
    organisationType: string
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
    responsibilities: string
  }
  export interface ISkills {
    additionalSkills: string
    certificateDetails: string
    osCreatedAt: string
    osCreatedBy: string
    osUpdatedAt: string
    osUpdatedBy: string
    osid: string
  }

  export interface IPortalProfile {
    department_name: string
    email: string
    first_name: string
    kid: string
    last_name: string
    rank: number
    wid: string
  }
}