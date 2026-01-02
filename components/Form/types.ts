import { FormikHelpers } from "formik";

export type FieldOption = {
  label: string;
  value: string;
};

export type FieldConfig = {
  type:
    | "text"
    | "email"
    | "tel"
    | "password"
    | "number"
    | "select"
    | "textarea";
  name: string;
  id?: string;
  label: string;
  placeholder?: string;
  options?: FieldOption[]; // for select
};

export type SubmitButtonConfig<TValues extends Record<string, any>> = {
  label: string;
  icon?: string;
  className?: string;
  getClassName?: (args: {
    isValid: boolean;
    dirty: boolean;
    values: TValues;
  }) => string;
};

export interface FormProps<TValues extends Record<string, any>> {
  initialValues: TValues;
  fields: FieldConfig[];
  validationSchema?: any; // Yup schema
  onSubmit: (
    values: TValues,
    formikHelpers: FormikHelpers<TValues>
  ) => void | Promise<any>;
  className?: string;
  submitButton?: SubmitButtonConfig<TValues>;
  // Sheet configuration
  open?: boolean; // controlled open like QuoteForm
  onOpenChange?: (open: boolean) => void;
  sheetTitle?: string;
  sheetDescription?: string;
  sheetTriggerLabel?: string;
  side?: "top" | "right" | "bottom" | "left";
}
