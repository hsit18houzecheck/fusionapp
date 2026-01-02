import type { Meta, StoryObj } from "@storybook/react";
import SurveyTypesExplainedClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/SurveyTypesExplained",
  component: SurveyTypesExplainedClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Section explaining survey types with a hero and a carousel of Q&A entries.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Small uppercase eyebrow label",
      control: "text",
    },
    title: {
      description: "Main title for the section",
      control: "text",
    },
    subheading: {
      description: "Subheading text below the title",
      control: "text",
    },
    surveyTypes: {
      description: "Array of survey type entries shown in the carousel",
      control: "object",
    },
  },
} satisfies Meta<typeof SurveyTypesExplainedClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const CustomContent: Story = {
  args: {
    ...DEFAULT_CONTENT,
    eyebrow: "TYPES OF SURVEYS",
    title: "Understanding RICS Surveys",
    subheading: "Get clarity on Levels 2 & 3 and valuations.",
    surveyTypes: [
      ...DEFAULT_CONTENT.surveyTypes,
      {
        disclaimer: "Information only",
        explaination: "Pre-purchase valuation for mortgage or cash buyers.",
        question: "What is a Mortgage Valuation?",
      },
    ],
  },
};