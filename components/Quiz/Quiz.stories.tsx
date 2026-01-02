import type { Meta, StoryObj } from "@storybook/react";
import Quiz from ".";
import { DEFAULT_CONTENT, QUIZ_TYPE } from "./constants";

const meta = {
  title: "Components/Quiz",
  component: Quiz,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Quiz component with questions and options.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Quiz>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT[QUIZ_TYPE.LEVEL_2],
};
