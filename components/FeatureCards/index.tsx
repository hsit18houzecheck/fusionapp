import { SectionWrapper } from "../SectionWrapper";
import AnimateOnView from "../ui/animate-on-view";
import FeatureCard from "./FeatureCard";
import type { FeatureCardsProps } from "./types";

export default function FeatureCards({
  eyebrow,
  title,
  subtitle,
  perks,
}: FeatureCardsProps) {
  return (
    <SectionWrapper
      className="bg-white py-12 md:py-20"
      eyebrow={eyebrow}
      title={title}
      subtitle={{ text: subtitle, className: "max-w-3xl mx-auto" }}
    >
      {/* Perks Grid */}
      <div className="md:flex flex-wrap space-x-10 space-y-10 w-full mx-auto">
        {perks.map((perk, index) => (
          <AnimateOnView
            key={index}
            delay={(3 + index) * 0.1}
            className="md:w-[48%] lg:w-[31%] mx-auto"
          >
            <FeatureCard {...perk} />
          </AnimateOnView>
        ))}
      </div>
    </SectionWrapper>
  );
}
