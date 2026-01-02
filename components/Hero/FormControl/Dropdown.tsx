import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectOption } from "../type";

type DropdownProps = {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
};

export default function Dropdown({
  placeholder,
  value,
  onValueChange,
  options,
  className,
}: DropdownProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          "w-full h-12! px-3 rounded-xl text-sm",
          "bg-white-100 border-0 text-yellow-900",
          "placeholder:text-grey-300 [&>span]:text-grey-300 font-medium",
          "focus:ring-2 focus:ring-yellow-500",
          !value && "text-grey-300",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white-100 border-grey-300">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

