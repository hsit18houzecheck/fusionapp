import { Button } from "@/common/types";

export type StepCard = {
  step: string;
  title: string;
  description: string;
  iconPath: string;
};

export type SuccessStoryCard = {
  companyName: string;
  description: string;
  iconPath: string;
};

export type StartReferringInstantlyContent = {
  heading: string;
  title: string;
  subtitle: string;
  ctaButton: {
    label: string;
    href: string;
  } & Button;
  steps: StepCard[];
  successStories: SuccessStoryCard[];
};
