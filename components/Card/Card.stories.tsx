import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Grid Layout Story
export const GridLayout: Story = {
  decorators: [
    () => (
      <div className="w-full max-w-7xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card
            eyebrow="QUICK QUIZ"
            title="Do I need a survey?"
            subtitle="Take our quiz to find out if you need a survey for your new home."
            variant="yellow"
            button={{
              label: "Take the Quiz",
              icon: "arrow",
              iconPosition: "right",
            }}
            likeButton={{ count: "1.2k" }}
          />
          <Card
            eyebrow="QUICK QUIZ"
            title="Find our your survey price"
            subtitle="Take the quiz to see how much your survey or valuation will cost."
            variant="light"
            button={{
              label: "Take the Quiz",
              icon: "arrow",
              iconPosition: "right",
            }}
            likeButton={{ count: "1.2k" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            eyebrow="OUR SURVEYORS"
            title="150+ Surveyors ready"
            subtitle="Expert RICS professionals are ready in [user location]."
            variant="dark"
            button={{
              label: "Meet your local surveyor",
              icon: "arrow",
              iconPosition: "right",
            }}
            likeButton={{ count: "1.2k" }}
          />
          <Card
            eyebrow="SAVE MONEY"
            title="£xxxxx saved by customer* based on £xxxx price reduction"
            subtitle="Byline describing how we can save money"
            variant="light"
            likeButton={{ count: "1.2k" }}
          />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

// Quick Quiz Cards
export const QuickQuizYellow: Story = {
  args: {
    eyebrow: "QUICK QUIZ",
    title: "Do I need a survey?",
    subtitle: "Take our quiz to find out if you need a survey for your new home.",
    variant: "yellow",
    button: {
      label: "Take the Quiz",
      icon: "arrow",
      iconPosition: "right",
      onClick: () => console.log("Quiz clicked"),
    },
    likeButton: {
      count: "1.2k",
      onToggle: () => console.log("Like toggled"),
    },
  },
};

export const QuickQuizLight: Story = {
  args: {
    eyebrow: "QUICK QUIZ",
    title: "Find our your survey price",
    subtitle: "Take the quiz to see how much your survey or valuation will cost.",
    variant: "light",
    button: {
      label: "Take the Quiz",
      icon: "arrow",
      iconPosition: "right",
      onClick: () => console.log("Quiz clicked"),
    },
    likeButton: {
      count: "1.2k",
    },
  },
};

// Surveyors Card
export const SurveyorsDark: Story = {
  args: {
    eyebrow: "OUR SURVEYORS",
    title: "150+ Surveyors ready",
    subtitle: "Expert RICS professionals are ready in [user location].",
    variant: "dark",
    button: {
      label: "Meet your local surveyor",
      icon: "arrow",
      iconPosition: "right",
      onClick: () => console.log("Meet surveyor clicked"),
    },
    likeButton: {
      count: "1.2k",
    },
  },
};

// Save Money Card
export const SaveMoney: Story = {
  args: {
    eyebrow: "SAVE MONEY",
    title: "£xxxxx saved by customer* based on £xxxx price reduction",
    subtitle: "Byline describing how we can save money",
    variant: "light",
    likeButton: {
      count: "1.2k",
    },
  },
};

// Instagram Card with Background Image
export const InstagramCard: Story = {
  args: {
    title: "Follow us on Instagram",
    subtitle: "Check out our latest posts and stories.",
    variant: "transparent",
    button: {
      label: "Follow us on Instagram",
      icon: "arrow",
      iconPosition: "right",
      onClick: () => console.log("Instagram clicked"),
    },
    likeButton: {
      count: "1.2k",
    },
    contentAlignment: "end",
  },
};

// Customer Story Card
export const CustomerStory: Story = {
  args: {
    eyebrow: "CUSTOMER STORIES",
    title: "Meet Pete",
    subtitle: "First-time homebuyer from Manchester.",
    variant: "transparent",
    button: {
      label: "Watch Video",
      icon: "play",
      iconPosition: "left",
      onClick: () => console.log("Video clicked"),
    },
    likeButton: {
      count: "1.2k",
    },
    contentAlignment: "end",
  },
};

// Without Button
export const WithoutButton: Story = {
  args: {
    eyebrow: "QUICK QUIZ",
    title: "Do I need a survey?",
    subtitle: "Take our quiz to find out if you need a survey for your new home.",
    variant: "yellow",
    likeButton: {
      count: "1.2k",
    },
  },
};

// Without Like Button
export const WithoutLikeButton: Story = {
  args: {
    eyebrow: "QUICK QUIZ",
    title: "Do I need a survey?",
    subtitle: "Take our quiz to find out if you need a survey for your new home.",
    variant: "yellow",
    button: {
      label: "Take the Quiz",
      icon: "arrow",
      iconPosition: "right",
    },
  },
};

// Minimal Card
export const Minimal: Story = {
  args: {
    title: "Simple Card Title",
    subtitle: "Just a title and subtitle, nothing else.",
    variant: "light",
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    eyebrow: "CUSTOM",
    title: "Custom Styled Card",
    subtitle: "This card has custom styling applied.",
    variant: "yellow",
    button: {
      label: "Custom Button",
      className: "rounded-full px-6 py-4",
    },
    likeButton: {
      count: "999",
    },
    className: "shadow-xl",
    contentClassName: "min-h-[400px]",
  },
};

