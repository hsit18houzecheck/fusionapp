import * as Yup from "yup";
import type { QuoteFormData } from "./types";

export const createValidationSchema = (data: QuoteFormData) => {
  return Yup.object({
    surveyType: Yup.string().required(
      `Please enter ${data.surveyTypeField?.label?.replace("*", "").toLowerCase() || "survey type"}`
    ),
    propertyPostcode: Yup.string()
      .required(
        `Please enter ${data.propertyPostcode?.label?.replace("*", "").toLowerCase() || "property's postcode"}`
      )
      .matches(
        /^[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2}$/i,
        "Enter a valid postcode."
      ),
    phoneNumber: Yup.string()
      .required(
        `Please enter ${data.phoneNumber?.label?.replace("*", "").toLowerCase() || "phone number"}`
      )
      .matches(/^[\d\s\-\+\(\)]+$/, "Enter a valid phone number.")
      .test(
        "min-digits",
        "Enter a valid phone number.",
        (value) => value?.replace(/\D/g, "").length >= 10
      ),
    email: Yup.string()
      .required(
        `Please enter ${data.email?.label?.replace("*", "").toLowerCase() || "email address"}`
      )
      .email("Enter a valid email address."),
    name: Yup.string().required(
      `Please enter ${data.name?.label?.replace("*", "").toLowerCase() || "name"}`
    ),
  });
};
