import { ReportExplainerContent } from "./types";

const PLACEHOLDER_IMAGE = "/assets/images/report-info-container.png";
const PLACEHOLDER_ICON = "/assets/images/asterisk.svg";

export const DEFAULT_CONTENT: ReportExplainerContent = {
  eyebrow: "OUR REPORTS",
  title: "What's covered in a RICS Level 2 Report?",
  description:
    "Buying a home is a huge investment - and hidden issues can cost thousands if they're not spotted early. A Houzecheck RICS Level 2 Survey gives you a clear, expert view of the property's condition, so you can buy with confidence (or renegotiate the price if needed).",
  tabs: [
    {
      label: "Clear Summary & Condition Ratings",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Provides a clear overview of the property's condition with easy-to-understand ratings, helping you make informed decisions quickly.",
    },
    {
      label: "Damp, Mould & Condensation",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Identifies any signs of damp or mould — issues that can spread quickly, damage your home, and affect your health.",
    },
    {
      label: "Cracks, Movement & Structural Concerns",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Highlights structural issues that could be costly to repair and may affect the property's safety and value.",
    },
    {
      label: "Roof, Walls, Windows & Doors",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Assesses the condition of key structural elements that protect your property from weather and maintain its integrity.",
    },
    {
      label: "Grounds, Garages & Outbuildings",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Evaluates external areas and structures that contribute to the overall property value and maintenance requirements.",
    },
    {
      label: "Services (Water, Gas, Electric & Heating)",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Reviews essential utilities and systems that affect daily living and may require immediate attention or upgrades.",
    },
    {
      label: "Maintenance & Repairs",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Identifies immediate and future maintenance needs, helping you plan and budget for property upkeep.",
    },
    {
      label: "Risks & Hazards",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Flags potential safety concerns and hazards that could pose risks to occupants or require urgent attention.",
    },
    {
      label: "Legal & Environmental Issues",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Covers legal matters, environmental factors, and compliance issues that could affect your purchase or property use.",
    },
    {
      label: "Valuation",
      iconUrl: PLACEHOLDER_ICON,
      image: PLACEHOLDER_IMAGE,
      title: "Why this is important:",
      description: "Provides an independent assessment of the property's market value to help inform your purchase decision.",
    },
  ],
};

