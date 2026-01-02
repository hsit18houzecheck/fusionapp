"use client";

import { useState, useEffect } from "react";
import Form from "@/components/Form";
import { createValidationSchemaFromFields } from "@/components/Form/validation";
import { apiClient } from "@/lib/apiClient";
import { SURVEYOR_FORM_EVENT } from "./constants";
import { toast } from "sonner";
import { FormikHelpers } from "formik";

type SurveyorFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
};

export default function SurveyorSignupForm() {
  const [open, setOpen] = useState(false);

  const initialValues: SurveyorFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const fields = [
    {
      type: "text",
      name: "first_name",
      label: "First Name",
      placeholder: "First Name",
    },
    {
      type: "text",
      name: "last_name",
      label: "Last Name",
      placeholder: "Last Name",
    },
    { type: "email", name: "email", label: "Email", placeholder: "Email" },
    { type: "tel", name: "phone", label: "Phone", placeholder: "Phone" },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      placeholder: "Enter your message",
    },
  ] as const;

  const validationSchema = createValidationSchemaFromFields(fields as any);

  async function onSubmit(
    values: SurveyorFormValues,
    { resetForm }: FormikHelpers<SurveyorFormValues>
  ) {
    try {
      const body = {
        type: "surveyor_enquiry",
        ...values,
      };

      await apiClient.post(
        `${window.location.origin}/api/track-and-send-mail`,
        body
      );
      toast.success("Thanks for your interest, we will get back to you soon!");
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Failed to submit surveyor enquiry:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  }

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(SURVEYOR_FORM_EVENT, handleOpen);
    return () => window.removeEventListener(SURVEYOR_FORM_EVENT, handleOpen);
  }, []);

  return (
    <Form<SurveyorFormValues>
      open={open}
      onOpenChange={setOpen}
      initialValues={initialValues}
      fields={fields as any}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="space-y-4"
      submitButton={{ label: "Send Message" }}
      sheetTitle="Become a Houzecheck Surveyor"
      sheetDescription="Tell us a bit about yourself and we’ll be in touch soon."
      sheetTriggerLabel="Sign up now"
    />
  );
}
