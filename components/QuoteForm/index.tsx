"use client";

import Image from "next/image";
import { useFormik } from "formik";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/Button";
import { TextInputField, SelectField } from "./FormControl";
import { createValidationSchema } from "./validation";
import type { QuoteFormProps } from "./types";

export default function QuoteForm({
  data,
  open,
  onOpenChange,
}: QuoteFormProps) {
  if (!data) return null;

  const formik = useFormik({
    initialValues: {
      surveyType: "",
      propertyPostcode: "",
      phoneNumber: "",
      email: "",
      name: "",
    },
    validationSchema: createValidationSchema(data),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // Handle form submission
    },
  });

  // Check if form is valid (all fields filled and no errors)
  const isFormValid = formik.isValid && formik.dirty;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-19/20 sm:max-w-[480px]! sm:w-115 backdrop-blur-xl bg-yellow-100/80 border-l rounded-l-2xl border-yellow-500/20 p-0 shadow-lg overflow-y-auto"
      >
        <SheetHeader className="flex flex-col space-y-4 px-9 md:px-10 pt-6">
          {/* Logo */}
          {data.logo && (
            <div className="flex justify-start">
              <Image
                src={data.logo}
                alt="Logo"
                width={60}
                height={60}
                className="w-15 h-15 object-contain"
              />
            </div>
          )}

          {/* Eyebrow */}
          {data.eyebrow && (
            <p
              className="text-[0.625rem] font-bold uppercase tracking-widest"
              style={{ color: data.eyebrow.color }}
            >
              {data.eyebrow.text}
            </p>
          )}

          {/* Title */}
          {data.title && (
            <SheetTitle
              className="font-freight text-3xl md:text-4xl font-medium leading-tight text-left"
              style={{ color: data.title.color }}
            >
              {data.title.text}
            </SheetTitle>
          )}

          {/* Subtitle */}
          {data.subtitle && (
            <SheetDescription
              className="text-sm md:text-base font-medium text-left"
              style={{ color: data.subtitle.color }}
            >
              {data.subtitle.text}
            </SheetDescription>
          )}
        </SheetHeader>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-6 py-6 px-9 md:px-10"
        >
          {/* Survey Type */}
          {data.surveyTypeField && (
            <SelectField
              id="surveyType"
              label={data.surveyTypeField.label}
              placeholder="Select survey type"
              options={data.surveyTypeField.options.map(({ label, value }) => ({
                label,
                value,
              }))}
              formik={formik}
              fieldName="surveyType"
            />
          )}

          {/* Property Postcode */}
          {data.propertyPostcode && (
            <TextInputField
              id="postcode"
              label={data.propertyPostcode.label}
              type="text"
              placeholder={data.propertyPostcode.placeholder}
              formik={formik}
              fieldName="propertyPostcode"
            />
          )}

          {/* Phone Number */}
          {data.phoneNumber && (
            <TextInputField
              id="phone"
              label={data.phoneNumber.label}
              type="tel"
              placeholder={data.phoneNumber.placeholder}
              formik={formik}
              fieldName="phoneNumber"
            />
          )}

          {/* Email */}
          {data.email && (
            <TextInputField
              id="email"
              label={data.email.label}
              type="email"
              placeholder={data.email.placeholder}
              formik={formik}
              fieldName="email"
            />
          )}

          {/* Full Name */}
          {data.name && (
            <TextInputField
              id="name"
              label={data.name.label}
              type="text"
              placeholder={data.name.placeholder}
              formik={formik}
              fieldName="name"
            />
          )}

          {/* Submit Button */}
          {data.button && (
            <div className="pt-4 w-full flex justify-end">
              <Button
                type="submit"
                size="lg"
                rightIcon={data.button.icon}
                className={cn("w-1/2 transition-colors duration-200 md:h-12", {
                  "bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90": isFormValid,
                  "bg-grey-100 text-grey-300 hover:bg-grey-100/90": !isFormValid,
                })}
              >
                {data.button.label}
              </Button>
            </div>
          )}
        </form>
      </SheetContent>
    </Sheet>
  );
}
