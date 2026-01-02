import { QuizContent, QuizType } from "./types";

export const QUIZ_TYPE = {
  LEVEL_2: "level_2",
} as const;

export const DEFAULT_CONTENT: Record<QuizType, QuizContent> = {
  [QUIZ_TYPE.LEVEL_2]: {
    eyebrow: "QUICK QUESTION",
    title: "Do you know what a RICS level 2 survey is?",
    yesBtn: {
      label: "Yes",
    },
    noBtn: {
      label: "No",
    },
    doneSlide: {
      title: "You’re all done!",
      subheading:
        "Now you’re in the know, you can make a more informed decision.",
      primaryBtn: {
        label: "Book a Survey",
        url: "/book",
        icon: "MdArrowOutward",
      },
      secondaryBtn: {
        label: "Learn more",
        url: "",
      },
    },
    quiz: {
      eyebrow: "QUICK QUIZ",
      noEyebrow: "LEARN WITH US",
      title: "Do you know what a RICS level 2 survey is?",
      noTitle: "Don’t know what a RICS Level 2 survey is?",
      subheading: "Excellent, let’s test you!",
      noSubheading: "No problem - we’ll guide you!",
      previousBtn: {
        label: "Previous",
        icon: "MdArrowBack",
      },
      nextBtn: {
        label: "Next",
        icon: "MdArrowForward",
      },
      questions: [
        {
          question: "A RICS Level 2 Survey is good for...",
          options: [
            { label: "First time buyers", value: "first_time_buyers" },
            { label: "New builds", value: "new_builds" },
            { label: "Second-hand homes", value: "second_hand_homes" },
            { label: "Second-time buyers", value: "second_time_buyers" },
          ],
          answer: "first_time_buyers",
        },
        {
          question: "A RICS Level 2 Survey is not good for...",
          options: [
            { label: "First time buyers", value: "first_time_buyers" },
            { label: "New builds", value: "new_builds" },
            { label: "Second-hand homes", value: "second_hand_homes" },
            { label: "Second-time buyers", value: "second_time_buyers" },
          ],
          answer: "first_time_buyers",
        },
      ],
    },
    tipsSlide: {
      icon: "/assets/images/hc-mini-logo.svg",
      primaryBtn: {
        label: "Book a Survey",
        url: "/book",
        icon: "MdArrowOutward",
      },
      secondaryBtn: {
        label: "Learn more",
        url: "",
      },
      tips: [
        {
          title: "Houzecheck Tip 1",
          description:
            "It’s not Level 3 survey which focuses on structure issues. A Level 2 focuses on visible issues - like damp, cracks, or roof problems. It won’t involve digging holes or opening walls.",
        },
        {
          title: "Houzecheck Tip 2",
          description:
            "It highlights risks you might miss From Japanese Knotweed to signs of subsidence, surveyors spot problems most buyers can’t see.",
        },
        {
          title: "Houzecheck Tip 3",
          description:
            "It’s written in plain English. Forget jargon-heavy reports – Houzecheck RICS Level 2 surveys are designed to be clear, with easy red/amber/green condition ratings.",
        },
        {
          title: "Houzecheck Tip 2",
          description:
            "It highlights risks you might miss From Japanese Knotweed to signs of subsidence, surveyors spot problems most buyers can’t see.",
        },
        {
          title: "Houzecheck Tip 3",
          description:
            "It’s written in plain English. Forget jargon-heavy reports – Houzecheck RICS Level 2 surveys are designed to be clear, with easy red/amber/green condition ratings.",
        },
      ],
    },
  },
};

export { DEFAULT_CONTENT as QUIZ_DEFAULT_CONTENT };
