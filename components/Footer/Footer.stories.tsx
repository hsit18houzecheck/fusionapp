import type { Meta, StoryObj } from "@storybook/react";
import FooterClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/Footer",
  component: FooterClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Footer component with links.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    brand: {
      description: "Footer brand information (logo and tagline)",
      control: "object"
    },
    copyright: {
      description: "Copyright text for the footer",
      control: "text"
    },
    contactUs: {
      description: "Contact us section with label and options",
      control: "object"
    },
    linkGroups: {
      description: "Array of link groups and subgroups",
      control: "object"
    },
    officeHours: {
      description: "Office hours information",
      control: "object"
    },
    policyAndTermsLinks: {
      description: "Array of policy and terms links",
      control: "object"
    },
    socials: {
      description: "Social media handles and icons",
      control: "object"
    },
  },
} satisfies Meta<typeof FooterClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};
