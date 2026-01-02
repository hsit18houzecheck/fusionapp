import type { ServicesContent } from "./types";

export const DEFAULT_CONTENT: ServicesContent = {
  heading: "Our services",
  title: "Choose the right survey for your needs",
  subtitle: "Expert surveys, rapid results and total peace of mind.",
  lastcard: {
    title: "Need help choosing the right survey for you?",
    subtitle: "We’ve got you!",
    cta: { label: "Help me choose", href: "/services/help-me-choose" },
  },
  serviceitems: [
    {
      id: "valuation",
      title: "Property Valuation",
      description:
        "A professional valuation by a qualified RICS surveyor provided in an easy to understand format.",
      image: "/assets/services/evaluation.webp",
      price: "269",
      highlights: [{ title: "Help to buy" }, { title: "Shared Ownership" }, { title: "Market Valuation" }],
      secondaryCta: { label: "Learn more", href: "/services/valuation" },
      primaryCta: { label: "Book a Valuation", href: "/book/valuation" },
    },
    {
      id: "lvl2",
      title: "Level 2 Homebuyer Survey",
      description:
        "A qualified RICS surveyor’s inspection of the property providing a concise and easy to understand survey report.",
      image: "/assets/services/level2.webp",
      price: "489",
      highlights: [
        { title: "Standard Type Properties" },
        { title: "Property Condition Ratings" },
      ],
      badge: "Most popular",
      secondaryCta: {
        label: "Learn more",
        href: "/services/level-2-homebuyer-survey",
      },
      primaryCta: { label: "Book a Survey", href: "/book/level-2" },
    },
    {
      id: "lvl3",
      title: "Level 3 Building Survey",
      description:
        "A qualified RICS surveyor’s inspection of the property providing a detailed and thorough condition survey report.",
      image: "/assets/services/level3.webp",
      price: "739",
      highlights: [
        { title: "Larger, older or non-standard properties" },
        { title: "Detailed construction and condition advice" },
      ],
      secondaryCta: {
        label: "Learn more",
        href: "/services/level-3-building-survey",
      },
      primaryCta: { label: "Book a Survey", href: "/book/level-3" },
    },
  ],
};
