import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export type Button = {
  label?: string;
  url?: string;
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: () => void;
} & VariantProps<typeof buttonVariants>;
