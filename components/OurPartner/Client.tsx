"use client";

import Image from "next/image";
import type { OurPartnerContent } from "./types";
import { Marquee } from "../ui/marquee";
import { SectionWrapper } from "../SectionWrapper";
import SectionHeader from "../SectionWrapper/Header";

type OurPartnerClientProps = OurPartnerContent;

export default function OurPartnerClient({
  eyebrow,
  title,
  subtitle,
  partners,
  backgroundColor,
}: OurPartnerClientProps) {
  // Use marquee if there are more than 4 partners
  const useMarquee = partners && partners.length > 4;

  return (
    <div
      className="py-12 md:py-20 space-y-8 md:space-y-10"
      style={{ backgroundColor }}
    >
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {/* Partners Display */}
      {useMarquee ? (
        <div className="w-full overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:40s] [--gap:2rem]"
            repeat={2}
          >
            {partners?.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-h-24 p-6 md:p-7 rounded-2xl shrink-0 w-[280px]"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    fill
                    className="object-contain object-center"
                    sizes="280px"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 md:gap-6 items-start justify-center w-full">
          {partners?.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center max-w-[21.9rem] min-h-24 p-6 md:p-7 rounded-2xl shrink-0 w-[280px]"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 330px, 350px"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
