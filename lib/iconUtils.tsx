import { cn, isUrl } from "@/lib/utils";
import React from "react";
import {
  MdArrowOutward,
  MdPlayCircleOutline,
  MdArrowForward,
  MdArrowBack,
  MdCheck,
  MdInfoOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BsClock } from "react-icons/bs";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; "aria-label"?: string }>
> = {
  MdArrowOutward,
  MdPlayCircleOutline,
  MdArrowForward,
  MdArrowBack,
  MdCheck,
  IoCloseSharp,
  MdInfoOutline,
  MdOutlineSearch,
  BsClock,
};

export const getResolvedIcon = ({
  icon,
  className,
  ariaLabel,
}: {
  icon?: string | React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) => {
  if (!icon) return null;

  if (typeof icon !== "string") {
    return <>{icon}</>;
  }

  if (isUrl(icon)) {
    return (
      <img
        src={icon}
        alt={ariaLabel || "icon"}
        className={cn("inline-block", className)}
      />
    );
  }

  const IconComponent = ICON_MAP[icon];

  if (IconComponent) {
    return <IconComponent className={className} aria-label={ariaLabel} />;
  }

  return null;
};
