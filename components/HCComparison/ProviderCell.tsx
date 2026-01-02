import { cn } from "@/lib/utils";
import Image from "next/image";
import { RowVariant } from "./types";

const ProviderCell = ({
  logo,
  name,
  variant,
}: {
  logo?: string;
  name?: string;
  variant: RowVariant;
}) => {
  const containerClasses = cn("flex items-center gap-3 md:px-4", {
    "px-1 py-4 md:py-6": variant === "best",
    "px-2.5 py-6": variant === "normal",
  });

  return (
    <div className={containerClasses}>
      {logo && (
        <div
          className={cn("relative shrink-0 h-[1.875rem] md:h-[2.6875rem]", {
            "w-[6.125rem] md:w-[10.1875rem]": variant === "best",
            "w-[5.5rem] md:w-[9.5625rem]": variant !== "best",
          })}
        >
          <Image
            src={logo}
            alt={name || "logo"}
            fill
            className="object-contain"
          />
        </div>
      )}
      {!logo && !!name && (
        <h3
          className={cn("text-center font-medium", {
            "text-lg md:text-3xl font-freight text-foreground":
              variant === "best",
            "text-sm md:text-lg text-muted-foreground": variant === "normal",
          })}
        >
          {name ?? "—"}
        </h3>
      )}
    </div>
  );
};

export default ProviderCell;
