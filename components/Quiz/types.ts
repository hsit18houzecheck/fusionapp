import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";
import { QUIZ_TYPE } from "./constants";

export type QuizType = (typeof QUIZ_TYPE)[keyof typeof QUIZ_TYPE];

export type Option = { label: string; value: string; explanation?: string };

export type Question = {
  question: string;
  options: Option[];
  answer: string;
};

export type Summary = {
  summaryText: string;
  matchingAnswers: {
    answer: string;
  }[];
};

export type Tip = {
  title: string;
  description: string;
};

export type TipSlide = {
  icon: string;
  primaryBtn: Button;
  secondaryBtn: Button;
  tips: Tip[];
};

export type Button = {
  label: string;
  url?: string;
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
} & VariantProps<typeof buttonVariants>;

export type QuizContent = {
  children?: React.ReactNode;
  backgroundColor?: string;
  eyebrow?: string;
  title?:
    | string
    | {
        text: string;
        color: string;
      };
  yesBtn?: Button;
  noBtn?: Button;
  doneSlide: {
    title: string;
    subheading: string;
    primaryBtn: Button;
    secondaryBtn: Button;
    summaries?: Summary[];
  };
  quiz: {
    eyebrow: string;
    noEyebrow?: string;
    title: string;
    noTitle?: string;
    subheading: string;
    noSubheading?: string;
    previousBtn: Button;
    nextBtn: Button;
    questions: Question[];
    isMultiSelectOption?: boolean;
  };
  tipsSlide?: TipSlide;
};

export type TipsCarouselProps = {
  icon: TipSlide["icon"];
  tips: TipSlide["tips"];
};

export type PaginationDotsProps = {
  length: number;
  currentQuestionIndex: number;
  isComplete: boolean;
};
