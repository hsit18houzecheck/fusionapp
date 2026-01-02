"use client";

import { cn } from "@/lib/utils";

export type ToggleSwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
  switchClassName?: string;
  disabled?: boolean;
};

export function ToggleSwitch({
  label,
  checked,
  onChange,
  className,
  labelClassName,
  switchClassName,
  disabled = false,
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      aria-pressed={checked}
      className={cn(
        "flex items-center gap-2 text-[12px] md:text-[14px] font-medium whitespace-nowrap cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span className={labelClassName}>{label}</span>
      <div
        className={cn(
          "relative w-9 h-5 rounded-full transition-colors",
          checked ? "bg-yellow-500" : "bg-grey-300",
          switchClassName
        )}
      >
        <div
          className={cn(
            "absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform",
            checked ? "left-[18px]" : "left-0.5"
          )}
        />
      </div>
    </button>
  );
}

