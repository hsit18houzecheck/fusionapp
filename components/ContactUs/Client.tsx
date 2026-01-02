"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactUsContent } from "./types";
import { MapSvg } from "./MapSvg";
import { SectionWrapper } from "../SectionWrapper";
import SectionHeader from "../SectionWrapper/Header";

type ContactUsClientProps = ContactUsContent;

export default function ContactUsClient({
  eyebrow,
  title,
  description,
  formFields,
  submitButtonLabel,
  successMessage,
  errorMessage,
  validationErrorMessage,
}: ContactUsClientProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateField = (
    field: ContactUsContent["formFields"][0]
  ): string | null => {
    const value = formData[field.name]?.trim() || "";

    if (field.required && !value) {
      return field.errorMessage || `${field.label} is required`;
    }

    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return field.errorMessage || "Please enter a valid email address";
      }
    }

    if (field.type === "tel" && value) {
      const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        return field.errorMessage || "Please enter a valid phone number";
      }
    }

    return null;
  };

  const handleBlur = (field: ContactUsContent["formFields"][0]) => {
    const error = validateField(field);
    if (error) {
      setErrors((prev) => ({ ...prev, [field.name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    formFields?.forEach((field) => {
      const error = validateField(field);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        queryType: formData.query_type,
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: `New Contact Request: ${formData.query_type || "General Query"}`,
      };

      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFieldInput = (field: ContactUsContent["formFields"][0]) => {
    const fieldId = `contact-${field.name}`;
    const value = formData[field.name] || "";
    const hasError = !!errors[field.name];

    const label = (
      <div className="flex items-center pb-3 px-1 w-full">
        <label
          htmlFor={fieldId}
          className="text-sm font-semibold text-yellow-900 leading-3.5 whitespace-pre"
        >
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
    );

    if (field.type === "select") {
      return (
        <>
          {label}
          <Select
            value={value}
            onValueChange={(val) => handleInputChange(field.name, val)}
          >
            <SelectTrigger
              id={fieldId}
              className={cn(
                "w-full h-12 data-[size=default]:h-12 data-placeholder:text-grey-300 rounded-lg border bg-white px-3 py-4 text-base font-medium leading-6 focus:ring-yellow-500 border-grey-500",
                { "border-red-500": hasError }
              )}
            >
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.label}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasError && (
            <p className="text-red-500 text-xs mt-1 px-1">
              {errors[field.name]}
            </p>
          )}
        </>
      );
    }

    if (field.type === "textarea") {
      return (
        <>
          {label}
          <textarea
            id={fieldId}
            name={field.name}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={field.placeholder}
            required={field.required}
            rows={5}
            className={cn(
              "w-full rounded-lg border bg-white px-3 py-4 text-base",
              "placeholder:text-grey-300 font-medium leading-6",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "resize-none min-h-46 border-grey-500",
              { "border-red-500": hasError }
            )}
            aria-label={field.label}
            aria-required={field.required}
            aria-invalid={hasError}
          />
          {hasError && (
            <p className="text-red-500 text-xs mt-1 px-1">
              {errors[field.name]}
            </p>
          )}
        </>
      );
    }

    return (
      <>
        {label}
        <Input
          id={fieldId}
          name={field.name}
          type={field.type}
          value={value}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          onBlur={() => handleBlur(field)}
          placeholder={field.placeholder}
          required={field.required}
          className={cn(
            "h-12 rounded-lg border bg-white px-3 py-4 text-base",
            "placeholder:text-grey-300 font-medium leading-6",
            "focus-visible:border-yellow-500",
            "border-grey-500",
            { "border-red-500": hasError }
          )}
          aria-label={field.label}
          aria-required={field.required}
          aria-invalid={hasError}
        />
        {hasError && (
          <p className="text-red-500 text-xs mt-1 px-1">{errors[field.name]}</p>
        )}
      </>
    );
  };

  return (
    <SectionWrapper>
      <div
        className="bg-yellow-100 rounded-2xl flex flex-col md:flex-row justify-between px-6 py-10 md:p-10 gap-x-10"
        id="contact"
      >
        {/* Contact Form */}
        <div className="md:max-w-185.5">
          <SectionHeader
            contentCenter={false}
            eyebrow={eyebrow}
            title={title}
            subtitle={description}
          />
          <div className="h-px w-full bg-peach-500 my-7.5 md:my-10" />
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-5"
            noValidate
          >
            {formFields?.map((field) => (
              <div
                key={field.name}
                className={cn(
                  "flex flex-col items-start w-full",
                  field.name === "first_name" || field.name === "last_name"
                    ? "col-span-1"
                    : "col-span-1 md:col-span-2"
                )}
              >
                {renderFieldInput(field)}
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 space-y-5">
              {submitStatus === "success" && successMessage && (
                <div
                  className="p-4 rounded-md bg-green-50 border border-green-200 text-green-800 text-sm"
                  role="alert"
                  aria-live="polite"
                >
                  {successMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm"
                  role="alert"
                  aria-live="assertive"
                >
                  {Object.keys(errors).length > 0
                    ? validationErrorMessage ||
                      "Please fill in all required fields correctly."
                    : errorMessage}
                </div>
              )}

              <div className="flex items-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "bg-yellow-500 hover:bg-yellow-500/90 text-yellow-900",
                    "h-12 p-3.5 rounded-lg",
                    "font-semibold text-sm leading-4.5",
                    "flex items-center gap-2",
                    "w-auto"
                  )}
                  aria-label={submitButtonLabel}
                >
                  {isSubmitting ? "Sending..." : submitButtonLabel}
                  {!isSubmitting && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_2665_22285"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2665_22285)">
                        <path
                          d="M12.4773 11.0228H3.59961V8.98115H12.4773L8.54898 5.0526L10 3.60156L16.4004 10.002L10 16.4024L8.54898 14.9514L12.4773 11.0228Z"
                          fill="#1F1801"
                        />
                      </g>
                    </svg>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
        {/* Right Section - Map Graphic */}
        <div className="hidden md:flex items-baseline justify-center">
          <div className="relative w-full h-full min-h-100 md:min-h-150">
            <div className="relative w-full h-full bg-yellow-100 rounded-lg flex items-baseline justify-center">
              <MapSvg />
              {/* Popup Overlay */}
              <div className="absolute right-[35%] bottom-[35%] w-68.25 h-27.75">
                <svg
                  width="273"
                  height="111"
                  viewBox="0 0 273 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-lg"
                >
                  <g filter="url(#filter0_d_2669_29288)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 10C4 4.47715 8.47715 0 14 0H258.64C264.163 0 268.64 4.47715 268.64 10V90.9842C268.64 96.507 264.163 100.984 258.64 100.984H252.176L239.7 110.984L229.024 100.984H14C8.47715 100.984 4 96.507 4 90.9842V10Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2669_29288"
                      x="0"
                      y="0"
                      width="272.64"
                      height="118.984"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2669_29288"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2669_29288"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                {/* Logo inside popup */}
                <div className="absolute inset-0 flex items-center justify-center pb-2">
                  <div className="relative w-50 h-12.5">
                    <Image
                      src="/assets/images/hc-logo.webp"
                      alt="Houzecheck Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
