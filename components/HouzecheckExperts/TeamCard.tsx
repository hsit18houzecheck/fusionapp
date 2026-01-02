"use client";

import type { TeamMember } from "./types";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div
      className="relative h-[203px] md:h-[452px] w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${member?.image})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-yellow-900 to-100%" />

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-end">
        <div className="flex flex-col gap-2 md:gap-2.5 px-4 py-8 md:px-8 md:py-12 text-left items-start">
          {/* Eyebrow */}
          {member.eyebrow && <p className="eyebrow-lg">{member.eyebrow}</p>}

          {/* Name */}
          <h3 className="font-freight text-lg md:text-[2rem] leading-4 md:leading-11 text-white font-medium">
            {member.name}
          </h3>

          {/* Title */}
          {member.title && (
            <p className="font-medium text-[0.625rem] leading-[0.625rem] md:text-sm text-white">
              {member.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
