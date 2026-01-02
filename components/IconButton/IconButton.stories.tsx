import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { MdPlayCircle, MdArrowForward, MdDownload, MdPhone } from "react-icons/md";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    label: "Click me",
    variant: "default",
    size: "default",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Watch Video",
    icon: "play",
    iconPosition: "left",
    variant: "default",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Next",
    icon: "arrow",
    iconPosition: "right",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    label: "Download",
    icon: "download",
    iconPosition: "left",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    label: "Call Now",
    icon: "phone",
    iconPosition: "left",
    variant: "outline",
  },
};

export const CustomStyles: Story = {
  args: {
    label: "Watch Video",
    icon: "play",
    iconPosition: "left",
    className: "bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90 rounded-full px-6 py-5 h-auto",
    iconClassName: "w-5 h-5",
  },
};

export const LargeSize: Story = {
  args: {
    label: "Get Started",
    icon: "arrow",
    iconPosition: "right",
    size: "lg",
    variant: "default",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Learn More",
    icon: "arrow",
    iconPosition: "right",
    size: "sm",
    variant: "outline",
  },
};

export const NoIcon: Story = {
  args: {
    label: "Submit",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    icon: "play",
    iconPosition: "left",
    disabled: true,
  },
};

