import { FormikProps } from "formik";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "./FormField";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  options: SelectOption[];
  formik: FormikProps<any>;
  fieldName: string;
}

export function SelectField({
  id,
  label,
  placeholder = "Select an option",
  options,
  formik,
  fieldName,
}: SelectFieldProps) {
  const error = formik.errors[fieldName] as string | undefined;
  const touched = Boolean(formik.touched[fieldName]);

  return (
    <FormField label={label} error={error} touched={touched}>
      <Select
        value={formik.values[fieldName]}
        onValueChange={(value) => formik.setFieldValue(fieldName, value)}
      >
        <SelectTrigger
          id={id}
          className={cn(
            "bg-white border-black w-full h-10! md:h-12!",
            touched && error && "border-red-500"
          )}
          onBlur={() => formik.setFieldTouched(fieldName, true)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}
