export const Paths = {
  auth: {
    forgotpassword: "/user/auth/forgot-password",
    verifyotp: "/user/auth/verify-otp",
    resetpassword: "/user/auth/reset-password",
  },
  onboarding: {
    default: "/user/organization/onboarding",
    contact: "/user/organization/onboarding/owner",
    activePlan: "/user/organization/onboarding/activePlan",
    license: "/user/organization/onboarding/license",
    payment: "/user/organization/onboarding/payment",
    domain_setup: "/user/organization/onboarding/domain-setup",
    update_contact_profile: "/user/organization/onboarding/profile/update",
    update_organization_profile: "/user/organization/onboarding/update",
  },
  user: {
    grades: "/user/grades",
    activateUser: "/user/activate-user",
    default: "/user/organization/user",
    add_user: "/user/organization/user/addUser",
    assignBranch: "/user/organization/user/assignBranch",
    completeRegistration: "/user/organization/user/complete-registration",
  },
  branch: {
    default: "/user/organization/branch",
    assignPlan: "/user/organization/branch/assignPlan",
  },
  role: {
    default: "/user/organization/role",
    assignModule: "/user/organization/role/assignModule",
  },
  company: {
    default: "/user/organization/company",
  },
  organizationHmo: {
    hmoInTheSystem: "/user/organization/hmos",
    default: "/user/organization/organizationHmo",
  },
  hmo: {
    default: "/user/hmos",
  },

  service: {
    default: "/user/organization/service",
    private: "/user/organization/private-services",
    hmoServiceItem: "/user/organization/hmoServiceItem",
    companyServiceItem: "/user/organization/companyServiceItem",
    bulkUpload: "/user/organization/serviceItem/bulkUpload",
    bulkServiceItemUploadUpdate: "/user/organization/bulkServiceItemUploadUpdate",
    serviceItemLastUploaded: "/user/organization/serviceItem/lastUploaded",
    serviceItemImportStats: "/user/organization/serviceItem/getCsvImportStatistics",
    downloadCSVSample: "/user/organization/downloadCSVSample",
    updateAmount: "/user/organization/service/update-amount",
    byCountry: "/user/service_by_country",
    addLocation: "/user/organization/service/add-location",
  },
  module: {
    default: "/user/organization/listModule",
  },
  subscriptions: {
    default: "/user/organization/subscriptions",
  },
  patient: {
    default: "/user/patient",
    details: "/user/patients",
    fetchByKeys: "/user/patient_with_keys",
    vitals: "/user/patient/vitals",
    xrayTests: "/user/patient/xray",
    vitalsAlt: "/user/patients/vitals",
    symptoms: "/user/patient/symptoms",
    drugHistory: "/user/patient/drug_history",
    addAppointment: "/user/patient/appointment",
    addPrescription: "/user/patient/prescription",
    familyHistory: "/user/patient/family_history",
    medicalHistory: "/user/patient/medical_history",
    diagnosticTests: "/user/patient/diagnostic_tests",
    ultrasoundTests: "/user/patient/ultrasound_tests",
    assessment: "/user/patient/diagnostic_assessment",
    obstetricHistory: "/user/patient/obstetric_history",
    surgicalCondition: "/user/patient/surgical_condition",
    appointmentHistory: "/user/patients/appointments/past",
    partnerInformation: "/user/patient/partner_information",
    gynecologicalHistory: "/user/patient/gynecological_history",
    treatmentIntervention: "/user/patient/treatment_intervention",
    addPrescriptionMedicine: "/user/patient/prescription/medicine",
    addPrescriptionMedicineByMedicine: "/user/patient/prescription_by_nurse/medicine",
    addPrescriptionPayment: "/user/patient/prescription/payment",
  },
  patientIllnessHistory: {
    default: "/user/illness/history",
  },
  patientPainAssessment: {
    default: "/user/pain/assessment",
  },
  patientDiagnosis: {
    default: "/user/diagnosis",
  },
  patientTreatmentPlan: {
    default: "/user/treatment_plan",
  },
  patientProgressNotes: {
    default: "/user/progress_note",
  },
  patientDischargeSummary: {
    default: "/user/discharge_summary",
  },
  patientPhysicalExamination: {
    default: "/user/physical/examination",
    fetchById: "/user/physical",
  },
  patientFunctionalAssessment: {
    default: "/user/functional/assessment",
    fetchById: "/user/functional",
  },
  patientPregnancy: {
    default: "/user/pregnancy",
  },
  nurseNote: {
    default: "/user/nurseNote",
  },
  patientIntake: {
    default: "/user/patient_intake",
  },
  patientOutput: {
    default: "/user/patient_output",
  },
  diagnosticTests: {
    default: "/user/diagnostic_tests",
  },
  ultrasoundTests: {
    default: "/user/ultrasound_tests",
  },
  xrayTests: {
    default: "/user/xrays",
  },
  inPatientService: {
    default: "/user/inPatient_service",
  },
  wardRoundNote: {
    default: "/user/wardRoundNote",
  },
  dischargeInformation: {
    default: "/user/discharge_information",
  },
  bills: {
    default: "/user/organization/bills",
  },
  expense: {
    default: "/user/organization/expense",
  },
  hmoPricing: {
    default: "/user/organization/hmoPricing",
    list: "/user/hmos",
    update: "/user/hmoPlan",
    addHmoPlan: "/user/organization/addHmoPlan",
    downloadServiceItemCSV: "/user/organization/csv",
    getHmoPricing: "/user/organization/getHmoPricing",
    updateHmoPricing: "/user/organization/updateHmoPricing",
    updateHmoServiceItem: "/user/organization/updateHmoServiceItem",
    getHmoServiceItemHistory: "/user/organization/getHmoServiceItemHistory",
    getCsvImportStatisticsForHmo: "/user/organization/getCsvImportStatisticsForHmo",
    getHmoServicePricingHistory: "/user/organization/getHmoServicePricingHistory",
    getHmoPricingList: "/user/organization/getHmoPricingList",
    bulkHmoServiceItemPricingUpload: "/user/organization/bulkHmoServiceItemPricingUpload",
    getHmoPricingCsvImportStatistics: "/user/organization/getHmoPricingCsvImportStatistics",
    lastHmoServicePricing: "/user/organization/lastHmoServicePricing",
    lastHmoPricingServices: "/user/organization/lastHmoPricingServices",
    usePrivatePricing: "/user/organization/hmo/usePrivatePricing",
  },
  companyPricing: {
    default: "/user/organization/companyPricing",
    update: "/user/organization/companyPlan",
    addcompanyPlan: "/user/organization/companyPlan",
    getCompanyPricing: "/user/organization/getCompanyPricing",
    updateCompanyServiceItem: "/user/organization/updateCompanyServiceItem",
    downloadServiceItemCSV: "/user/organization/sample",
    updateCompanyPricing: "/user/organization/updateCompanyPricing",
    lastCompanyServiceItem: "/user/organization/lastCompanyServiceItem",
    lastCompanyServicePricing: "/user/organization/lastCompanyServicePricing",
    getCompanyPricingList: "/user/organization/getCompanyPricingList",
    getCompanyPricingCsvImportStatistics: "/user/organization/getCompanyPricingCsvImportStatistics",
    bulkCompanyServiceItemPricingUpload: "/user/organization/bulkCompanyServiceItemPricingUpload",
    getCompanyServiceItemHistory: "/user/organization/getCompanyServiceItemHistory",
    getCompanyServicePricingHistory: "/user/organization/getCompanyServicePricingHistory",
    getCsvImportStatisticsForCompany: "/user/organization/getCsvImportStatisticsForCompany",
    bulkCompanyServiceItemUploadUpdate: "/user/organization/bulkCompanyServiceItemUploadUpdate",
    usePrivatePricing: "/user/organization/company/usePrivatePricing",
  },
  language: {
    default: "/user/organization/settings/language",
    list: "/user/language",
  },
  reminder: {
    default: "/user/organization/settings/reminder",
  },
  announcement: {
    default: "/user/organization/settings/announcement",
  },
  subs: {
    default: "/user/organization/subs",
  },
  sms: {
    default: "/user/organization/settings/sms",
  },
  smsLog: {
    default: "/user/organization/settings/smsLog",
  },
  surgeries: {
    default: "/user/surgeries",
    details: "/user/surgery",
  },
  test: {
    default: "/user/test/category",
  },
  ultrasoundTest: {
    default: "/user/ultrasound_test/type",
  },
  xrayTest: {
    default: "/user/xray_test/type",
  },
  inPatient: {
    default: "/user/in-patient",
  },
  unit: {
    default: "/user/organization/unit",
    upload: "/user/organization/unit/upload",
  },
  vial: {
    default: "/user/organization/vial",
    upload: "/user/organization/vial/upload",
  },
  sample: {
    default: "/user/organization/sample",
    upload: "/user/organization/sample/upload",
  },
  diagnosticIndividual: {
    default: "/user/organization/diagnostic/individual",
    upload: "/user/organization/diagnostic/individual/upload",
  },
  panelsProfile: {
    default: "/user/organization/panels/profiles",
  },
  package: {
    default: "/user/organization/package",
  },
  theatreService: {
    listSurgeries: "/user/patients/surgeries",
    childSurgeries: "/user/patients/child_surgeries",
    procedure: "/user/surgery/procedure",
    preoperativeInform: "/user/preoperativeInform",
    intraoperativeInform: "/user/intraoperativeInform",
    postoperativeInform: "/user/postoperativeInform",
    deliveryDetail: "/user/patient/delivery_detail",
    laborAndDeliveryCourse: "/user/patient/labor_and_delivery_course",
    maternalInformation: "/user/patient/maternalInformation",
    newbornInformation: "/user/patient/newbornInformation",
    placenta: "/user/patient/placenta_and_cord_details",
    postpartumInformation: "/user/patient/postpartum_information",
  },
  smsCredits: {
    default: "/user/organization/sms_credits",
    pay: "/user/organization/sms/credit/pay",
  },
  doctor: {
    default: "/user/doctor",
  },
  ailments: {
    default: "/user/icd10",
  },
  paymentMethod: {
    default: "/user/organization/settings/payment_methods",
    banks: "/user/organization/settings/payment_methods/banks",
    deactivate: "/user/organization/settings/payment_methods/banks/deactivate",
    bankAccount: "/user/organization/settings/bank_account",
  },
  customerSupport: {
    default: "/user/customer_support",
    message: "/user/customer_support/message",
  },
  consultations: {
    default: "/user/consultations",
    current: "/user/my_consultations",
    history: "/user/patients/consultation_appointments/past",
    antenatalHistory: "/user/patients/antenatal_appointments/past",
  },
  prescription: {
    default: "/user/prescription",
    medicines: "/user/prescription/medicines",
  },
  generic: {
    organization: "/generic/organizations",
    organization_types: "/generic/organization-types",
    create_organization: "/generic/organization/create-organization",
    resend_activation_email: "/generic/organization/resend-activation-email",
    activate_organization: "/generic/organization/activate-organization",
    complete_registration: "/generic/organization/complete-registration",
    create_password: "/generic/organization/create-password",
    license: "/generic/organization/license",
    country: "/generic/country",
    plan: "/generic/countries",
    state: "/generic/state",
    city: "/generic/city",
    region: "/generic/region",
  },
};
  