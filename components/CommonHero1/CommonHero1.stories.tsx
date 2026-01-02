import type { Meta, StoryObj } from "@storybook/react";
import CommonHero1 from "./";

const meta = {
  title: "Components/CommonHero1",
  component: CommonHero1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero section for the surveyor page featuring eyebrow text, title, subtitle, CTA button, RICS logo, and dashboard image with smooth animations.",
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
    ricsLogo: {
      description: "RICS logo image URL",
      control: "text",
    },
    button: {
      description: "CTA button configuration with label, URL, colors, and icon",
      control: "object",
    },
  },
} satisfies Meta<typeof CommonHero1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "SURVEYORS",
    title:
      "We're hiring at the UK's fastest-growing network of RICS Surveyors.",
    subtitle:
      "We handle the admin so you can focus on the job you and the freedom it brings.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Apply today",
      url: "/",
      variant: "default",
      rightIcon: "MdArrowOutward",
    },
  },
};

export const ShortTitle: Story = {
  args: {
    eyebrow: "JOIN US",
    title: "Become a RICS Surveyor",
    subtitle: "Join the fastest-growing network in the UK.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Get Started",
      url: "/apply",
      variant: "default",
      rightIcon: "MdArrowOutward",
    },
  },
};

export const LongContent: Story = {
  args: {
    eyebrow: "CAREER OPPORTUNITIES",
    title:
      "We're hiring experienced RICS Surveyors to join our rapidly expanding network across the United Kingdom.",
    subtitle:
      "We handle all the administrative work, client bookings, and payment processing so you can focus on what you do best - conducting professional surveys and enjoying the freedom of flexible working.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Apply today",
      url: "/",
      variant: "default",
      rightIcon: "MdArrowOutward",
    },
  },
};

export const DifferentButtonColors: Story = {
  args: {
    eyebrow: "SURVEYORS",
    title:
      "We're hiring at the UK's fastest-growing network of RICS Surveyors.",
    subtitle:
      "We handle the admin so you can focus on the job you and the freedom it brings.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Join Now",
      url: "/",
    },
  },
};

export const WithIconURL: Story = {
  args: {
    eyebrow: "SURVEYORS",
    title:
      "We're hiring at the UK's fastest-growing network of RICS Surveyors.",
    subtitle:
      "We handle the admin so you can focus on the job you and the freedom it brings.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Apply today",
      url: "/",
      variant: "default",
      rightIcon:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F8b1db52388f64933ad1233076abdc3d9",
    },
  },
};

export const MinimalContent: Story = {
  args: {
    eyebrow: "HIRING",
    title: "Join Our Network",
    subtitle: "Focus on surveying, we handle the rest.",
    image: "/assets/images/surveyorpghero.webp",
    ricsLogo:
      "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F20af524d2692486a9188a79a8f87dfdf",
    button: {
      label: "Apply",
      url: "/",
      variant: "default",
      rightIcon: "MdArrowOutward",
    },
  },
};
