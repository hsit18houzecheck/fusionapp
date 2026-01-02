import type { Meta, StoryObj } from "@storybook/react";
import OurPartnerClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/OurPartner",
  component: OurPartnerClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Our Partner section showcasing trusted industry partners with logos.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Small heading label above the title (eyebrow text)",
      control: "text",
    },
    title: {
      description: "Main title for the Partners section",
      control: "text",
    },
    subtitle: {
      description: "Subtitle text below the main title",
      control: "text",
    },
    backgroundColor: {
      description: "Background color for the section",
      control: "color",
    },
    partners: {
      description: "Array of partner logos to display",
      control: "object",
      table: {
        type: {
          summary: "PartnerLogo[]",
          detail: `Array<{
            image: string,
            alt: string
          }>`,
        },
      },
    },
  },
} satisfies Meta<typeof OurPartnerClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const CustomContent: Story = {
  args: {
    eyebrow: "WORKING WITH LEADING BRANDS",
    title: "Trusted Partners",
    subtitle: "We collaborate with industry leaders to deliver exceptional service",
    backgroundColor: "#fffbed",
    partners: DEFAULT_CONTENT.partners,
  },
};

export const FewerPartners: Story = {
  args: {
    ...DEFAULT_CONTENT,
    partners: DEFAULT_CONTENT.partners.slice(0, 2),
  },
};

export const SinglePartner: Story = {
  args: {
    ...DEFAULT_CONTENT,
    partners: [DEFAULT_CONTENT.partners[0]],
  },
};

export const ManyPartners: Story = {
  args: {
    ...DEFAULT_CONTENT,
    partners: [
      ...DEFAULT_CONTENT.partners,
      {
        image: "/assets/images/esurv-logo.webp",
        alt: "Additional Partner 1",
      },
      {
        image: "/assets/images/homemove-logo.webp",
        alt: "Additional Partner 2",
      },
    ],
  },
};

export const LongEyebrow: Story = {
  args: {
    ...DEFAULT_CONTENT,
    eyebrow: "TRUSTED BY INDUSTRY LEADERS AND PROFESSIONAL PARTNERS",
  },
};

export const LongTitle: Story = {
  args: {
    ...DEFAULT_CONTENT,
    title: "Our Valued Industry Partners and Collaborators",
  },
};

export const LongSubtitle: Story = {
  args: {
    ...DEFAULT_CONTENT,
    subtitle:
      "Industry partners trust Houzecheck to deliver exceptional property survey services across the UK",
  },
};


