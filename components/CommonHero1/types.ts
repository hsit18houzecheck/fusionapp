import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";

export type CommonHero1Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  ricsLogo: string;
  button: {
    label: string;
    url?: string;
    leftIcon?: string;
    rightIcon?: string;
    onClick?: () => void;
  } & VariantProps<typeof buttonVariants>;
};
