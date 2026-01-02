import type { Meta, StoryObj } from "@storybook/react";
import AboutUsHero from "./index";
import { DEFAULT_ABOUTUS_PAGE_DATA } from "@/app/(new)/about-us/constants";

const meta = {
  title: "Components/AboutUsHero",
  component: AboutUsHero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero section for the about us page featuring eyebrow text, title, subtitle, logos, and dashboard image with smooth animations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Small uppercase text above the title",
      control: "text",
    },
    title: {
      description: "Main heading text",
      control: "text",
    },
    subtitle: {
      description: "Descriptive text below the title",
      control: "text",
    },
    image: {
      description: "Dashboard/hero image URL",
      control: "text",
    },
    logoList: {
      description: "Array of logo objects with name and url",
      control: "object",
    },
  },
} satisfies Meta<typeof AboutUsHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_ABOUTUS_PAGE_DATA.aboutusPageData.hero,
};

export const ShortTitle: Story = {
  args: {
    eyebrow: "ABOUT US",
    title: "Property surveys, made simple.",
    subtitle: "Building the UK's most advanced property survey platform.",
    image: "/assets/images/surveyorpghero.webp",
    logoList: [
      { name: "trust pilot", url: "/assets/images/trust-pilot-logo.png" },
      { name: "riscs logo", url: "/assets/images/rics-logo.webp" },
    ],
  },
};

export const LongContent: Story = {
  args: {
    eyebrow: "ABOUT houzecheck",
    title: "Property surveys, made simple.",
    subtitle:
      "Since 2018, we've been building the UK's most advanced property survey platform - delivering speed, accuracy and confidence at every step. Our innovative technology connects property buyers with qualified RICS surveyors, ensuring professional surveys are completed quickly and efficiently.",
    image: "/assets/images/surveyorpghero.webp",
    logoList: [
      { name: "trust pilot", url: "/assets/images/trust-pilot-logo.png" },
      { name: "riscs logo", url: "/assets/images/rics-logo.webp" },
    ],
  },
};

export const SingleLogo: Story = {
  args: {
    eyebrow: "ABOUT houzecheck",
    title: "Property surveys, made simple.",
    subtitle:
      "Since 2018, we've been building the UK's most advanced property survey platform - delivering speed, accuracy and confidence at every step.",
    image: "/assets/images/surveyorpghero.webp",
    logoList: [{ name: "riscs logo", url: "/assets/images/rics-logo.webp" }],
  },
};

export const MultipleLogos: Story = {
  args: {
    eyebrow: "ABOUT houzecheck",
    title: "Property surveys, made simple.",
    subtitle:
      "Since 2018, we've been building the UK's most advanced property survey platform - delivering speed, accuracy and confidence at every step.",
    image: "/assets/images/surveyorpghero.webp",
    logoList: [
      { name: "trust pilot", url: "/assets/images/trust-pilot-logo.png" },
      { name: "riscs logo", url: "/assets/images/rics-logo.webp" },
      { name: "esurv logo", url: "/assets/images/esurv-logo.webp" },
    ],
  },
};

export const MinimalContent: Story = {
  args: {
    eyebrow: "ABOUT",
    title: "Property surveys, made simple.",
    subtitle: "Building the UK's most advanced property survey platform.",
    image: "/assets/images/surveyorpghero.webp",
    logoList: [],
  },
};
