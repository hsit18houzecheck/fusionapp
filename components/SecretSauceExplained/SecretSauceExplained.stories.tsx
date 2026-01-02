import type { Meta, StoryObj } from "@storybook/react";
import SecretSauceExplainedClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/SecretSauceExplained",
  component: SecretSauceExplainedClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Secret Sauce Explained section showcasing key features in a responsive grid layout.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    features: {
      description: "Array of feature items to display",
      control: "object",
      table: {
        type: {
          summary: "FeatureItem[]",
          detail: `Array<{
            title: string,
            description: string
          }>`,
        },
      },
    },
  },
} satisfies Meta<typeof SecretSauceExplainedClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const ThreeFeatures: Story = {
  args: {
    features: DEFAULT_CONTENT.features.slice(0, 3),
  },
};

export const TwoFeatures: Story = {
  args: {
    features: DEFAULT_CONTENT.features.slice(0, 2),
  },
};

export const SingleFeature: Story = {
  args: {
    features: [DEFAULT_CONTENT.features[0]],
  },
};

export const CustomContent: Story = {
  args: {
    features: [
      {
        title: "Fast Performance",
        description: "Lightning-fast load times and smooth user experience across all devices.",
      },
      {
        title: "Secure & Reliable",
        description: "Enterprise-grade security with 99.9% uptime guarantee.",
      },
      {
        title: "Easy Integration",
        description: "Simple API integration with comprehensive documentation.",
      },
      {
        title: "24/7 Monitoring",
        description: "Round-the-clock system monitoring and automated alerts.",
      },
    ],
  },
};

