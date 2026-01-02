import type { Meta, StoryObj } from "@storybook/react";
import ReviewsClient from "./Client";
import { DEFAULT_CONTENT, DEFAULT_REVIEWS } from "./constants";
import { normalizeTrustPilotReviews } from "./utils";

const meta = {
  title: "Components/Reviews",
  component: ReviewsClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Review component with customer reviews.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Content for the Reviews section",
      control: "object",
      table: {
        type: {
          summary: "ReviewsContent",
          detail: `{
            title: string,
            description: string,
            descriptionMobile: string
          }`,
        },
      },
    },
    reviews: {
      description: "Array of normalized reviews displayed in the carousel",
      control: "object",
      table: {
        type: {
          summary: "NormalizedReview[]",
          detail: `Array<{
            id: string,
            name: string,
            initials: string,
            imageUrl: string,
            countryCode: string | null,
            reviewCount: number,
            rating: number,
            title: string,
            text: string,
            publishedDate: string | null
          }>`,
        },
      },
    },
  },
} satisfies Meta<typeof ReviewsClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: DEFAULT_CONTENT,
    reviews: normalizeTrustPilotReviews(DEFAULT_REVIEWS).slice(0, 5)
  },
};

export const WithManyReviews: Story = {
  args: {
    content: DEFAULT_CONTENT,
    reviews: normalizeTrustPilotReviews(DEFAULT_REVIEWS),
  },
};

export const WithCustomContent: Story = {
  args: {
    content: {
      ...DEFAULT_CONTENT,
      title: "What Our Customers Say",
      description: "Real feedback from real people. See why homebuyers trust us.",
      descriptionMobile: "Trusted by thousands of homebuyers."
    },
    reviews: normalizeTrustPilotReviews(DEFAULT_REVIEWS).slice(0, 3),
  },
};

export const NoReviews: Story = {
  args: {
    content: DEFAULT_CONTENT,
    reviews: [],
  },
};
