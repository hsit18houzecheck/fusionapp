import { Card } from "../Card";
import { SectionWrapper } from "../SectionWrapper";
import { JourneyToBeingIndependentContent } from "./types";

const JourneyToBeingIndependent = ({
  sectionHeader: { eyebrow, title, subheading },
  steps,
}: JourneyToBeingIndependentContent) => {
  return (
    <SectionWrapper
      className="py-12 md:py-20"
      eyebrow={
        eyebrow
          ? {
              text: eyebrow.text,
              style: { color: eyebrow.color },
            }
          : undefined
      }
      title={
        title
          ? {
              text: title.text,
              style: { color: title.color },
            }
          : undefined
      }
      subtitle={
        subheading
          ? {
              text: subheading.text,
              style: { color: subheading.color },
            }
          : undefined
      }
    >
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-10">
        {steps.map(({ step }, stepIndex) => (
          <Card
            key={stepIndex}
            eyebrow={step.eyebrow?.text}
            icon={
              step.icon
                ? {
                    url: step.icon.url,
                    backgroundColor: step.icon.backgroundColor,
                    size: step.icon.size,
                  }
                : undefined
            }
            title={step.title?.text || ""}
            subtitle={step.subheading?.text}
            variant="light"
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default JourneyToBeingIndependent;
