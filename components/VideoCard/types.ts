import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";

export type VideoCardContent = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  backgroundImage: string | null;
  mobileBackgroundImage?: string | null;
  allowGradient?: boolean;
  video?: {
    icon?: string;
    title: string;
    url?: string;
    videoFile?: string;
    button?: {
      label: string;
      url?: string;
      leftIcon?: string;
      rightIcon?: string;
    } & VariantProps<typeof buttonVariants>;
  };
};

export type VideoCardSectionContent = {
  sectionHeader: {
    eyebrow?: {
      text: string;
      color?: string;
      variant?: string;
    };
    title?: {
      text: string;
      color?: string;
      size?: string;
    };
    subheading?: {
      text: string;
      color?: string;
      size?: string;
    };
  };
  video: VideoCardContent;
};
