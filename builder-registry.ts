"use client";

import { builder } from "@builder.io/sdk";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import MainSection from "./components/MainSection";
import PageHeader from "./components/PageHeader";

// Register Card component
builder.registerComponent(Card, {
  name: "Card",
  description: "A reusable card component for displaying content with title and description",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Card Title",
      helperText: "The title of the card",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Card description",
      helperText: "The description text for the card",
    },
  ],
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F52c9bac0b8a64effa25e4c5b0424e88f",
  defaultChildren: false,
});

// Register CardGrid component
builder.registerComponent(CardGrid, {
  name: "CardGrid",
  description:
    "A responsive grid layout for displaying multiple cards (1 col mobile, 2 col tablet, 3 col desktop)",
  inputs: [],
  canHaveChildren: true,
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4e420e57d9a24e2a8c5a89b4c3e4f5g6",
});

// Register MainSection component
builder.registerComponent(MainSection, {
  name: "MainSection",
  description: "A main content section with title and flexible children content",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Section Title",
      helperText: "The title of the main section",
    },
  ],
  canHaveChildren: true,
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7f631h68e0b75f39d6b9a0c1d2e3f4a5",
});

// Register PageHeader component
builder.registerComponent(PageHeader, {
  name: "PageHeader",
  description: "A page header component with title and optional subtitle",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Page Title",
      helperText: "The main page title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "",
      helperText: "Optional subtitle text",
    },
  ],
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F9i842j79f1c86g50e7c0b1d2e3f4a5b6",
});
