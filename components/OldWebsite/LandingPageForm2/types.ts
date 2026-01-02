export type LandingPageForm2Props = {
  showSurveyorNumber?: boolean;
  formId?: string;
  submitButtonId?: string;
  pushToDataLayer?: boolean;
  dataLayerEvent?: any;
};

export type LeadFormData = Record<string, string> & {
  property_postcode?: string;
  first_name?: string;
  email?: string;
  contact_number?: string;
  u_message?: string;
};

