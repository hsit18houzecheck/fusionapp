import { cn } from "@/lib/utils";
import { RowVariant } from "./types";

const ValueCell = ({
  value,
  variant,
}: {
  value: React.ReactNode;
  variant: RowVariant;
}) => {
  const wrapperClasses = cn("px-2.5 md:px-4", {
    "py-4 md:py-8": variant === "best",
    "py-8": variant === "normal",
  });
  const textClasses = cn("text-center font-medium", {
    "text-[1.25rem] md:text-[2rem] font-freight text-foreground":
      variant === "best",
    "text-sm md:text-lg text-muted-foreground": variant === "normal",
  });

  return (
    <div className={wrapperClasses}>
      <h3 className={textClasses}>{value ?? "—"}</h3>
    </div>
  );
};

export default ValueCell;
