import type { Meta, StoryObj } from "@storybook/react";
import OverlayCardsClient from "./Client";
import type { OverlayCardsContent } from "./types";

const meta = {
  title: "Components/OverlayCards",
  component: OverlayCardsClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Interactive overlay cards component that displays expandable content cards with images and text. Used for surveyor profiles and benefits.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    eyebrow: {
      description: "Eyebrow text with color",
      control: "object",
      table: {
        type: {
          summary: "{ text: string; color: string }",
        },
      },
    },
    title: {
      description: "Title text with color",
      control: "object",
      table: {
        type: {
          summary: "{ text: string; color: string }",
        },
      },
    },
    subtitle: {
      description: "Subtitle text with color",
      control: "object",
      table: {
        type: {
          summary: "{ text: string; color: string }",
        },
      },
    },
    backgroundColor: {
      description: "Background color for the section",
      control: "color",
    },
    cta: {
      description: "Call-to-action button",
      control: "object",
      table: {
        type: {
          summary: "{ label: string; href: string }",
        },
      },
    },
    cards: {
      description: "Array of overlay cards",
      control: "object",
      table: {
        type: {
          summary: "OverlayCard[]",
        },
      },
    },
  },
} satisfies Meta<typeof OverlayCardsClient>;

export default meta;

type Story = StoryObj<typeof meta>;

const surveyorProfilesData: OverlayCardsContent = {
  backgroundColor: "#FFFFFF",
  eyebrow: {
    text: "Surveyor profiles",
    color: "#F39E8A",
  },
  title: {
    text: "Hear From Our Surveyors",
    color: "#1F1801",
  },
  subtitle: {
    text: "Check out a selection of our customer reviews.",
    color: "#616061",
  },
  cards: [
    {
      eyebrow: "SURVEYOR PROFILE",
      title: "Abdi Ahmed",
      subtitle: "MSc AssocRICS, RICS Registered Valuer",
      textAlign: "left",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F65adbc21b1494dfb91acb47ade4841b3?format=webp",
      textList: [
        {
          title:
            '<p><span style="font-size: 16px;">My experience collaborating with Houzecheck as a consultant residential surveyor has been exceptionally positive. From the outset, their team has demonstrated remarkable professionalism and a genuine commitment to fostering a strong partnership.</span></p>',
        },
      ],
      button: {
        label: "Read Review",
        variant: "ghost",
      },
    },
    {
      eyebrow: "SURVEYOR PROFILE",
      title: "David Bluck",
      subtitle: "AssocRICS",
      textAlign: "left",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F1a7735a406804d41a7605bfdf947dc14?format=webp",
      textList: [
        {
          title:
            '<p><span style="font-size: 16px;">I joined Houzecheck in September and found the onboarding process really smooth and straight forward. The whole Houzecheck experience has given me a fresh energy with my work.</span></p>',
        },
      ],
      button: {
        label: "Read Review",
        variant: "ghost",
      },
    },
    {
      eyebrow: "SURVEYOR PROFILE",
      title: "Alaur Choudhury",
      subtitle:
        "AssocRICS MCIOB BDMA Ins Tech, Director / Chartered Construction Manager",
      textAlign: "left",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fd090e59cefbf46ea8a8f52da4a1c3ecb?format=webp",
      textList: [
        {
          title:
            '<p><span style="font-size: 16px;">Working with Houzecheck has been an incredibly rewarding experience for me and my business. Their flexibility and collaborative approach have made my day to day operations smoother.</span></p>',
        },
      ],
      button: {
        label: "Read Review",
        variant: "ghost",
      },
    },
  ],
};

