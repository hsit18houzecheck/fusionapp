import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ExpandableSectionProps } from "./types";

export default function ExpandableSection({
  icon,
  title,
  subtitle,
  isExpanded,
  onToggle,
  variant = "default",
  sectionLabel,
}: ExpandableSectionProps) {
  const containerClasses = cn("flex flex-col gap-2 p-4 md:p-6 rounded-xl space-y-4", {
    "bg-white": variant === "default",
    "bg-yellow-800": variant === "highlight",
  });

  const titleClasses = cn("text-xs md:text-sm font-semibold", {
    "text-peach-900": variant === "default",
    "text-peach-500": variant === "highlight",
  });

  const textClasses = cn("text-sm md:text-base leading-relaxed", {
    "text-grey-500": variant === "default",
    "text-white": variant === "highlight",
    "line-clamp-2": !isExpanded,
    "md:line-clamp-none": true,
  });

  const buttonClasses = cn("text-xs md:text-sm font-semibold text-left md:hidden", {
    "text-peach-900 hover:text-peach-700": variant === "default",
    "text-peach-500 hover:text-peach-300": variant === "highlight",
  });

  const WrapperTag = sectionLabel ? "aside" : "section";
  const wrapperProps = sectionLabel ? { "aria-label": sectionLabel } : {};

  return (
    <WrapperTag {...wrapperProps}>
      <div className={containerClasses}>
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="w-5 h-5"
          aria-hidden="true"
        />
        <h4 className={titleClasses}>{title}</h4>
        <div
          className={textClasses}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <button
          onClick={onToggle}
          className={buttonClasses}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </WrapperTag>
  );
}
