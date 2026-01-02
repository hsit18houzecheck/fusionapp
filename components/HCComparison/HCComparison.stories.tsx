import type { Meta, StoryObj } from "@storybook/react";
import HCComparison from ".";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/HCComparison",
  component: HCComparison,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comparison table showcasing Houzecheck vs competitors with labeled columns, best row highlight, and a CTA.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Eyebrow text shown above the title",
      control: "text",
    },
    title: {
      description: "Main heading of the comparison section",
      control: "text",
    },
    subheading: {
      description: "Subheading text under the title",
      control: "text",
    },
    table: {
      description:
        "Table configuration including columns (icon, label, value) and rows (data fields, optional logo/name, and isBest flag)",
      control: "object",
    },
    ctaBtn: {
      description: "CTA button configuration with label, url, and right icon",
      control: "object",
    },
  },
} satisfies Meta<typeof HCComparison>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};
