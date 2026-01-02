import type { Meta, StoryObj } from "@storybook/react";
import MythBusting from "./index";

const meta = {
  title: "Components/MythBusting",
  component: MythBusting,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MythBusting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "About partnerships",
    title: "Partnership Myth-busting!",
    subtitle: "True or false?",
    myths: [
      {
        myth: "There is a cap on referrals and commission...",
        answer:
          "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
        actionBtn: {
          label: "Tap to reveal the answer",
        },
      },
      {
        myth: "It takes 3 months to set up a partnership with Houzecheck...",
        answer:
          "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
        actionBtn: {
          label: "Tap to reveal the answer",
        },
      },
      {
        myth: "I can't integrate with the Houzecheck Platform...",
        answer:
          "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
        actionBtn: {
          label: "Tap to reveal the answer",
        },
      },
      {
        myth: "Partners need technical knowledge about surveys to make referrals...",
        answer:
          "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
        actionBtn: {
          label: "Tap to reveal the answer",
        },
      },
    ],
    ctaButton: {
      label: "Start earning now",
      backgroundColor: "#1F1801",
      textColor: "#F7DE8C",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fe762070673024cc184b6db8bf2db9954",
    },
  },
};
