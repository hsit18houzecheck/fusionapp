import type { Meta, StoryObj } from "@storybook/react";
import NewsAndUpdate from "./index";

const meta = {
  title: "Components/NewsAndUpdate",
  component: NewsAndUpdate,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "News and Updates section displaying a grid of news cards with images, titles, descriptions, and CTA buttons. Features smooth animations and responsive layout.",
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
      description: "Main section heading",
      control: "text",
    },
    subtitle: {
      description: "Descriptive text below the title",
      control: "text",
    },
    news: {
      description: "Array of news items to display in the grid",
      control: "object",
    },
  },
} satisfies Meta<typeof NewsAndUpdate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "The Latest",
    title: "News & Updates",
    subtitle: "Check out the latest news and events from Houzecheck HQ.",
    news: [
      {
        eyebrow: "New Surveyor",
        title: "Welcome Damien George (AssocRICS)",
        subtitle:
          "We're thrilled to officially welcome Damien George (AssocRICS) to the Houzecheck network!",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
      {
        eyebrow: "INSIGHTS",
        title: "Our Secret Sauce",
        subtitle: "(...not so secret anymore)",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
    ],
  },
};

export const SingleNews: Story = {
  args: {
    eyebrow: "Latest Update",
    title: "What's New",
    subtitle: "Stay informed with our latest announcement.",
    news: [
      {
        eyebrow: "ANNOUNCEMENT",
        title: "New Feature Launch",
        subtitle:
          "We're excited to announce our latest feature that will revolutionize your workflow!",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "Learn more",
          url: "/features",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
    ],
  },
};

export const ThreeNews: Story = {
  args: {
    eyebrow: "The Latest",
    title: "News & Updates",
    subtitle: "Check out the latest news and events from Houzecheck HQ.",
    news: [
      {
        eyebrow: "New Surveyor",
        title: "Welcome Damien George (AssocRICS)",
        subtitle:
          "We're thrilled to officially welcome Damien George (AssocRICS) to the Houzecheck network!",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
      {
        eyebrow: "INSIGHTS",
        title: "Our Secret Sauce",
        subtitle: "(...not so secret anymore)",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
      {
        eyebrow: "COMPANY NEWS",
        title: "Expanding Our Network",
        subtitle:
          "We're growing our team across the UK with new opportunities.",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "View openings",
          url: "/careers",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
    ],
  },
};

export const DifferentButtonColors: Story = {
  args: {
    eyebrow: "The Latest",
    title: "News & Updates",
    subtitle: "Check out the latest news and events from Houzecheck HQ.",
    news: [
      {
        eyebrow: "New Surveyor",
        title: "Welcome Damien George (AssocRICS)",
        subtitle:
          "We're thrilled to officially welcome Damien George (AssocRICS) to the Houzecheck network!",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
      {
        eyebrow: "INSIGHTS",
        title: "Our Secret Sauce",
        subtitle: "(...not so secret anymore)",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
        button: {
          label: "Read more",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
    ],
  },
};

export const ShortContent: Story = {
  args: {
    eyebrow: "Updates",
    title: "Latest News",
    subtitle: "Stay informed.",
    news: [
      {
        eyebrow: "NEW",
        title: "Quick Update",
        subtitle: "Short news item.",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
        button: {
          label: "Read",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
      {
        eyebrow: "INFO",
        title: "Another Update",
        subtitle: "More news.",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
        button: {
          label: "View",
          url: "/",
          variant: "default",
          rightIcon: "MdArrowForward",
        },
      },
    ],
  },
};
