import type { Meta, StoryObj } from "@storybook/react";
import Accreditation from "./index";

const meta = {
  title: "Components/Accreditation",
  component: Accreditation,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accreditation component displaying the RICS logo. Uses a default logo from assets but can be overridden with a CMS URL.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logos: {
      description: "Optional logos array to override the default RICS logo",
      control: "object",
    },
  },
} satisfies Meta<typeof Accreditation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomLogo: Story = {
  args: {
    logos: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F46316df1dc9043449bb5185b8bb0f213",
        alt: "Custom accreditation logo",
      },
    ],
  },
};
