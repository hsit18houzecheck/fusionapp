import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/Button";

const meta = {
  title: "Components/UI/Button",
  component: Button,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithReactIconLeft: Story = {
  args: {
    children: "Continue",
  },
  render: (args) => (
    <Button {...args} leftIcon="MdBolt" />
  ),
};

export const WithReactIconRight: Story = {
  args: {
    children: "Next",
  },
  render: (args) => (
    <Button {...args} rightIcon="MdArrowForward" />
  ),
};

export const WithSvgUrl: Story = {
  args: {
    children: "Download",
  },
  render: (args) => (
    <Button {...args} leftIcon="/file.svg" />
  ),
};

export const BothSides: Story = {
  args: {
    children: "Pay now",
  },
  render: (args) => (
    <Button {...args} leftIcon="MdCreditCard" rightIcon="MdArrowForward" />
  ),
};