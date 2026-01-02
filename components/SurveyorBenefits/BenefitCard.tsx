"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { BenefitCardComponentProps } from "./types";
import { ChevronUp } from "lucide-react";

export function BenefitCardComponent({
  id,
  card,
  isActive,
  onToggle,
  benefitsCtaLabel,
}: BenefitCardComponentProps) {
  return (
    <div
      className={cn(
        "relative h-138 w-70.75 md:h-174.5 md:w-100 shrink-0 rounded-2xl border border-grey-500 overflow-hidden",
        "bg-cover bg-center bg-no-repeat bg-[lightgray]"
      )}
      style={{
        backgroundImage: `url(${card.image})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-yellow-900/70 to-100%" />
      {/* Content container */}
      <div
        className={cn(
          "relative h-full flex flex-col gap-6 transition-all duration-300 ease-in-out",
          {
            "justify-start": isActive,
            "justify-end items-center": !isActive,
          }
        )}
      >
        <div
          className={cn(
            "backdrop-blur-[2px] bg-white/0 flex flex-col gap-6 w-full px-6 py-8 md:px-8 md:py-12 transition-all duration-300 ease-in-out",
            { "bg-yellow-900/80 h-full": isActive, "items-center": !isActive }
          )}
        >
          {/* Title */}
          <h3
            className={cn(
              "font-freight text-yellow-100 text-center transition-all duration-300 ease-in-out",
              {
                "text-[1.125rem] md:text-2xl leading-5.5 md:leading-7": isActive,
                "text-[2rem] md:text-[2.5rem] leading-8 md:leading-11":
                  !isActive,
              }
            )}
          >
            {card.roleType}
          </h3>

          {/* Benefits button */}
          <Button
            variant="ghost"
            onClick={() => onToggle(isActive ? null : id)}
            className="h-12 cursor-pointer rounded-lg bg-transparent hover:bg-transparent p-3 md:p-3.5 gap-1"
            aria-expanded={isActive}
            aria-controls={`benefits-${id}`}
          >
            <span className="font-semibold text-xs md:text-sm leading-4 md:leading-4.5 text-yellow-500">
              {benefitsCtaLabel}
            </span>
            <ChevronUp
              strokeWidth={3}
              className={cn(
                "text-yellow-500 transition-transform duration-300 ease-in-out",
                isActive && "rotate-180"
              )}
              width="11"
              height="7"
            />
          </Button>

          {/* Benefits list (only shown when active) */}
          {isActive && card.benefits && card.benefits.length > 0 && (
            <div
              id={`benefits-${id}`}
              className="flex flex-col gap-6 grow justify-center w-full animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              {card.benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <p className="font-normal text-xs md:text-base leading-7 text-white text-center">
                    {benefit.title}
                  </p>
                  {index < card.benefits!.length - 1 && (
                    <div className="h-px w-full bg-peach-500 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
