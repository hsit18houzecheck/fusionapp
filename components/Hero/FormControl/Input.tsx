import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  className,
}: InputProps) {
  return (
    <ShadcnInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full h-12 px-3 rounded-xl text-sm",
        "bg-white-100 border-0 text-yellow-900",
        "placeholder:text-grey-300 font-medium",
        className
      )}
    />
  );
}

