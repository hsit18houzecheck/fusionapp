export type ContactFormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  errorMessage?: string;
};

export type ContactUsContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  formFields: ContactFormField[];
  submitButtonLabel: string;
  successMessage?: string;
  errorMessage?: string;
  validationErrorMessage?: string;
};


