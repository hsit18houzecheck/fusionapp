export type SurveyTypesExplainedContent = {
  eyebrow?: string;
  title?: string;
  subheading?: string;
  surveyTypes: {
    disclaimer: string;
    explaination: string;
    question: string;
  }[];
};

export type SurveyTypesCarouselProps = {
  surveyTypes: SurveyTypesExplainedContent["surveyTypes"];
};
