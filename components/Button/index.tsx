"use client";

import * as React from "react";
import { Button as BaseButton } from "@/components/ui/button";
import { getResolvedIcon } from "@/lib/iconUtils";

export type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  iconClassName?: string;
};

function Button({
  leftIcon,
  rightIcon,
  iconClassName = "size-5",
  children,
  asChild,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <BaseButton asChild {...props}>
        {children}
      </BaseButton>
    );
  }

  return (
    <BaseButton {...props}>
      {getResolvedIcon({
        icon: leftIcon,
        className: iconClassName,
        ariaLabel: "left-icon",
      })}
      {children}
      {getResolvedIcon({
        icon: rightIcon,
        className: iconClassName,
        ariaLabel: "right-icon",
      })}
    </BaseButton>
  );
}

export { Button };
