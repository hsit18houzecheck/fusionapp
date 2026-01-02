import { Button } from "@/common/types";

export type Myth = {
  myth: string;
  answer: string;
  actionBtn: {
    label: string;
  };
};

export type MythBustingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  myths: Myth[];
  ctaButton: {
    label: string;
    backgroundColor: string;
    textColor: string;
    icon: string;
  } & Button;
};

export type MythCardProps = {
  myth: Myth;
  index: number;
};
