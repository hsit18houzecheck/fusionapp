import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";

export type NewsItem = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  button: {
    label: string;
    url?: string;
    rightIcon?: string;
  } & VariantProps<typeof buttonVariants>;
};

export type NewsAndUpdate = {
  eyebrow: string;
  title: string;
  subtitle: string;
  news: NewsItem[];
};

export type NewsCardProps = {
  newsItem: NewsItem;
};
