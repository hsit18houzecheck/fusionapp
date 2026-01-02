import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";
import { Button } from "@/common/types";

export type OverlayCard = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  mobileImage?: string;
  textAlign?: "left" | "center" | "right";
  textList: { title: string }[];
  button: {
    label: string;
  } & VariantProps<typeof buttonVariants>;
};

export type OverlayCardsContent = {
  eyebrow?: {
    text: string;
    color: string;
  };
  title?: {
    text: string;
    color: string;
  };
  subtitle?: {
    text: string;
    color: string;
  };
  backgroundColor?: string;
  cta?: {
    label: string;
    href: string;
  };
  ctaV2?: Button;
  cards: OverlayCard[];
};

export type OverlayCardComponentProps = {
  card: OverlayCard;
  id: number;
  isActive: boolean;
  onToggle: (index: number | null) => void;
  totalCards: number;
};
