import { FormikProps } from "formik";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FormField } from "./FormField";

export interface TextInputFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  placeholder?: string;
  formik: FormikProps<any>;
  fieldName: string;
}

export function TextInputField({
  id,
  label,
  type = "text",
  placeholder,
  formik,
  fieldName,
}: TextInputFieldProps) {
  const error = formik.errors[fieldName] as string | undefined;
  const touched = Boolean(formik.touched[fieldName]);

  return (
    <FormField label={label} error={error} touched={touched}>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps(fieldName)}
        className={cn(
          "bg-white border-black h-10 md:h-12",
          touched && error && "border-red-500"
        )}
      />
    </FormField>
  );
}
