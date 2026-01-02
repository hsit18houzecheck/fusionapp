"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconButton, IconButtonProps } from "@/components/IconButton";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { getResolvedIcon } from "@/lib/iconUtils";
import { EYEBROW_STYLES, JUSTIFY_CONTENT, VARIANT_STYLES } from "./constants";
import AnimateOnView from "../ui/animate-on-view";
import { QuizContent } from "../Quiz/types";
import Quiz, { QuizHandle } from "../Quiz";
import { DialogTrigger } from "../ui/dialog";

export interface CardProps {
  // Content
  eyebrow?: string;
  icon?: {
    name?: string; // Icon name from react-icons (e.g., "MdStar") or URL
    color?: string;
    url?: string;
    size?: number;
    backgroundColor?: string;
  };
  title: string;
  subtitle?: string;

  // Button configuration
  button?: IconButtonProps;

  // Like button
  likeButton?: {
    count: string | number;
    isLiked?: boolean;
    onToggle?: () => void;
  };

  // Styling
  variant?: "yellow" | "light" | "dark" | "transparent";
  className?: string;
  contentClassName?: string;

  // Layout
  contentAlignment?: "start" | "center" | "end";

  index?: number;

  quiz?: QuizContent;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      eyebrow,
      icon,
      title,
      subtitle,
      button,
      likeButton,
      variant = "yellow",
      className,
      contentClassName,
      contentAlignment = "start",
      index = 0,
      quiz,
    },
    ref
  ) => {
    const [isLiked, setIsLiked] = React.useState(likeButton?.isLiked || false);

    const quizRef = React.useRef<QuizHandle>(null);

    const ButtonWrapper = ({ children }: { children: React.ReactNode }) =>
      quiz ? (
        <Quiz ref={quizRef} {...quiz}>
          <DialogTrigger asChild>{children}</DialogTrigger>
        </Quiz>
      ) : (
        children
      );

    const handleLikeToggle = () => {
      setIsLiked(!isLiked);
      likeButton?.onToggle?.();
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full rounded-2xl overflow-hidden", className)}
      >
        {/* Content */}
        <AnimateOnView
          delay={(index + 1) * 0.15}
          className={cn(
            "relative flex flex-col p-6 md:p-10 min-h-[300px] h-full",
            VARIANT_STYLES[variant],
            JUSTIFY_CONTENT[contentAlignment],
            contentClassName
          )}
        >
          <div className="flex-1 flex flex-col gap-4 md:gap-4">
            {/* Eyebrow */}
            {eyebrow && (
              <p
                className={cn(
                  "text-[0.5rem] md:text-[0.625rem] font-medium tracking-widest mb-2 md:mb-4",
                  EYEBROW_STYLES[variant]
                )}
              >
                {eyebrow}
              </p>
            )}

            {/* Icon */}
            {icon && (
              <div
                className={cn("flex items-center justify-center mb-4 md:mb-6", {
                  "w-12 h-12 md:w-16 md:h-16 rounded-full":
                    icon.backgroundColor,
                })}
                style={{
                  backgroundColor: icon.backgroundColor,
                  color: icon.color,
                  fontSize: icon.size || 32,
                }}
              >
                {getResolvedIcon({
                  icon: icon.url || icon.name,
                  className: cn("shrink-0", {
                    "w-8 h-8": !icon.size,
                  }),
                  ariaLabel: "card-icon",
                })}
              </div>
            )}

            {/* Title */}
            <h2
              className="font-freight font-medium text-[1.75rem] md:text-[2.5rem] leading-8 md:leading-11"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Subtitle */}
            {subtitle && (
              <p
                className={cn(
                  "text-base md:text-lg font-medium opacity-90 text-grey-500",
                  {
                    "text-white-100": variant === "dark",
                  }
                )}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className={cn("flex justify-between mt-4 w-full")}>
            {/* Button */}
            {button && (
              <ButtonWrapper>
                <IconButton
                  label={button.label}
                  icon={button.icon}
                  iconPosition={button.iconPosition}
                  onClick={(e) =>
                    quiz ? quizRef.current?.open(false) : button?.onClick?.(e)
                  }
                  url={button.url}
                  className={cn(
                    "font-medium rounded-md h-auto text-xs md:text-sm p-3 md:p-3.5",
                    {
                      "bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90":
                        variant === "dark" || variant === "transparent",
                    },
                    {
                      "bg-yellow-900 text-yellow-500 hover:bg-yellow-900/90":
                        variant === "yellow" || variant === "light",
                    },
                    button.className
                  )}
                  iconClassName="w-5 h-5"
                />
              </ButtonWrapper>
            )}

            {/* Like Button */}
            {likeButton && (
              <button
                onClick={handleLikeToggle}
                className="flex items-center gap-1 md:gap-2 transition-colors ml-auto"
                aria-label={isLiked ? "Unlike" : "Like"}
              >
                {isLiked ? (
                  <MdFavorite
                    className={cn(
                      "w-5 h-5",
                      {
                        "text-yellow-900":
                          variant === "yellow" || variant === "light",
                      },
                      {
                        "text-yellow-500":
                          variant === "dark" || variant === "transparent",
                      }
                    )}
                  />
                ) : (
                  <MdFavoriteBorder
                    className={cn(
                      "w-5 h-5",
                      {
                        "text-yellow-900":
                          variant === "yellow" || variant === "light",
                      },
                      {
                        "text-yellow-500":
                          variant === "dark" || variant === "transparent",
                      }
                    )}
                  />
                )}
                <span
                  className={cn(
                    "text-sm font-medium",
                    {
                      "text-yellow-900":
                        variant === "yellow" || variant === "light",
                    },
                    {
                      "text-yellow-500":
                        variant === "dark" || variant === "transparent",
                    }
                  )}
                >
                  {likeButton.count}
                </span>
              </button>
            )}
          </div>
        </AnimateOnView>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
