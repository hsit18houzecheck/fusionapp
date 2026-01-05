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

// Register design tokens for Builder Visual Editor based on Tailwind theme
// Uses CSS variables defined in `app/globals.css` as the primary source
Builder.register("editor.settings", {
  allowOverridingTokens: true,
  designTokensOptional: true,
  // styleStrictMode: true, // optional: enable if you want strict token-only editing
  designTokens: {
    colors: [
      // Shadcn UI Theme Colors
      { name: "Background", value: "var(--color-background)" },
      { name: "Foreground", value: "var(--color-foreground)" },
      { name: "Card", value: "var(--color-card)" },
      { name: "Card Foreground", value: "var(--color-card-foreground)" },
      { name: "Popover", value: "var(--color-popover)" },
      { name: "Popover Foreground", value: "var(--color-popover-foreground)" },
      { name: "Primary", value: "var(--color-primary)" },
      { name: "Primary Foreground", value: "var(--color-primary-foreground)" },
      { name: "Secondary", value: "var(--color-secondary)" },
      { name: "Secondary Foreground", value: "var(--color-secondary-foreground)" },
      { name: "Muted", value: "var(--color-muted)" },
      { name: "Muted Foreground", value: "var(--color-muted-foreground)" },
      { name: "Accent", value: "var(--color-accent)" },
      { name: "Accent Foreground", value: "var(--color-accent-foreground)" },
      { name: "Destructive", value: "var(--color-destructive)" },
      { name: "Destructive Foreground", value: "var(--color-destructive-foreground)" },
      { name: "Border", value: "var(--color-border)" },
      { name: "Input", value: "var(--color-input)" },
      { name: "Ring", value: "var(--color-ring)" },
      
      // Chart Colors
      { name: "Chart 1", value: "var(--color-chart-1)" },
      { name: "Chart 2", value: "var(--color-chart-2)" },
      { name: "Chart 3", value: "var(--color-chart-3)" },
      { name: "Chart 4", value: "var(--color-chart-4)" },
      { name: "Chart 5", value: "var(--color-chart-5)" },

      // Brand Colors - Yellow Scale
      { name: "Yellow 900", value: "var(--color-yellow-900)" },
      { name: "Yellow 800", value: "var(--color-yellow-800)" },
      { name: "Yellow 500", value: "var(--color-yellow-500)" },
      { name: "Yellow 100", value: "var(--color-yellow-100)" },
      
      // Brand Colors - Peach Scale
      { name: "Peach 500", value: "var(--color-peach-500)" },
      { name: "Peach 900", value: "var(--color-peach-900)" },

      // Functional Colors
      { name: "White 100", value: "var(--color-white-100)" },
      { name: "Grey 100", value: "var(--color-grey-100)" },
      { name: "Grey 300", value: "var(--color-grey-300)" },
      { name: "Grey 500", value: "var(--color-grey-500)" },

      // WhatsApp Colors
      { name: "WhatsApp Green", value: "var(--color-whatsapp-green)" },
      { name: "WhatsApp Dark Green", value: "var(--color-whatsapp-dark-green)" },
      { name: "WhatsApp White", value: "var(--color-whatsapp-white)" },

      // Trustpilot Colors
      { name: "Trustpilot Green", value: "var(--color-trustpilot-green)" },
      { name: "Trustpilot Avatar Pink", value: "var(--color-trustpilot-avatar-pink)" },
      { name: "Trustpilot Date BG", value: "var(--color-trustpilot-date-bg)" },
      { name: "Trustpilot Black", value: "var(--color-trustpilot-black)" },
      { name: "Trustpilot Black 2", value: "var(--color-trustpilot-black-2)" },
      { name: "Trustpilot Black 3", value: "var(--color-trustpilot-black-3)" },

      // Semantic Colors - Success
      { name: "Success 100", value: "var(--color-success-100)" },
      { name: "Success 500", value: "var(--color-success-500)" },

      // Semantic Colors - Info
      { name: "Info 100", value: "var(--color-info-100)" },
      { name: "Info 500", value: "var(--color-info-500)" },

      // Semantic Colors - Warning
      { name: "Warning 100", value: "var(--color-warning-100)" },
      { name: "Warning 500", value: "var(--color-warning-500)" },

      // Semantic Colors - Error
      { name: "Error 100", value: "var(--color-error-100)" },
      { name: "Error 500", value: "var(--color-error-500)" },

      // Misc Colors
      { name: "Pagination Black", value: "var(--color-pagination-black)" },

      // Old Website Colors
      { name: "Primary Old", value: "var(--color-primary-old)" },
      { name: "Secondary Old", value: "var(--color-secondary-old)" },
      { name: "Light Blue Old", value: "var(--color-light-blue-old)" },
      { name: "Dark Blue Old", value: "var(--color-dark-blue-old)" },
      { name: "Yellow Old", value: "var(--color-yellow-old)" },
      { name: "Water Old", value: "var(--color-water-old)" }
    ],

    spacing: [
      { name: "0", value: "0px" },
      { name: "0.5", value: "0.125rem" },
      { name: "1", value: "0.25rem" },
      { name: "1.5", value: "0.375rem" },
      { name: "2", value: "0.5rem" },
      { name: "2.5", value: "0.625rem" },
      { name: "3", value: "0.75rem" },
      { name: "3.5", value: "0.875rem" },
      { name: "4", value: "1rem" },
      { name: "5", value: "1.25rem" },
      { name: "6", value: "1.5rem" },
      { name: "7", value: "1.75rem" },
      { name: "8", value: "2rem" },
      { name: "9", value: "2.25rem" },
      { name: "10", value: "2.5rem" },
      { name: "11", value: "2.75rem" },
      { name: "12", value: "3rem" },
      { name: "14", value: "3.5rem" },
      { name: "16", value: "4rem" },
      { name: "20", value: "5rem" },
      { name: "24", value: "6rem" },
      { name: "28", value: "7rem" },
      { name: "32", value: "8rem" },
      { name: "36", value: "9rem" },
      { name: "40", value: "10rem" },
      { name: "44", value: "11rem" },
      { name: "48", value: "12rem" },
      { name: "52", value: "13rem" },
      { name: "56", value: "14rem" },
      { name: "60", value: "15rem" },
      { name: "64", value: "16rem" },
      { name: "72", value: "18rem" },
      { name: "80", value: "20rem" },
      { name: "96", value: "24rem" }
    ],

    fontSize: [
      { name: "xs", value: "0.75rem" },
      { name: "sm", value: "0.875rem" },
      { name: "base", value: "1rem" },
      { name: "lg", value: "1.125rem" },
      { name: "xl", value: "1.25rem" },
      { name: "2xl", value: "1.5rem" },
      { name: "3xl", value: "1.875rem" },
      { name: "4xl", value: "2.25rem" },
      { name: "5xl", value: "3rem" },
      { name: "6xl", value: "3.75rem" },
      { name: "7xl", value: "4.5rem" },
      { name: "8xl", value: "6rem" },
      { name: "9xl", value: "8rem" }
    ],

    fontFamily: [
      { name: "Open Sauce", value: "var(--font-open-sauce, system-ui, -apple-system, sans-serif)" },
      { name: "Freight", value: "var(--font-freight, Georgia, serif)" },
      { name: "Mont", value: "var(--font-mont, 'Helvetica Neue', sans-serif)" }
    ],

    fontWeight: [
      { name: "Thin", value: "100" },
      { name: "Extra Light", value: "200" },
      { name: "Light", value: "300" },
      { name: "Normal", value: "400" },
      { name: "Medium", value: "500" },
      { name: "Semi Bold", value: "600" },
      { name: "Bold", value: "700" },
      { name: "Extra Bold", value: "800" },
      { name: "Black", value: "900" }
    ],

    lineHeight: [
      { name: "None", value: "1" },
      { name: "Tight", value: "1.25" },
      { name: "Snug", value: "1.375" },
      { name: "Normal", value: "1.5" },
      { name: "Relaxed", value: "1.625" },
      { name: "Loose", value: "2" }
    ],

    letterSpacing: [
      { name: "Tighter", value: "-0.05em" },
      { name: "Tight", value: "-0.025em" },
      { name: "Normal", value: "0em" },
      { name: "Wide", value: "0.025em" },
      { name: "Wider", value: "0.05em" },
      { name: "Widest", value: "0.1em" }
    ],

    borderRadius: [
      { name: "None", value: "0px" },
      { name: "SM", value: "var(--radius-sm)" },
      { name: "MD", value: "var(--radius-md)" },
      { name: "LG", value: "var(--radius-lg)" },
      { name: "XL", value: "var(--radius-xl)" },
      { name: "Full", value: "9999px" }
    ],

    borderWidth: [
      { name: "0", value: "0px" },
      { name: "1", value: "1px" },
      { name: "2", value: "2px" },
      { name: "4", value: "4px" },
      { name: "8", value: "8px" }
    ],

    boxShadow: [
      { name: "SM", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
      { name: "Base", value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
      { name: "MD", value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
      { name: "LG", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
      { name: "XL", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
      { name: "2XL", value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
      { name: "Inner", value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
      { name: "None", value: "none" }
    ],

    opacity: [
      { name: "0", value: "0" },
      { name: "5", value: "0.05" },
      { name: "10", value: "0.1" },
      { name: "20", value: "0.2" },
      { name: "25", value: "0.25" },
      { name: "30", value: "0.3" },
      { name: "40", value: "0.4" },
      { name: "50", value: "0.5" },
      { name: "60", value: "0.6" },
      { name: "70", value: "0.7" },
      { name: "75", value: "0.75" },
      { name: "80", value: "0.8" },
      { name: "90", value: "0.9" },
      { name: "95", value: "0.95" },
      { name: "100", value: "1" }
    ],

    zIndex: [
      { name: "0", value: "0" },
      { name: "10", value: "10" },
      { name: "20", value: "20" },
      { name: "30", value: "30" },
      { name: "40", value: "40" },
      { name: "50", value: "50" },
      { name: "Auto", value: "auto" }
    ]
  }
});

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
