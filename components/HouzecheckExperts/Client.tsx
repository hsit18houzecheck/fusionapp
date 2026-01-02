"use client";

import type { HouzecheckExpertsContent } from "./types";
import TeamCard from "./TeamCard";
import { SectionWrapper } from "../SectionWrapper";

type Props = HouzecheckExpertsContent;

export default function HouzecheckExpertsClient({
  eyebrow,
  title,
  teamTypes,
}: Props) {
  return (
    <SectionWrapper
      // className="w-full bg-white-100 py-16 md:py-20 md:px-10 md:max-w-440 mx-auto flex flex-col gap-20 items-center"
      eyebrow={eyebrow}
      title={title}
    >
      {/* Team Types */}
      {teamTypes && teamTypes.length > 0 && (
        <div className="flex flex-col gap-20 w-full">
          {teamTypes.map((teamType, typeIndex) => (
            <div key={typeIndex} className="flex flex-col gap-10 w-full">
              {/* Team Name Title */}
              <h3 className="font-freight font-medium text-yellow-900 text-[1.5rem] md:text-[2.25rem] leading-7 md:leading-9 text-left">
                {teamType.teamName}
              </h3>

              {/* Team Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 w-full">
                {teamType.teamMembers.map((member, memberIndex) => (
                  <TeamCard key={memberIndex} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
