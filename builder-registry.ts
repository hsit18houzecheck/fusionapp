"use client";

import { builder } from "@builder.io/sdk";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";
import MainSection from "./components/MainSection";
import PageHeader from "./components/PageHeader";

// Register Card component
builder.registerComponent(Card, {
  name: "Card",
  displayName: "Card",
  description: "A reusable card component with title and description",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Card Title",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Add your content here",
      required: true,
    },
  ],
});

// Register CardGrid component
builder.registerComponent(CardGrid, {
  name: "CardGrid",
  displayName: "Card Grid",
  description: "Responsive grid layout for cards (1 col mobile, 2 col tablet, 3 col desktop)",
  inputs: [],
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Card",
        options: {
          title: "Card 1",
          description: "Description 1",
        },
      },
    },
  ],
});

// Register MainSection component
builder.registerComponent(MainSection, {
  name: "MainSection",
  displayName: "Main Section",
  description: "Main content section with title and flexible children",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Section Title",
      required: true,
    },
  ],
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      tagName: "p",
      children: "Add your content here",
    },
  ],
});

// Register PageHeader component
builder.registerComponent(PageHeader, {
  name: "PageHeader",
  displayName: "Page Header",
  description: "Page header with title and optional subtitle",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Page Title",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Page subtitle",
      required: false,
    },
  ],
});
