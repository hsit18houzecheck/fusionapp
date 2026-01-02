import type { Meta, StoryObj } from "@storybook/react";
import SavingsEstimatorClient from "./Client";
import { DEFAULT_CONTENT, DEFAULT_TOP_DEFECTS_DATA } from "./constant";
import QueryProvider from "../QueryProvider";

const meta = {
  title: "Components/SavingsEstimator",
  component: SavingsEstimatorClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Savings Estimator with postcode input, loading state, and dynamic report/no-data views.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryProvider>
        <Story />
      </QueryProvider>
    ),
  ],
  argTypes: {
    eyebrow: {
      description: "Section eyebrow label",
      control: "text",
    },
    title: {
      description: "Main title for the estimator",
      control: "text",
    },
    subheading: {
      description: "Subheading describing the estimator",
      control: "text",
    },
    inputLabel: {
      description: "Label above the postcode input",
      control: "text",
    },
    searchBtn: {
      description: "Search button configuration (label and icon)",
      control: "object",
    },
    info: {
      description: "Info banner with icon and label",
      control: "object",
    },
    rightSection: {
      description:
        "Right-side content including placeholder images, loading, report and no-data states",
      control: "object",
    },
  },
} satisfies Meta<typeof SavingsEstimatorClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...DEFAULT_CONTENT, topDefectsData: DEFAULT_TOP_DEFECTS_DATA },
};
