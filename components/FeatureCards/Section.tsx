import { SectionWrapper } from "../SectionWrapper";
import AnimateOnView from "../ui/animate-on-view";
import FeatureCard from "./FeatureCard";
import { FeatureCardsSectionContent } from "./types";

const FeatureCardsSection = ({
  sectionHeader: { eyebrow, title, subheading },
  features,
  classNames,
}: FeatureCardsSectionContent) => {
  const getWidthClass = (index: number, total: number) => {
    const remainder = total % 3;
    if (remainder === 2 && index >= total - 2) return "md:w-[47.5%]";
    if (remainder === 1 && index === total - 1) return "md:w-[100%]";
    return "md:w-[31%]";
  };

  return (
    <SectionWrapper
      className="py-12 md:py-20 bg-white-100 mx-auto md:max-w-[110rem] space-y-10"
      eyebrow={
        eyebrow ? { ...eyebrow, style: { color: eyebrow.color } } : undefined
      }
      title={title ? { ...title, style: { color: title.color } } : undefined}
      subtitle={
        subheading
          ? { ...subheading, style: { color: subheading.color } }
          : undefined
      }
      headingClassName="px-6 md:px-0 m-0"
    >
      <div className="md:flex flex-wrap space-x-10 space-y-10 w-full mx-auto">
        {features.map((perk, index) => (
          <AnimateOnView
            key={index}
            delay={(3 + index) * 0.1}
            className={`${getWidthClass(index, features.length)} mx-auto`}
          >
            <FeatureCard {...perk} classNames={classNames} />
          </AnimateOnView>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeatureCardsSection;
