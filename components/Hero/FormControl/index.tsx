"use client";

import Input from "./Input";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import { SelectOption } from "../type";

type FormControlProps = {
  type: "input" | "date" | "dropdown";
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  options?: SelectOption[];
  className?: string;
  disablePastDates?: boolean;
};

export default function FormControl({
  type,
  placeholder,
  value,
  onChange,
  onValueChange,
  options = [],
  className,
  disablePastDates = false,
}: FormControlProps) {
  const renderControl = () => {
    switch (type) {
      case "date":
        return (
          <DatePicker
            placeholder={placeholder}
            value={value}
            onChange={onChange!}
            className={className}
            disablePastDates={disablePastDates}
          />
        );

      case "dropdown":
        return (
          <Dropdown
            placeholder={placeholder}
            value={value}
            onValueChange={onValueChange!}
            options={options}
            className={className}
          />
        );

      case "input":
      default:
        return (
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange!}
            className={className}
          />
        );
    }
  };

  return <>{renderControl()}</>;
}
