// TODO: This button requires complete makeover and will be treated as Main Button component, which will be reused wherever possible.
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import {
  MdArrowForward,
  MdOutlinePlayCircle,
  MdPhone,
  MdEmail,
  MdDownload,
  MdShare,
  MdOpenInNew,
  MdClose,
  MdCheck,
  MdAdd,
} from "react-icons/md";

// Predefined icon variants
const ICON_VARIANTS = {
  arrow: MdArrowForward,
  play: MdOutlinePlayCircle,
  phone: MdPhone,
  email: MdEmail,
  download: MdDownload,
  share: MdShare,
  external: MdOpenInNew,
  close: MdClose,
  check: MdCheck,
  add: MdAdd,
} as const;

export type IconVariant = keyof typeof ICON_VARIANTS;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label: string;
  icon?: IconVariant | string; // Can be variant key or image URL
  iconPosition?: "left" | "right";
  iconClassName?: string;
  asChild?: boolean;
  url?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      label,
      icon,
      iconPosition = "left",
      iconClassName,
      className,
      variant,
      size,
      asChild,
      url,
      ...props
    },
    ref
  ) => {
    // Check if icon is a URL or a variant key
    const isIconUrl = icon && (icon.startsWith("http") || icon.startsWith("/"));
    const IconComponent = icon && !isIconUrl ? ICON_VARIANTS[icon as IconVariant] : null;

    // Render icon based on type
    const renderIcon = () => {
      if (!icon) return null;

      if (isIconUrl) {
        return (
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            className={cn("shrink-0", iconClassName)}
          />
        );
      }

      if (IconComponent) {
        return <IconComponent className={cn("shrink-0", iconClassName)} />;
      }

      return null;
    };

    const content = (
      <>
        {iconPosition === "left" && renderIcon()}
        <span>{label}</span>
        {iconPosition === "right" && renderIcon()}
      </>
    );

    if (url) {
      return (
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn("gap-1 md:gap-2", className)}
          asChild
          {...props}
        >
          <Link href={url}>{content}</Link>
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("gap-1 md:gap-2", className)}
        asChild={asChild}
        {...props}
      >
        {asChild ? (
          <span>{content}</span>
        ) : (
          content
        )}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
