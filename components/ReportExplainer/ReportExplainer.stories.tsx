import type { Meta, StoryObj } from "@storybook/react";
import ReportExplainerClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta: Meta<typeof ReportExplainerClient> = {
  title: "Components/ReportExplainer",
  component: ReportExplainerClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Report Explainer component showcasing what's covered in a RICS Level 2 Report with interactive tabs and detailed explanations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Small heading label above the title",
      control: "text",
    },
    title: {
      description: "Main title for the Report Explainer section",
      control: "text",
    },
    description: {
      description: "Introductory paragraph explaining the importance of the report",
      control: "text",
    },
    tabs: {
      description: "Array of report tabs with icons, images, and descriptions",
      control: "object",
      table: {
        type: {
          summary: "ReportTab[]",
          detail: `Array<{
            label: string,
            iconUrl?: string,
            image: string,
            title: string,
            description: string
          }>`,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReportExplainerClient>;

export const Default: Story = {
  args: {
    ...DEFAULT_CONTENT,
  },
};

export const WithoutEyebrow: Story = {
  args: {
    ...DEFAULT_CONTENT,
    eyebrow: undefined,
  },
};

export const CustomContent: Story = {
  args: {
    eyebrow: "LEARN MORE",
    title: "Understanding Your Property Survey",
    description:
      "Our comprehensive surveys provide detailed insights into your property's condition, helping you make informed decisions about your investment.",
    tabs: [
      {
        label: "Property Overview",
        iconUrl: "/assets/images/asterisk.svg",
        image: "/assets/images/report-info-container.png",
        title: "Why this matters:",
        description:
          "Get a complete picture of your property's condition and any potential issues that may require attention.",
      },
      {
        label: "Structural Assessment",
        iconUrl: "/assets/images/asterisk.svg",
        image: "/assets/images/report-info-container.png",
        title: "Why this matters:",
        description:
          "Identify any structural concerns that could impact the safety and value of your property.",
      },
    ],
  },
};

export const SingleTab: Story = {
  args: {
    ...DEFAULT_CONTENT,
    tabs: [DEFAULT_CONTENT.tabs[0]],
  },
};

export const FewTabs: Story = {
  args: {
    ...DEFAULT_CONTENT,
    tabs: DEFAULT_CONTENT.tabs.slice(0, 3),
  },
};

export const WithoutIcons: Story = {
  args: {
    ...DEFAULT_CONTENT,
    tabs: DEFAULT_CONTENT.tabs.map((tab) => ({
      ...tab,
      iconUrl: undefined,
    })),
  },
};

