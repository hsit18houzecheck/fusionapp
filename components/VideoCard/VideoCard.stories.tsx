import type { Meta, StoryObj } from "@storybook/react";
import VideoCard from ".";

const meta = {
  title: "Components/VideoCard",
  component: VideoCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VideoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "Customer Story",
    title: "How Houzecheck Helps Homeowners",
    subtitle: "Quick, quality, and trusted inspections at the right price.",
    backgroundImage: "/assets/images/customer-video-card.webp",
    video: {
      title: "Watch Story",
      icon: "play",
      url: "https://example.com/video",
    },
  },
};

export const NoLink: Story = {
  args: {
    eyebrow: "Customer Story",
    title: "Empowering Decisions",
    subtitle: "Clear reports and smooth booking experience.",
    backgroundImage: "/assets/images/customer-video-card.webp",
    video: {
      title: "Play",
      icon: "play",
    },
  },
};
