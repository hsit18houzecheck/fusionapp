"use client";

import { Builder } from "@builder.io/react";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import MainSection from "./components/MainSection";
import PageHeader from "./components/PageHeader";

// Register Card component
Builder.registerComponent(Card, {
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
});

// Register CardGrid component
Builder.registerComponent(CardGrid, {
  name: "CardGrid",
  description:
    "A responsive grid layout for displaying multiple cards (1 col mobile, 2 col tablet, 3 col desktop)",
  inputs: [
    {
      name: "children",
      type: "object",
      defaultValue: null,
      helperText: "Child components to display in the grid",
    },
  ],
});

// Register MainSection component
Builder.registerComponent(MainSection, {
  name: "MainSection",
  description: "A main content section with title and flexible children content",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Section Title",
      helperText: "The title of the main section",
    },
    {
      name: "children",
      type: "object",
      defaultValue: null,
      helperText: "Child content to display in the section",
    },
  ],
});

// Register PageHeader component
Builder.registerComponent(PageHeader, {
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
});
