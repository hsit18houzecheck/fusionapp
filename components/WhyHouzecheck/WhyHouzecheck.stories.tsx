import type { Meta, StoryObj } from "@storybook/react";

import { DEFAULT_CONTENT } from "./constants";
import WhyHouzecheckClient from "./Client";

const meta: Meta<typeof WhyHouzecheckClient> = {
  title: "Components/WhyHouzecheck",
  component: WhyHouzecheckClient,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WhyHouzecheckClient>;

export const Default: Story = {
  args: {
    ...DEFAULT_CONTENT,
  },
};

export const CustomContent: Story = {
  args: {
    eyebrow: "DISCOVER OUR DIFFERENCE",
    heading: "Why Choose Us?",
    features: [
      {
        icon: "speed",
        title: "Lightning Fast",
        subtitle: "Get your survey report in 24 hours",
      },
      {
        icon: "quality",
        title: "Premium Quality",
        subtitle: "All surveyors are RICS certified professionals",
      },
      {
        icon: "trusted",
        title: "Highly Rated",
        subtitle: "5-star reviews from satisfied customers",
      },
      {
        icon: "pricing",
        title: "Fair Pricing",
        subtitle: "Competitive rates with no surprises",
      },
    ],
    customerStoryEyebrow: "SUCCESS STORIES",
    customerStoryTitle: "Meet Sarah",
    customerStorySubtitle: "Property investor from London.",
    customerStoryVideo: {
      title: "Watch Story",
      url: "",
    },
    socialsEyebrow: "FOLLOW US",
    socialsTitle: "Join Our Community",
    socialsSubtitle: "Stay connected with us on social media.",
    socialsLink: {
      title: "Follow Now",
      url: "",
    },
    cardDetails: DEFAULT_CONTENT.cardDetails,
    quizdetails: [
      {
        eyebrows: "QUICK QUIZ",
        title: "Custom Quiz 1",
        subtitle: "This is a custom quiz card",
        variant: "yellow",
        button: {
          label: "Take Quiz",
          iconPosition: "right",
        },
      },
      {
        eyebrows: "QUICK QUIZ",
        title: "Custom Quiz 2",
        subtitle: "Another custom quiz card",
        variant: "dark",
        button: {
          label: "Start Quiz",
          iconPosition: "right",
        },
      },
    ],
  },
};