const surveyorBenefitsData: OverlayCardsContent = {
  backgroundColor: "#1F1801",
  eyebrow: {
    text: "Jobs",
    color: "#F39E8A",
  },
  title: {
    text: "Benefits",
    color: "#FFFBED",
  },
  subtitle: {
    text: "Explore the benefits of working with us",
    color: "#FFFFFF",
  },
  cta: {
    label: "Sign up now",
    href: "/surveyor/signup",
  },
  cards: [
    {
      title: "Full-Time Employee",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fa9655189b5ba486cac3694d8948dcf7e",
      textAlign: "center",
      textList: [
        {
          title:
            "<p>Take control of your workload with jobs that fit your schedule</p>",
        },
        {
          title: "<p>No chasing clients or payments - we handle it all</p>",
        },
        {
          title:
            "<p>Keep your independence while plugging into our support network</p>",
        },
        {
          title:
            "<p>Boost your visibility without lifting a finger on marketing</p>",
        },
        {
          title: "<p>Be part of a trusted community of RICS professionals</p>",
        },
      ],
      button: {
        label: "Benefits",
        variant: "default",
      },
    },
    {
      title: "Self-Employed",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F3d17db0148a04528b3773cfb67cb246e",
      textAlign: "center",
      textList: [
        {
          title:
            "<p>Take control of your workload with jobs that fit your schedule</p>",
        },
        {
          title: "<p>No chasing clients or payments - we handle it all</p>",
        },
        {
          title:
            "<p>Keep your independence while plugging into our support network</p>",
        },
        {
          title:
            "<p>Boost your visibility without lifting a finger on marketing</p>",
        },
        {
          title: "<p>Be part of a trusted community of RICS professionals</p>",
        },
      ],
      button: {
        label: "Benefits",
        variant: "default",
      },
    },
    {
      title: "Part-Time Surveyor",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F656306c083f6409fbcae93c375c63f75",
      textAlign: "center",
      textList: [
        {
          title:
            "<p>Take control of your workload with jobs that fit your schedule</p>",
        },
        {
          title: "<p>No chasing clients or payments - we handle it all</p>",
        },
        {
          title:
            "<p>Keep your independence while plugging into our support network</p>",
        },
        {
          title:
            "<p>Boost your visibility without lifting a finger on marketing</p>",
        },
        {
          title: "<p>Be part of a trusted community of RICS professionals</p>",
        },
      ],
      button: {
        label: "Benefits",
        variant: "default",
      },
    },
  ],
};

export const SurveyorProfiles: Story = {
  args: surveyorProfilesData,
};

export const SurveyorBenefits: Story = {
  args: surveyorBenefitsData,
};

export const CenteredAlignment: Story = {
  args: {
    backgroundColor: "#F5F5F5",
    eyebrow: {
      text: "CENTERED CARDS",
      color: "#F39E8A",
    },
    title: {
      text: "Center Aligned Content",
      color: "#1F1801",
    },
    subtitle: {
      text: "Cards with centered text alignment",
      color: "#616061",
    },
    cards: [
      {
        title: "Centered Card",
        subtitle: "This is a subtitle",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fa9655189b5ba486cac3694d8948dcf7e",
        textAlign: "center",
        textList: [
          {
            title: "<p>First benefit point</p>",
          },
          {
            title: "<p>Second benefit point</p>",
          },
          {
            title: "<p>Third benefit point</p>",
          },
        ],
        button: {
          label: "Learn More",
          variant: "default",
        },
      },
    ],
  },
};

export const RightAlignment: Story = {
  args: {
    backgroundColor: "#1F1801",
    eyebrow: {
      text: "RIGHT ALIGNED",
      color: "#F39E8A",
    },
    title: {
      text: "Right Aligned Content",
      color: "#FFFBED",
    },
    subtitle: {
      text: "Cards with right-aligned text",
      color: "#FFFFFF",
    },
    cards: [
      {
        title: "Right Aligned Card",
        subtitle: "This is a subtitle",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F3d17db0148a04528b3773cfb67cb246e",
        textAlign: "right",
        textList: [
          {
            title: "<p>First benefit point</p>",
          },
          {
            title: "<p>Second benefit point</p>",
          },
        ],
        button: {
          label: "Learn More",
          variant: "ghost",
        },
      },
    ],
  },
};

export const WithCTA: Story = {
  args: {
    ...surveyorBenefitsData,
    cta: {
      label: "Get Started Today",
      href: "/signup",
    },
  },
};

export const MinimalContent: Story = {
  args: {
    backgroundColor: "#FFFFFF",
    cards: [
      {
        title: "Simple Card",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fa9655189b5ba486cac3694d8948dcf7e",
        textAlign: "center",
        textList: [
          {
            title: "<p>Single benefit point</p>",
          },
        ],
        button: {
          label: "View",
          variant: "default",
        },
      },
    ],
  },
};
