import dynamic from "next/dynamic";
import AnimateOnView from "../ui/animate-on-view";
import { SurveyTypesExplainedContent } from "./types";

const SurveyTypesCarousel = dynamic(() =>
  import("./SurveyTypesCarousel").then((mod) => mod.SurveyTypesCarousel)
);

const SurveyTypesExplainedClient = ({
  eyebrow,
  title,
  subheading,
  surveyTypes,
}: SurveyTypesExplainedContent) => {
  return (
    <section className="overflow-hidden relative">
      <div className="overflow-visible md:max-w-[110rem] pb-6 md:pb-10 px-6 md:px-10 mx-auto">
        <div className="overflow-visible w-full bg-foreground h-[46.125rem] md:h-[36.875rem] px-6 md:px-20 mx-auto rounded-3xl relative pt-12 md:pt-10">
          {(!!eyebrow || !!title || !!subheading) && (
            <div className="space-y-4 md:space-y-6 md:max-w-[31%] md:mt-32">
              {!!eyebrow && (
                <AnimateOnView>
                  <p className="eyebrow">{eyebrow}</p>
                </AnimateOnView>
              )}
              {!!title && (
                <AnimateOnView delay={1 * 0.15}>
                  <h2 className="font-medium text-[1.75rem] md:text-[2.5rem] leading-[1.75rem] md:leading-[2.5rem] font-freight text-white">
                    {title}
                  </h2>
                </AnimateOnView>
              )}
              {!!subheading && (
                <AnimateOnView delay={2 * 0.15}>
                  <h2 className="font-medium text-base md:text-lg text-white">
                    {subheading}
                  </h2>
                </AnimateOnView>
              )}
            </div>
          )}
        </div>
        <SurveyTypesCarousel surveyTypes={surveyTypes} />
      </div>
    </section>
  );
};

export default SurveyTypesExplainedClient;
