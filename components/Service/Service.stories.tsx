import type { Meta, StoryObj } from "@storybook/react";
import ServiceClient from "./Client";
import { DEFAULT_CONTENT } from "./constants";

const meta = {
  title: "Components/Service",
  component: ServiceClient,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Service section showcasing available surveys with pricing, highlights and CTAs.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      description: "Small heading label above the title",
      control: "text",
    },
    title: {
      description: "Main title for the Services section",
      control: "text",
    },
    subtitle: {
      description: "Optional subtitle for the Services section",
      control: "text",
    },
    serviceitems: {
      description: "Array of service cards to display",
      control: "object",
      table: {
        type: {
          summary: "ServiceItem[]",
          detail: `Array<{
                                id: string,
                                title: string,
                                description: string,
                                image: string,
                                price: string,
                                highlights?: { title: string }[],
                                badge?: string,
                                primaryCta?: { label: string; href: string },
                                secondaryCta?: { label: string; href: string }
                                }>`,
        },
      },
    },
    lastcard: {
      description: "Configuration for the final help/CTA card",
      control: "object",
      table: {
        type: {
          summary:
            "{ title: string; subtitle?: string; cta: { label: string; href: string } }",
        },
      },
    },
  },
} satisfies Meta<typeof ServiceClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DEFAULT_CONTENT,
};

export const WithoutSubtitle: Story = {
  args: {
    ...DEFAULT_CONTENT,
    subtitle: undefined,
  },
};

export const SingleItem: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: [DEFAULT_CONTENT.serviceitems[0]],
  },
};

export const ManyItems: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: [
      ...DEFAULT_CONTENT.serviceitems,
      {
        ...DEFAULT_CONTENT.serviceitems[0],
        id: "extra-1",
        title: "New Build Snagging Survey",
      },
      {
        ...DEFAULT_CONTENT.serviceitems[1],
        id: "extra-2",
        title: "Structural Inspection",
      },
    ],
  },
};

export const NoHighlights: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: DEFAULT_CONTENT.serviceitems.map((s) => ({
      ...s,
      highlights: [],
    })),
  },
};

export const PrimaryOnlyCta: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: DEFAULT_CONTENT.serviceitems.map((s) => ({
      ...s,
      secondaryCta: undefined,
    })),
  },
};

export const SecondaryOnlyCta: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: DEFAULT_CONTENT.serviceitems.map((s) => ({
      ...s,
      primaryCta: undefined,
    })),
  },
};

export const NoPrices: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: DEFAULT_CONTENT.serviceitems.map((s) => ({
      ...s,
      price: "",
    })),
  },
};

export const BadgeOnAll: Story = {
  args: {
    ...DEFAULT_CONTENT,
    serviceitems: DEFAULT_CONTENT.serviceitems.map((s) => ({
      ...s,
      badge: s.badge || "Most popular",
    })),
  },
};
