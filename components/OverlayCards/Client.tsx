"use client";

import { useState } from "react";
import type { OverlayCardsContent } from "./types";
import { OverlayCardComponent } from "./OverlayCard";
import AnimateOnView from "../ui/animate-on-view";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";
import { Button } from "../Button";
import { handleCTAClick } from "@/lib/utils";
import Link from "next/link";
import { SectionWrapper } from "../SectionWrapper";

type OverlayCardsClientProps = OverlayCardsContent;

export default function OverlayCardsClient({
  eyebrow,
  title,
  subtitle,
  backgroundColor,
  cta,
  ctaV2,
  cards,
}: OverlayCardsClientProps) {
  const [activeCardId, setActiveCardId] = useState<number | null>();
  const { isMobile } = useTailwindBreakpoint();

  const handleToggleCard = (index: number | null) => {
    setActiveCardId(index);
  };

  return (
    <SectionWrapper
      className="py-12 md:py-20"
      style={{ backgroundColor }}
      eyebrow={
        eyebrow ? { ...eyebrow, style: { color: eyebrow.color } } : undefined
      }
      title={title ? { ...title, style: { color: title.color } } : undefined}
      subtitle={
        subtitle ? { ...subtitle, style: { color: subtitle.color } } : undefined
      }
    >
      {/* Overlay cards */}
      <div className="flex gap-2 md:gap-4 items-start md:items-center justify-between overflow-x-auto w-full">
        {cards.map((card, index) => (
          <AnimateOnView
            key={index}
            delay={isMobile ? 0 : index * 0.2}
            duration={isMobile ? 0 : 0.5}
            amount={isMobile ? 0 : 0.3}
            direction="up"
          >
            <OverlayCardComponent
              key={index}
              id={index}
              card={card}
              isActive={activeCardId === index}
              onToggle={(v) => handleToggleCard(v)}
              totalCards={cards.length}
            />
          </AnimateOnView>
        ))}
      </div>

      {/* CTA Button */}
      {!!cta?.label && (
        <a
          href={cta.href}
          className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-sm text-yellow-900 hover:bg-yellow-400 transition-colors"
        >
          {cta.label}
        </a>
      )}

      {!!ctaV2?.label && (
        <AnimateOnView delay={3 * 0.15}>
          <div className="flex justify-center">
            <Button
              variant={ctaV2.variant}
              leftIcon={ctaV2.leftIcon}
              rightIcon={ctaV2.rightIcon}
              iconClassName="size-5"
              onClick={(e) => handleCTAClick(e, ctaV2)}
            >
              {ctaV2.onClick ? (
                ctaV2.label
              ) : (
                <Link href={ctaV2.url || "/"}>{ctaV2.label}</Link>
              )}
            </Button>
          </div>
        </AnimateOnView>
      )}
    </SectionWrapper>
  );
}
