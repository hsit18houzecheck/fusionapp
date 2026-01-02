import * as Yup from "yup";
import type { FieldConfig } from "./types";

export const createValidationSchemaFromFields = (fields: FieldConfig[]) => {
  const shape: Record<string, any> = {};
  for (const field of fields) {
    switch (field.type) {
      case "email":
        shape[field.name] = Yup.string().required("This field is required").email("Enter a valid email address.");
        break;
      case "tel":
        shape[field.name] = Yup.string()
          .required("This field is required")
          .matches(/^[\d\s\-\+\(\)]+$/, "Enter a valid phone number.")
          .test("min-digits", "Enter a valid phone number.", (value) => (value?.replace(/\D/g, "").length ?? 0) >= 10);
        break;
      case "select":
        shape[field.name] = Yup.string().required("Please select an option");
        break;
      case "text":
      case "password":
      case "number":
      default:
        shape[field.name] = Yup.string().required("This field is required");
    }
  }
  return Yup.object(shape);
};

