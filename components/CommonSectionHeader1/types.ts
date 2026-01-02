import React from "react";

export type CommonSectionHeader1Content = {
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
  children?: React.ReactNode;
};
