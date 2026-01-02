import type { Meta, StoryObj } from "@storybook/react";
import NavBarClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/Navbar",
  component: NavBarClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Main navigation component with responsive design, dropdown menus, and mobile support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    links: {
      description:
        "Array of navigation links with optional children (dropdown items)",
      control: "object",
    },
    logo: {
      description: "Logo object with URL for desktop view",
      control: "object",
    },
    logoMobile: {
      description: "Logo object with URL for mobile view",
      control: "object",
    },
    partnerLink: {
      description: "Partner link configuration with path and label",
      control: "object",
    },
    contactNumber: {
      description: "Phone number to display in the contact button",
      control: "text",
    },
  },
} satisfies Meta<typeof NavBarClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};
