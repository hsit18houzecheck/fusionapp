"use client";

import { cn } from "@/lib/utils";
import type { OverlayCardComponentProps } from "./types";
import { ChevronUp } from "lucide-react";
import { Button } from "../Button";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

export function OverlayCardComponent({
  id,
  card,
  isActive,
  onToggle,
  totalCards,
}: OverlayCardComponentProps) {
  const { isMobile } = useTailwindBreakpoint();
  return (
    <div
      className={cn(
        "relative h-138 w-70.75 shrink-0 rounded-2xl border border-grey-500 overflow-hidden",
        "bg-cover bg-center bg-no-repeat bg-[lightgray]",
        {
          "md:h-208.5 md:w-135.5": totalCards === 3,
          "md:h-208.5 md:w-204.5": totalCards === 2,
          "md:h-174.5 md:w-100": totalCards !== 2 && totalCards !== 3,
        }
      )}
      style={{
        backgroundImage: `url(${isMobile ? card.mobileImage || card.image : card.image})`,
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
            {
              "bg-yellow-900/80 h-full overflow-y-auto": isActive,
              "items-center": !isActive,
              "text-left items-start": card.textAlign === "left",
              "text-center items-center":
                !card.textAlign || card.textAlign === "center",
              "text-right items-end": card.textAlign === "right",
            }
          )}
        >
          {/* Eyebrow */}
          {card.eyebrow && (
            <p className="font-bold text-[0.5rem] md:text-[0.625rem] leading-3 text-peach-500 uppercase tracking-[0.25em]">
              {card.eyebrow}
            </p>
          )}

          {/* Title */}
          <h3
            className={cn(
              "font-freight text-yellow-100 transition-all duration-300 ease-in-out",
              {
                "text-[1.125rem] md:text-2xl leading-5.5 md:leading-7":
                  isActive,
                "text-[2rem] md:text-[2.5rem] leading-8 md:leading-11":
                  !isActive,
              }
            )}
          >
            {card.title}
          </h3>

          {/* Subtitle */}
          {card.subtitle && (
            <p className="font-medium text-xs md:text-sm text-white">
              {card.subtitle}
            </p>
          )}

          {/* Read More button */}
          <Button
            variant={card.button.variant || "secondary"}
            onClick={() => onToggle(isActive ? null : id)}
            aria-expanded={isActive}
            aria-controls={`content-${id}`}
          >
            {isActive ? "Close" : card.button.label}
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

          {/* Text list (only shown when active) */}
          {isActive && card.textList && card.textList.length > 0 && (
            <div
              id={`content-${id}`}
              className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              {card.textList.map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <div
                    className="font-normal text-xs md:text-base leading-7 text-white"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  {index < card.textList!.length - 1 && (
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
