"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import MainSection from "./components/MainSection";
import PageHeader from "./components/PageHeader";

if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
} else {
  console.error("NEXT_PUBLIC_BUILDER_API_KEY is not set");
}

// Only register components on the client side
// Register Card component
Builder.registerComponent(Card, {
  name: "Card",
  description: "A reusable card component with title and description",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Card Title",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Add your content here",
    },
  ],
});
// Register CardGrid component
Builder.registerComponent(CardGrid, {
  name: "CardGrid",
  description:
    "Responsive grid layout for cards (1 col mobile, 2 col tablet, 3 col desktop)",
  canHaveChildren: true,
  inputs: [],
});
// Register MainSection component
Builder.registerComponent(MainSection, {
  name: "MainSection",
  description: "Main content section with title and flexible children",
  canHaveChildren: true,
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Section Title",
    },
  ],
});
// Register PageHeader component
Builder.registerComponent(PageHeader, {
  name: "PageHeader",
  description: "Page header with title and optional subtitle",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Page Title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Page subtitle",
    },
  ],
});


Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(CardGrid), {
  name: "CardGrid",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});
