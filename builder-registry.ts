"use client";
import { builder, Builder } from "@builder.io/react";
import AboutUsHero from "./components/AboutUsHero";
import Banner from "./components/Banner";
import Counter from "./components/Counter/Counter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// Import CLIENT components (not server components)
import Navbar from "./components/Navbar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Only initialize if API key exists
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
} else {
  console.error("NEXT_PUBLIC_BUILDER_API_KEY is not set");
}

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
// Register CLIENT components (these work in Builder.io's visual editor)

Builder.registerComponent(Navbar, {
  name: "NavBar",
  inputs: [],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [],
});

Builder.registerComponent(AboutUsHero, {
  name: "AboutUsHero",
  inputs: [
    {
      name: "eyebrow",
      type: "string",
      required: true,
    },
    {
      name: "image",
      type: "string",
      required: true,
    },
    {
      name: "logoList",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ name: string; url: string; }[]",
      },
      required: true,
    },
    {
      name: "subtitle",
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

Builder.registerComponent(Banner, {
  name: "Banner",
  inputs: [
    {
      name: "backgroundColor",
      type: "string",
    },
    {
      name: "backgroundImage",
      type: "string",
    },
    {
      name: "button",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ label: string; url?: string; icon?: string; rightIcon?: string; leftIcon?: string; backgroundColor?: string; textColor?: string; onClick?: () => void; } & VariantProps<(props?: ConfigVariants<{ variant: { default: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; }; size...",
      },
    },
    {
      name: "extraText",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ text: string; color?: string; }",
      },
    },
    {
      name: "eyebrow",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ text: string; color?: string; }",
      },
    },
    {
      name: "richText",
      type: "string",
    },
    {
      name: "subtitle",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ text: string; color?: string; }",
      },
    },
    {
      name: "title",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '{ text: string; size?: "md" | "lg"; color?: string; }',
      },
      required: true,
    },
  ],
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
});
