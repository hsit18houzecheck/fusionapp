"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { MdCalendarToday } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disablePastDates?: boolean;
};

export default function DatePicker({
  placeholder,
  value,
  onChange,
  className,
  disablePastDates = false,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    // Create a synthetic event to match the onChange signature
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format("DD-MM-YYYY");
      const syntheticEvent = {
        target: { value: formattedDate },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
      
      // Close the popover after selection
      setIsOpen(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full h-12 px-3 rounded-xl text-sm justify-start text-left font-medium",
            "bg-white-100 border-0 hover:bg-white-100",
            !date && "text-grey-300",
            date && "text-yellow-900",
            className
          )}
        >
          <MdCalendarToday className="mr-2 h-5 w-5 text-grey-300" />
          {date ? dayjs(date).format("MMM D, YYYY") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className={cn(
          "w-(--radix-popover-trigger-width) p-0 border-0",
          "bg-yellow-900 rounded-2xl"
        )} 
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          autoFocus
          disabled={disablePastDates ? (date) => date < today : undefined}
          className={cn(
            "rounded-2xl p-2 w-full",
            "bg-yellow-900 text-white-100"
          )}
          classNames={{
            months: "space-y-2",
            month: "space-y-2",
            caption: "flex justify-center pt-1 pb-1 relative items-center h-10",
            caption_label: "text-sm font-medium text-white-100",
            nav: "flex items-center justify-between w-full absolute inset-x-0",
            button_previous: cn(
              "h-8 w-8 bg-yellow-500 rounded-lg ml-1",
              "hover:bg-yellow-500/90 hover:opacity-100",
              "text-yellow-900 font-bold flex items-center justify-center"
            ),
            button_next: cn(
              "h-8 w-8 bg-yellow-500 rounded-lg mr-1",
              "hover:bg-yellow-500/90 hover:opacity-100",
              "text-yellow-900 font-bold flex items-center justify-center"
            ),
            table: "w-full border-collapse",
            weekdays: "flex",
            weekday: cn(
              "text-white-100 rounded-full w-8 font-normal text-[0.65rem]",
              "opacity-70"
            ),
            week: "flex w-full mt-0.5",
            day: cn(
              "h-8 w-8 text-center text-xs p-0 relative",
              "text-white-100 rounded-full",
              "hover:bg-yellow-500/20 hover:text-white-100"
            ),
            day_button: cn(
              "h-8 w-8 p-0 font-normal text-xs rounded-full",
              "hover:bg-yellow-500/20 hover:text-white-100",
              "[&[data-selected-single='true']]:rounded-full",
              "[&[data-selected-single='true']]:bg-yellow-500",
              "[&[data-selected-single='true']]:text-yellow-900",
              "[&[data-selected-single='true']]:font-bold"
            ),
            range_start: "rounded-full",
            range_end: "rounded-full",
            selected: cn(
              "bg-yellow-500 text-yellow-900 font-bold !rounded-full",
              "hover:bg-yellow-500 hover:text-yellow-900",
              "focus:bg-yellow-500 focus:text-yellow-900"
            ),
            today: "bg-transparent border border-yellow-500 text-white-100 rounded-full",
            outside: cn(
              "text-white-100 opacity-30",
              "aria-selected:bg-yellow-500/50 aria-selected:text-yellow-900"
            ),
            disabled: "text-white-100 opacity-20",
            hidden: "invisible",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
