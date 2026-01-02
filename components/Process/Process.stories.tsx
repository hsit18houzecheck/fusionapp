import type { Meta, StoryObj } from "@storybook/react";
import ProcessClient from "./Client";
import { DEFAULT_PROCESS_CONTENT } from "./constants";

const meta: Meta<typeof ProcessClient> = {
  title: "Components/Process",
  component: ProcessClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Process component displaying the 3-step Houzecheck process with arrow-shaped cards.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Small eyebrow text above the heading",
      control: "text",
    },
    heading: {
      description: "Main heading for the process section",
      control: "text",
    },
    subheading: {
      description: "Subheading describing the process",
      control: "text",
    },
    steps: {
      description: "Array of process steps with title and description",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProcessClient>;

export const Default: Story = {
  args: DEFAULT_PROCESS_CONTENT,
};

export const CustomSteps: Story = {
  args: {
    eyebrow: "HOW IT WORKS",
    heading: "Simple & Fast",
    subheading: "Get started in minutes.",
    steps: [
      {
        title: "Step 1: Sign Up",
        description: "Create your account in seconds with just your email.",
      },
      {
        title: "Step 2: Choose Your Plan",
        description: "Select the perfect plan for your needs.",
      },
      {
        title: "Step 3: Start Building",
        description: "Begin your journey with our powerful tools.",
      },
    ],
  },
};

export const TwoSteps: Story = {
  args: {
    ...DEFAULT_PROCESS_CONTENT,
    steps: [
      {
        title: "Discovery",
        description: "We learn about your needs and goals.",
      },
      {
        title: "Delivery",
        description: "You receive your custom solution.",
      },
    ],
  },
};

