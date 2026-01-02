"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SurveyorBenefitsContent } from "./types";
import { BenefitCardComponent } from "./BenefitCard";
import AnimateOnView from "../ui/animate-on-view";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";
import { ArrowUpRight } from "lucide-react";

type SurveyorBenefitsClientProps = SurveyorBenefitsContent;

export default function SurveyorBenefitsClient({
  eyebrow,
  title,
  subtitle,
  cards,
  cta,
  benefitsCtaLabel,
}: SurveyorBenefitsClientProps) {
  const [activeCardId, setActiveCardId] = useState<number | null>();
  const { isMobile } = useTailwindBreakpoint();

  const handleToggleCard = (index: number | null) => {
    setActiveCardId(index);
  };

  return (
    <section className="bg-yellow-900 w-full flex flex-col gap-8 md:gap-10 items-center px-0 py-12 md:px-10 md:py-20">
      {/* Section header */}
      {(eyebrow || title || subtitle) && (
        <div className="flex flex-col gap-8 md:gap-9 items-center max-w-7xl text-center w-full">
          {eyebrow && (
            <p className="font-bold text-[0.5rem] md:text-[0.625rem] leading-3 text-peach-500 uppercase tracking-[0.25em]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-freight text-yellow-100 text-[2.25rem] md:text-[3.5rem] leading-10 md:leading-15 tracking-normal">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="font-medium text-base md:text-lg leading-7 text-white tracking-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Benefits cards */}
      <div className="flex gap-2 md:gap-4 items-start md:items-center overflow-x-auto w-full md:w-auto px-6 md:px-0 mx-auto">
        {cards.map((card, index) => (
          <AnimateOnView
            key={index}
            delay={isMobile ? 0 : index * 0.2}
            duration={isMobile ? 0 : 0.5}
            amount={isMobile ? 0 : 0.3}
            direction="up"
          >
            <BenefitCardComponent
              key={index}
              id={index}
              card={card}
              isActive={activeCardId === index}
              onToggle={(v) => handleToggleCard(v)}
              benefitsCtaLabel={benefitsCtaLabel}
            />
          </AnimateOnView>
        ))}
      </div>

      {/* CTA button */}
      <Button
        asChild
        className="h-12 rounded-lg bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90 p-3 md:p-3.5 gap-1"
      >
        <Link href={cta.href || "/"}>
          <span className="font-semibold text-xs md:text-sm leading-4 md:leading-4.5 whitespace-nowrap">
            {cta.label}
          </span>
          <ArrowUpRight className="size-5" strokeWidth={3} />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <mask
              id="mask0_2149_19971"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2149_19971)">
              <path
                d="M5.18005 15.3898L3.729 13.9388L11.8957 5.77214H4.84671V3.73047H15.3884V14.2721H13.3467V7.22318L5.18005 15.3898Z"
                fill="#1F1801"
              />
            </g>
          </svg> */}
        </Link>
      </Button>
    </section>
  );
}
