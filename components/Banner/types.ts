import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";

export type BannerContent = {
  backgroundImage?: string;
  backgroundColor?: string;
  eyebrow?: {
    text: string;
    color?: string;
  };
  title: {
    text: string;
    size?: "md" | "lg";
    color?: string;
  };
  subtitle?: {
    text: string;
    color?: string;
  };
  richText?: string;
  button?: {
    label: string;
    url?: string;
    icon?: string;
    rightIcon?: string;
    leftIcon?: string;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
  } & VariantProps<typeof buttonVariants>;
  extraText?: {
    text: string;
    color?: string;
  };
};
