import { HCComparisonContent } from "./types";

export const GRID = "grid grid-cols-7 items-center";

export const DEFAULT_CONTENT: HCComparisonContent = {
  eyebrow: "COMPARISONS",
  title: "Compare Houzecheck",
  subheading: "Compared on 21st September 2025",
  table: {
    columns: [
      {
        icon: "",
        label: "",
        value: "name",
      },
      {
        icon: "/assets/images/comparison-performance.svg",
        label: "Performance",
        value: "performance",
      },
      {
        icon: "/assets/images/comparison-admin.svg",
        label: "Admin",
        value: "admin",
      },
      {
        icon: "/assets/images/comparison-flexibility.svg",
        label: "Flexibility",
        value: "flexibility",
      },
      {
        icon: "/assets/images/comparison-freedom.svg",
        label: "Freedom",
        value: "freedom",
      },
      {
        icon: "/assets/images/comparison-support.svg",
        label: "Support",
        value: "support",
      },
      {
        icon: "/assets/images/comparison-community.svg",
        label: "Community",
        value: "community",
      }
    ],
    rows: [
      {
        admin: "Zero Admin",
        bonus: "Sign-on Bonus",
        community: "Commuity",
        flexibility: "Flexible",
        freedom: "Freedom",
        isBest: true,
        logo: "/assets/images/hc-logo.webp",
        name: "Houzecheck",
        marketing: "Marketing Tech",
        performance: "No Targets",
        support: "Dedicated Support",
        tag: "Best",
      },
      {
        admin: "More Admin",
        bonus: "No Bonus",
        community: "No Commuity",
        flexibility: "Rigid",
        freedom: "Limited Freedom",
        isBest: false,
        marketing: "Low Marketing Spend",
        name: "Competitor A",
        performance: "Aggressive Targets",
        support: "Less Support",
      },
      {
        admin: "More Admin",
        bonus: "No Bonus",
        community: "No Commuity",
        flexibility: "Rigid",
        freedom: "Limited Freedom",
        isBest: false,
        marketing: "Low Marketing Spend",
        name: "Competitor B",
        performance: "Aggressive Targets",
        support: "Less Support",
      },
    ],
  },
  ctaBtn: {
    icon: "MdArrowOutward",
    label: "Sign-up now",
    url: "/rics-surveyor-jobs",
  },
};

export { DEFAULT_CONTENT as HCCOMPARISON_DEFAULT_CONTENT };
