"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SurveyComparisonContent } from "./types";
import { ArrowUpRight } from "lucide-react";
import { ComparisonTable } from "../ComparisonTable";
import Image from "next/image";
import { SectionWrapper } from "../SectionWrapper";

export default function SurveyComparisonClient({
  eyebrow,
  title,
  comparisonDate,
  table: { columns, rows },
  ctaButton,
}: SurveyComparisonContent) {
  return (
    <SectionWrapper
      className="py-12 md:py-20"
      containerClassName="items-center !px-0"
      eyebrow={eyebrow}
      title={title}
      subtitle={
        comparisonDate
          ? {
              text: comparisonDate,
              className: "text-xs md:text-sm leading-5",
            }
          : undefined
      }
    >
      <div className="w-full md:w-auto relative overflow-x-auto md:overflow-x-visible mx-auto">
        <ComparisonTable
          className="w-186.25 md:w-287 mx-22.5 md:mx-10"
          bestRowClassName="-top-1 -left-17.5 md:-left-20.75 w-[885px] md:w-332.5 pl-16.25 pr-17.5 md:pl-20 md:pr-25"
          columns={columns.map((c) => {
            if (c.value === "name") {
              return {
                ...c,
                renderCell: ({ value, row }) => {
                  if (row.isBest) {
                    return (
                      <div className="relative shrink-0 h-[1.875rem] md:h-[2.6875rem] w-[6.125rem] md:w-[10.1875rem]">
                        <Image
                          src={row["logo"] as string}
                          alt={(value as string) || "logo"}
                          fill
                          className="object-contain"
                        />
                      </div>
                    );
                  }
                  return value;
                },
              };
            }
            return c;
          })}
          rows={rows}
        />
      </div>

      {/* CTA Button */}
      {ctaButton && (
        <Button
          asChild
          className="h-12 rounded-lg bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90 p-3.5 gap-1"
        >
          <Link href={ctaButton.href || "/"}>
            <span className="font-semibold text-sm leading-4.5 whitespace-nowrap">
              {ctaButton.label}
            </span>
            <ArrowUpRight strokeWidth={2} className="w-5 h-5 text-yellow-900" />
          </Link>
        </Button>
      )}
    </SectionWrapper>
  );
}
