import type { Meta, StoryObj } from "@storybook/react";
import HeroClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/Hero",
  component: HeroClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero component with building images, notification badge, CTA button, and RICS logo.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Main title for the hero section",
      control: "text",
    },
    subtitle: {
      description: "Subtitle for the hero section",
      control: "text",
    },
    button: {
      description: "CTA button configuration with label and url",
      control: "object",
    },
    ricsLogo: {
      description: "URL for the RICS logo image",
      control: "text",
    },
  },
} satisfies Meta<typeof HeroClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const CustomButton: Story = {
  args: {
    ...DEFAULT_CONTENT,
    button: {
      label: "Get Started Now",
      url: "/get-started",
    },
  },
};
