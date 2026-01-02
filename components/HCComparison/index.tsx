"use client";

import { HCComparisonContent, RowType } from "./types";
import { Button } from "../Button";
import AnimateOnView from "../ui/animate-on-view";
import { ComparisonTable } from "../ComparisonTable";
import Image from "next/image";
import { handleCTAClick } from "@/lib/utils";
import { SectionWrapper } from "../SectionWrapper";

const HCComparison = ({
  eyebrow,
  title,
  subheading,
  table,
  ctaBtn,
}: HCComparisonContent) => {
  const { columns, rows } = table;

  return (
    <SectionWrapper
      className="py-12 md:py-20"
      containerClassName="!px-0"
      eyebrow={eyebrow}
      title={title}
      subtitle={subheading}
    >
      <div className="w-full relative overflow-x-auto md:overflow-x-visible mx-auto">
        <ComparisonTable<RowType>
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
          className="w-280 md:w-412 mx-22.5 md:mx-10"
          bestRowClassName="-top-1 -left-17.5 md:-left-5.5 w-[1258px] md:w-[1690px] px-17.5 md:pl-6 md:pr-6"
        />
      </div>

      <AnimateOnView
        delay={(rows.length + 1) * 0.15}
        className="flex flex-col items-center"
      >
        <Button
          rightIcon={ctaBtn.icon}
          iconClassName="size-6"
          onClick={(e) => handleCTAClick(e, ctaBtn)}
        >
          {ctaBtn.label}
        </Button>
      </AnimateOnView>
    </SectionWrapper>
  );
};

export default HCComparison;
