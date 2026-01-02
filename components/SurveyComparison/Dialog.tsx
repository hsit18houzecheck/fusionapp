"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SurveyComparisonContent } from "./types";
import { ArrowUpRight } from "lucide-react";
import { ComparisonTable } from "../ComparisonTable";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

export type SurveyComparisonClientProps = SurveyComparisonContent;

export default function SurveyComparisonDialog({
  eyebrow,
  title,
  comparisonDate,
  table: {columns, rows},
  ctaButton,
}: SurveyComparisonClientProps) {
  
  const {isMobile} = useTailwindBreakpoint();

  return (
    <section className="w-full bg-white gap-y-10 flex flex-col items-center px-0 md:px-14 py-16 md:py-20 relative">
      {/* Section Header */}

      {(eyebrow || title || comparisonDate) && (
        <div className="flex flex-col gap-9 md:gap-10 items-center text-center w-full md:w-auto">
          <p className="font-bold text-[0.625rem] leading-3 text-peach-500 uppercase tracking-[0.25rem]">
            {eyebrow}
          </p>
          <h2 className="font-freight font-medium text-yellow-900 text-[2.5rem] md:text-[3.5rem] leading-11 md:leading-15 tracking-normal w-[345px] md:w-full">
            {title}
          </h2>
          <p className="font-medium text-xs md:text-sm leading-5 text-grey-500">
            {comparisonDate}
          </p>
        </div>
      )}

      <div className="w-full md:w-auto relative overflow-x-auto md:overflow-x-visible mx-auto">
        <ComparisonTable
          className="w-186.25 md:w-267 mx-22.5 md:mx-0"
          gridTemplateColumns={`repeat(${isMobile ? columns.length : columns.length - 1}, 1fr) ${isMobile ? "" : "330px"}`}
          //bestRowClassName="-top-1 -left-17.5 md:-left-20.75 w-[885px] md:w-332.5 pl-16.25 pr-17.5 md:pl-20 md:pr-25"

          bestRowClassName="-top-1 -left-17.5 md:-left-20.75 w-[885px] md:w-312.5 px-18 md:pl-20 md:pr-25"
          columns={columns}
          rows={rows}
        />
      </div>
      

      {/* CTA Button */}
      {ctaButton && <Button
        asChild
        className="h-12 rounded-lg bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90 p-3.5 gap-1"
      >
        <Link href={ctaButton.href || "/"}>
          <span className="font-semibold text-sm leading-4.5 whitespace-nowrap">
            {ctaButton.label}
          </span>
          <ArrowUpRight strokeWidth={2} className="w-5 h-5 text-yellow-900" />
        </Link>
      </Button>}
    </section>
  );
}
