import { QuizContent } from "../Quiz/types";
import { SurveyComparisonContent } from "../SurveyComparison/types";

// CMS types matching the actual JSON structure
export type FeatureItem = {
  icon: string;
  title: string;
  subtitle: string;
};

export type CustomerStoryVideo = {
  icon?: string;
  title: string;
  url?: string;
  backgroundImage?: string;
};

export type SocialsLink = {
  icon?: string;
  title: string;
  url?: string;
};

export type CardButton = {
  icon?: string;
  iconPosition?: "left" | "right";
  label: string;
  variant?: "yellow" | "light" | "dark" | "transparent";
  url?: string;
};

export type CardDetail = {
  eyebrows: string;
  title: string;
  subtitle: string;
  button?: CardButton;
};

export type QuizDetail = {
  eyebrows: string;
  title: string;
  subtitle: string;
  button?: CardButton;
  variant?: "yellow" | "light" | "dark" | "transparent";
  quiz?: QuizContent;
};

export type WhyHouzecheckContent = {
  eyebrow: string;
  heading: string;
  features: FeatureItem[];
  customerStoryEyebrow: string;
  customerStoryTitle: string;
  customerStorySubtitle: string;
  customerStoryVideo: CustomerStoryVideo;
  socialsEyebrow: string;
  socialsTitle: string;
  socialsSubtitle: string;
  socialsLink: SocialsLink;
  cardDetails: CardDetail[];
  quizdetails: QuizDetail[];
  surveyComparison: SurveyComparisonContent
};
