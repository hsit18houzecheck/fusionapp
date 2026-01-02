import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Banner component with customizable background (image or color), eyebrow, title, subtitle, CTA button, and extra text. All text elements support custom colors.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundImage: {
      description: "Background image URL (optional)",
      control: "text",
    },
    backgroundColor: {
      description:
        "Background color class when no image is provided (e.g., 'bg-yellow-900', 'bg-peach-500')",
      control: "text",
    },
    eyebrow: {
      description: "Eyebrow object with text and color (optional)",
      control: "object",
    },
    title: {
      description: "Title object with text, size ('md' | 'lg'), and color",
      control: "object",
    },
    subtitle: {
      description:
        "Subtitle object with text and color (optional, supports line breaks with \\n)",
      control: "object",
    },
    button: {
      description:
        "Button object with label, url, icon, backgroundColor, and textColor (optional)",
      control: "object",
    },
    extraText: {
      description: "Extra text object with text and color (optional)",
      control: "object",
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const MediumTitle: Story = {
  args: {
    ...DEFAULT_CONTENT,
    title: {
      text: "December Offer",
      size: "md",
      color: "text-white",
    },
  },
};

export const WithBackgroundColor: Story = {
  args: {
    ...DEFAULT_CONTENT,
    backgroundImage: undefined,
    backgroundColor: "bg-yellow-900",
  },
};

export const PeachBackground: Story = {
  args: {
    backgroundImage: undefined,
    backgroundColor: "bg-peach-500",
    eyebrow: {
      text: "NEW FEATURE",
      color: "text-yellow-900",
    },
    title: {
      text: "Introducing Fast Track Surveys",
      size: "lg",
      color: "text-yellow-900",
    },
    subtitle: {
      text: "Get your survey report in 24 hours or less.",
      color: "text-yellow-900",
    },
    button: {
      label: "Learn More",
      url: "/fast-track",
      backgroundColor: "bg-yellow-900",
      textColor: "text-yellow-500",
    },
    extraText: undefined,
  },
};

export const MinimalWithImage: Story = {
  args: {
    backgroundImage: "/assets/images/offer-section.webp",
    title: {
      text: "Limited Time Offer",
      size: "lg",
      color: "text-white",
    },
    button: {
      label: "Get Started",
      url: "/offers",
      backgroundColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
  },
};

export const NoButton: Story = {
  args: {
    ...DEFAULT_CONTENT,
    button: undefined,
  },
};

export const NoEyebrow: Story = {
  args: {
    ...DEFAULT_CONTENT,
    eyebrow: undefined,
  },
};

export const SuccessBackground: Story = {
  args: {
    backgroundImage: undefined,
    backgroundColor: "bg-success-500",
    eyebrow: {
      text: "SUCCESS",
      color: "text-white",
    },
    title: {
      text: "Your Survey is Booked!",
      size: "lg",
      color: "text-white",
    },
    subtitle: {
      text: "Check your email for confirmation details.",
      color: "text-white",
    },
    button: {
      label: "View Dashboard",
      url: "/dashboard",
      backgroundColor: "bg-white",
      textColor: "text-success-500",
    },
  },
};

export const CustomColors: Story = {
  args: {
    backgroundImage: undefined,
    backgroundColor: "bg-yellow-100",
    eyebrow: {
      text: "CUSTOM COLORS",
      color: "text-peach-500",
    },
    title: {
      text: "Fully Customizable Banner",
      size: "md",
      color: "text-yellow-900",
    },
    subtitle: {
      text: "Every element can have its own color from CMS.",
      color: "text-grey-500",
    },
    button: {
      label: "Explore Options",
      url: "/customize",
      backgroundColor: "bg-peach-500",
      textColor: "text-white",
    },
    extraText: {
      text: "*All colors are customizable via CMS",
      color: "text-grey-500",
    },
  },
};

export const LongContent: Story = {
  args: {
    ...DEFAULT_CONTENT,
    title: {
      text: "Special Holiday Promotion for All RICS Survey Types",
      size: "lg",
      color: "text-white",
    },
    subtitle: {
      text: "Don't let hidden issues haunt your home.\nBook your survey between December 27th – 30th and save 25%.\nOffer valid for Level 1, Level 2, Level 3, and Valuation surveys.",
      color: "text-white",
    },
    extraText: {
      text: "*Disclaimer: Offer valid for new bookings only. Cannot be combined with other promotions. Terms and conditions apply.",
      color: "text-white/80",
    },
  },
};

export const HexColors: Story = {
  args: {
    backgroundImage: undefined,
    backgroundColor: "#FFFBED",
    eyebrow: {
      text: "HEX COLOR SUPPORT",
      color: "#F39E8A",
    },
    title: {
      text: "Banner with Hex Colors",
      size: "md",
      color: "#1F1801",
    },
    subtitle: {
      text: "This banner demonstrates hex color support from the CMS API.",
      color: "#616061",
    },
    button: {
      label: "Get Started",
      url: "/start",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Ff7348e2a2c164e768e32dc252d610f48",
      backgroundColor: "#F7DE8C",
      textColor: "#1F1801",
    },
  },
};

export const DarkHexColors: Story = {
  args: {
    backgroundImage: undefined,
    backgroundColor: "#1F1801",
    eyebrow: {
      text: "DARK THEME",
      color: "#F39E8A",
    },
    title: {
      text: "Dark Background with Hex Colors",
      size: "md",
      color: "#FFFBED",
    },
    subtitle: {
      text: "Perfect for creating contrast and visual hierarchy.",
      color: "#FFFFFF",
    },
    button: {
      label: "Learn More",
      url: "/learn",
      backgroundColor: "#F7DE8C",
      textColor: "#1F1801",
    },
  },
};
