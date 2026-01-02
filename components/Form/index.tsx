"use client";

import { useFormik } from "formik";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import { SelectField, TextInputField } from "./FormControl";
import type { FormProps, FieldConfig } from "./types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Form<TValues extends Record<string, any>>({
  initialValues,
  fields,
  validationSchema,
  onSubmit,
  className,
  submitButton,
  open,
  onOpenChange,
  sheetTitle,
  sheetDescription,
  sheetTriggerLabel,
  side = "right",
}: FormProps<TValues>) {
  const formik = useFormik<TValues>({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit,
  });

  const isFormValid = formik.isValid && formik.dirty;

  const renderField = (field: FieldConfig) => {
    if (field.type === "select") {
      return (
        <SelectField
          key={field.name}
          id={field.id ?? field.name}
          label={field.label}
          placeholder={field.placeholder}
          options={field.options ?? []}
          formik={formik}
          fieldName={field.name}
        />
      );
    }

    return (
      <TextInputField
        key={field.name}
        id={field.id ?? field.name}
        label={field.label}
        type={field.type as any}
        placeholder={field.placeholder}
        formik={formik}
        fieldName={field.name}
      />
    );
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          size="lg"
          rightIcon={submitButton?.icon ?? "MdArrowOutward"}
          className={cn("md:h-12")}
        >
          {sheetTriggerLabel ?? "Open Form"}
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          {sheetTitle && <SheetTitle>{sheetTitle}</SheetTitle>}
          {sheetDescription && (
            <SheetDescription>{sheetDescription}</SheetDescription>
          )}
        </SheetHeader>
        <form
          onSubmit={formik.handleSubmit}
          className={cn("flex flex-col space-y-6 p-4", className)}
        >
          {fields.map(renderField)}

          {submitButton && (
            <div className="pt-4 w-full flex justify-end">
              <Button
                type="submit"
                size="lg"
                rightIcon={submitButton.icon}
                className={
                  submitButton.getClassName
                    ? submitButton.getClassName({
                        isValid: formik.isValid,
                        dirty: formik.dirty,
                        values: formik.values,
                      })
                    : cn(
                        "w-1/2 transition-colors duration-200 md:h-12",
                        submitButton.className,
                        isFormValid
                          ? "bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90"
                          : "bg-grey-100 text-grey-300 hover:bg-grey-100/90"
                      )
                }
              >
                {submitButton.label}
              </Button>
            </div>
          )}
        </form>
      </SheetContent>
    </Sheet>
  );
}
