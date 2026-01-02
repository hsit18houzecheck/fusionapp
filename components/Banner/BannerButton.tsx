"use client";

import Link from "next/link";
import { Button } from "@/components/Button";

interface BannerButtonProps {
  button: {
    label: string;
    url?: string;
    icon?: string;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
  };
}

export default function BannerButton({ button }: BannerButtonProps) {
  const buttonProps = {
    size: "lg" as const,
    rightIcon: button.icon,
    className: "h-11 px-8 text-sm",
    style: {
      backgroundColor: button.backgroundColor,
      color: button.textColor,
    },
  };

  if (button.onClick) {
    return (
      <Button {...buttonProps} onClick={button.onClick}>
        {button.label}
      </Button>
    );
  }

  if (button.url) {
    return (
      <Link href={button.url || "/"}>
        <Button {...buttonProps}>{button.label}</Button>
      </Link>
    );
  }

  return <Button {...buttonProps}>{button.label}</Button>;
}
