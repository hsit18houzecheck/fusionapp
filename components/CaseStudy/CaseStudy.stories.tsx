import type { Meta, StoryObj } from "@storybook/react";
import CaseStudy from "./index";
import { DEFAULT_CASE_STUDY_CONTENT, DEFAULT_CASE_STUDIES } from "./constants";

const meta = {
  title: "Components/CaseStudy",
  component: CaseStudy,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Case Study Carousel component that displays property survey case studies in an interactive carousel format with auto-slide functionality, manual navigation, and pagination dots.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Content object with eyebrow, title, and subtitle",
      control: "object",
    },
    caseStudies: {
      description: "Array of case study objects to display in the carousel",
      control: "object",
    },
  },
} satisfies Meta<typeof CaseStudy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: DEFAULT_CASE_STUDY_CONTENT,
    caseStudies: DEFAULT_CASE_STUDIES,
  },
};

export const SingleCaseStudy: Story = {
  args: {
    content: DEFAULT_CASE_STUDY_CONTENT,
    caseStudies: [DEFAULT_CASE_STUDIES[0]],
  },
};

export const TwoCaseStudies: Story = {
  args: {
    content: DEFAULT_CASE_STUDY_CONTENT,
    caseStudies: DEFAULT_CASE_STUDIES.slice(0, 2),
  },
};

export const CustomContent: Story = {
  args: {
    content: {
      eyebrow: "SUCCESS STORIES",
      title: "Real Client Experiences",
      subtitle:
        "Discover how our professional surveys have helped homebuyers make informed decisions and save thousands.",
    },
    caseStudies: DEFAULT_CASE_STUDIES,
  },
};

export const ShortContent: Story = {
  args: {
    content: {
      eyebrow: "CASE STUDIES",
      title: "Survey Success Stories",
      subtitle: "See how surveys save money.",
    },
    caseStudies: DEFAULT_CASE_STUDIES,
  },
};
