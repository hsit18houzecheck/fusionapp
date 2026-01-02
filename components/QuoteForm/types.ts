export interface QuoteFormData {
  logo?: string;
  eyebrow?: {
    text: string;
    color?: string;
  };
  title?: {
    text: string;
    color?: string;
  };
  subtitle?: {
    text: string;
    color?: string;
  };
  surveyTypeField?: {
    label: string;
    options: Array<{
      label: string;
      value: string;
    }>;
  };
  propertyPostcode?: {
    label: string;
    placeholder: string;
  };
  phoneNumber?: {
    label: string;
    placeholder: string;
  };
  email?: {
    label: string;
    placeholder: string;
  };
  name?: {
    label: string;
    placeholder: string;
  };
  button?: {
    label: string;
    icon?: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

export interface QuoteFormProps {
  data?: QuoteFormData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
