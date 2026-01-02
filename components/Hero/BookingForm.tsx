"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { cn } from "@/lib/utils";
import FormControl from "./FormControl";
import FormDivider from "./FormDivider";
import { SelectOption } from "./type";

type BookingFormProps = {
  datepickerPlaceholder: string;
  postcodePlaceholder: string;
  submitButtonLabel: string;
  surveyTypePlaceholder: string;
  surveyTypes: SelectOption[];
  className?: string;
};


export default function BookingForm({
  datepickerPlaceholder,
  postcodePlaceholder,
  submitButtonLabel,
  surveyTypePlaceholder,
  surveyTypes,
  className,
}: BookingFormProps) {
  const [date, setDate] = useState("");
  const [surveyType, setSurveyType] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ date, surveyType, postcode });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full bg-yellow-900 rounded-[20px] mx-auto",
        "p-4 md:p-5",
        "flex flex-col md:flex-row items-stretch gap-3",
        className
      )}
    >
      {/* Date Picker */}
      <div className="flex-1 min-w-0">
        <FormControl
          type="date"
          placeholder={datepickerPlaceholder}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disablePastDates={true}
        />
      </div>
      <FormDivider />
      {/* Survey Type Dropdown */}
      <div className="flex-1 min-w-0">
        <FormControl
          type="dropdown"
          placeholder={surveyTypePlaceholder}
          value={surveyType}
          onValueChange={setSurveyType}
          options={surveyTypes}
        />
      </div>
      <FormDivider />
      {/* Postcode Input */}
      <div className="flex-1 min-w-0">
        <FormControl
          type="input"
          placeholder={postcodePlaceholder}
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <FormDivider />
      {/* Submit Button */}
      <div className="w-1/2 md:w-auto md:flex-initial ml-auto">
        <Button
          type="submit"
          className={cn(
            "w-full h-12 px-6 rounded-xl",
            "bg-yellow-500 hover:bg-yellow-500/90 text-yellow-900",
            "font-bold text-sm"
          )}
        >
          {submitButtonLabel}
          <MdKeyboardArrowDown
            className="w-5 h-5 ml-1 -rotate-90"
            aria-hidden="true"
          />
        </Button>
      </div>
    </form>
  );
}
