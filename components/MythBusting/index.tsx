"use client";

import { Button } from "../Button";
import AnimateOnView from "../ui/animate-on-view";
import MythCard from "./MythCard";
import MythCarousel from "./MythCarousel";
import type { MythBustingProps } from "./types";
import { cn, handleCTAClick } from "@/lib/utils";
import { ANIMATION_DELAYS } from "./constants";
import { SectionWrapper } from "../SectionWrapper";
import SectionHeader from "../SectionWrapper/Header";

export default function MythBusting({
  eyebrow,
  title,
  subtitle,
  myths,
  ctaButton,
}: MythBustingProps) {
  return (
    <SectionWrapper>
      <div className="block md:flex flex-row bg-yellow-900 justify-between rounded-2xl py-12 md:py-0 px-6 md:px-20">
        <SectionHeader
          headingClassName="md:w-[35%] flex flex-col justify-center"
          eyebrow={eyebrow}
          title={{ text: title, className: "text-yellow-100" }}
          subtitle={{ text: subtitle, className: "text-white-100" }}
          contentCenter={false}
        />

        {/* Desktop Grid */}
        <div className="hidden md:flex md:flex-wrap gap-9 ml-auto w-[65%]">
          {myths.map((myth, index) => (
            <AnimateOnView
              key={index}
              delay={ANIMATION_DELAYS.CARD_BASE * (index + 1)}
              direction="up"
              className={cn({ "ml-auto": index % 2 === 0 })}
            >
              <MythCard myth={myth} index={index} />
            </AnimateOnView>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden w-full">
          <MythCarousel myths={myths} />
        </div>
      </div>

      {/* CTA Button */}
      <AnimateOnView delay={ANIMATION_DELAYS.CTA}>
        <div className="flex justify-center">
          <Button
            style={{
              backgroundColor: ctaButton.backgroundColor,
              color: ctaButton.textColor,
            }}
            rightIcon={ctaButton.icon}
            iconClassName="size-5"
            onClick={(e) => handleCTAClick(e, ctaButton)}
          >
            {ctaButton.onClick ? ctaButton.label : ctaButton.label}
          </Button>
        </div>
      </AnimateOnView>
    </SectionWrapper>
  );
}
