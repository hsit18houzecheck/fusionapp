import type { Meta, StoryObj } from "@storybook/react";
import MeetPeople from ".";
import { DEFAULT_MEET_PEOPLE_CONTENT } from "./constants";

const meta: Meta<typeof MeetPeople> = {
  title: "Components/MeetPeople",
  component: MeetPeople,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MeetPeople>;

export const Default: Story = {
  args: {
    ...DEFAULT_MEET_PEOPLE_CONTENT,
  },
};

export const CustomContent: Story = {
  args: {
    eyebrow: "LEADERSHIP",
    title: "Meet Our CEO",
    subTitle: "A personal message from our chief executive officer.",
    photo: "/assets/images/amit-profile.webp",
    paragraph:
      "<p>Hello,</p><p><br></p><p>Thank you for visiting our website. I'm excited to share our vision and mission with you.</p><p><br></p><p>Our company was founded on the principle of making property inspections accessible and reliable for everyone.</p><p><br></p><p>We're committed to excellence and innovation in everything we do.</p><p><br></p><p>Best wishes,</p>",
    signature: "/assets/images/signature.webp",
    name: "Amit Bansal",
  },
};

export const ShortMessage: Story = {
  args: {
    eyebrow: "OUR TEAM",
    title: "A Quick Note",
    subTitle: "From our founder.",
    photo: "/assets/images/amit-profile.webp",
    paragraph:
      "<p>Hi there,</p><p><br></p><p>Welcome to Housecheck! We're here to make your property journey easier and more transparent.</p><p><br></p><p>Thank you for trusting us with your home inspection needs.</p><p><br></p><p>Cheers,</p>",
    signature: "/assets/images/signature.webp",
    name: "Amit",
  },
};
