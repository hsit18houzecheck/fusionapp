"use client";

import { useState } from "react";
import Image from "next/image";
import type { CaseStudyCardProps } from "./types";
import ExpandableSection from "./ExpandableSection";

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [expandedSections, setExpandedSections] = useState({
    scenario: false,
    result: false,
    keyTakeaway: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <article className="bg-yellow-100 rounded-lg p-6 md:p-8 h-full flex flex-col">
      {/* Title */}
      <h3 className="text-3xl md:text-[2.5rem] font-freight font-medium text-yellow-900 mb-9 md:mb-10 text-center lining-nums proportional-nums">
        {caseStudy.title}
      </h3>

      {/* Property Details Grid - 4 columns desktop, 2 mobile */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 space-y-4">
        {caseStudy.row1.map((field, index) => (
          <div key={index} className="flex flex-col gap-4 md:gap-2 bg-white p-4 md:p-6 rounded-xl h-40 mb-0">
            <Image
              src={field.icon}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
              aria-hidden="true"
            />
            <p className="text-xs md:text-sm font-semibold text-peach-900">
              {field.title}
            </p>
            <dd className="text-sm md:text-base text-grey-500">
              {field.subtitle}
            </dd>
          </div>
        ))}
      </dl>

      {/* Scenario Section */}
      <div className="mb-4">
        <ExpandableSection
          icon={caseStudy.row2.icon}
          title={caseStudy.row2.title}
          subtitle={caseStudy.row2.subtitle}
          isExpanded={expandedSections.scenario}
          onToggle={() => toggleSection("scenario")}
        />
      </div>

      {/* Result Section */}
      <div className="mb-4">
        <ExpandableSection
          icon={caseStudy.row3.icon}
          title={caseStudy.row3.title}
          subtitle={caseStudy.row3.subtitle}
          isExpanded={expandedSections.result}
          onToggle={() => toggleSection("result")}
        />
      </div>

      {/* Key Takeaway Section */}
      <div className="mt-auto">
        <ExpandableSection
          icon={caseStudy.row4.icon}
          title={caseStudy.row4.title}
          subtitle={caseStudy.row4.subtitle}
          isExpanded={expandedSections.keyTakeaway}
          onToggle={() => toggleSection("keyTakeaway")}
          variant="highlight"
          sectionLabel="Key takeaway"
        />
      </div>
    </article>
  );
}
