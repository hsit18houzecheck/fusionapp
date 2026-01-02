import type { Meta, StoryObj } from "@storybook/react";
import FeatureCards from "./index";

const meta = {
  title: "Components/FeatureCards",
  component: FeatureCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "Perks",
    title: "What are the Houzecheck Surveyor Perks?",
    subtitle:
      "We have a range of perks you can take advantage of when you join our network!",
    perks: [
      {
        title: {
          value: "Tech",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "Work smarter, not harder. Our platform handles bookings, payments, and updates seamlessly—so you can focus on surveying, not software",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F9698ff11560c4dc485e4cab3f5b92a9a",
        contentPosition: "top",
      },
      {
        title: {
          value: "Zero Admin",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "No chasing invoices. No endless paperwork. We take care of the admin, so you can get on with what you do best.",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fb7d3a1ee175947d1b7bdcc9f2cd49516",
        contentPosition: "center",
      },
      {
        title: {
          value: "Community",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "Join a network of trusted RICS professionals. Share knowledge, grow together, and be part of a community that has your back.",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F510621e32e144004a52fde813a836382",
        contentPosition: "top",
      },
      {
        title: {
          value: "No Targets, More Freedom",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "You set your pace. Work fewer hours, ditch the sales pressure, and enjoy a career that fits your lifestyle.",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F5e19c186cff6440a83ffed97d4401c9e",
        contentPosition: "center",
      },
      {
        title: {
          value: "Customer Support",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "Got a question? We're only ever a call or WhatsApp away. Real people, ready to help whenever you need it.",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F222fcac1a534476f8ece466cf8afa0f7",
        contentPosition: "bottom",
      },
      {
        title: {
          value: "Marketing",
          textColor: "#F7DE8C",
        },
        subtitle: {
          value:
            "You set your pace. Work fewer hours, ditch the sales pressure, and enjoy a career that fits your lifestyle.",
          textColor: "#FFFFFF",
        },
        backgroundImage:
          "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fe1d3cd5ab77e443aa2ac506ee77bc778",
        contentPosition: "center",
      },
    ],
  },
};
