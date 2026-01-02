import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export interface FormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, error, touched, children }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <Label
        className={cn(
          "text-sm font-medium",
          touched && error ? "text-red-600" : "text-yellow-900"
        )}
      >
        {label}
      </Label>
      {children}
      {touched && error && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
          {error}
        </p>
      )}
    </div>
  );
}
