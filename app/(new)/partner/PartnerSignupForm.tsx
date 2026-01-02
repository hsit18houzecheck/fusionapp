"use client";

import Form from "@/components/Form";
import { createValidationSchemaFromFields } from "@/components/Form/validation";
import { apiClient } from "@/lib/apiClient";
import { useEffect, useState } from "react";
import { PARTNER_FORM_EVENT } from "./constants";
import { toast } from "sonner";
import { FormikHelpers } from "formik";

type PartnerFormValues = {
  first_name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
};

export default function PartnerSignupForm() {
  const [open, setOpen] = useState(false);

  const initialValues: PartnerFormValues = {
    first_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const fields = [
    {
      type: "text",
      name: "first_name",
      label: "Full Name",
      placeholder: "Full Name",
    },
    { type: "email", name: "email", label: "Email", placeholder: "Email" },
    { type: "tel", name: "phone", label: "Phone", placeholder: "Phone" },
    {
      type: "text",
      name: "company",
      label: "Company",
      placeholder: "Company",
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      placeholder: "Enter your message",
    },
  ] as const;

  const validationSchema = createValidationSchemaFromFields(fields as any);

  async function onSubmit(
    values: PartnerFormValues,
    { resetForm }: FormikHelpers<PartnerFormValues>
  ) {
    try {
      const body = {
        type: "partner_enquiry",
        ...values,
      };

      await apiClient.post(
        `${window.location.origin}/api/track-and-send-mail`,
        body
      );
      toast.success("Thanks for your interest, we will get back to you soon!");
      resetForm();
    } catch (error) {
      console.error("Failed to submit partner enquiry:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  }

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash === "#partner-signup") {
      setOpen(true);
    }
    const onHashChange = () => {
      if (window.location.hash === "#partner-signup") {
        setOpen(true);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(PARTNER_FORM_EVENT, handleOpen);
    return () => window.removeEventListener(PARTNER_FORM_EVENT, handleOpen);
  }, []);

  return (
    <Form<PartnerFormValues>
      open={open}
      onOpenChange={setOpen}
      initialValues={initialValues}
      fields={fields as any}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="space-y-4"
      submitButton={{ label: "Send Message" }}
      sheetTitle="Become a Houzecheck Partner"
      sheetDescription="Tell us a bit about yourself and we’ll be in touch soon."
      sheetTriggerLabel="Sign up now"
    />
  );
}
