enum PlanType {
    Temporary = "temporary",
    Permanent = "permanent",
  }

export interface IPlan {
    name: string;
    organization_type_id: number;
    type: PlanType;
    start_date: string;
    end_date: string;
    number_of_departments: number;
    number_of_doctors: number;
    number_of_pharmacy_users: number;
    number_of_store_users: number;
    number_of_wards: number;
    number_of_ward_users: number;
    number_of_clinical_lab_users: number;
    number_of_xray_lab_users: number;
    number_of_doctor_assistants: number;
    number_of_account_admin: number;
    number_of_cashiers: number;
    number_of_billing_users: number;
    number_of_hospital_admin: number;
    number_of_hr_users: number;
  }
  