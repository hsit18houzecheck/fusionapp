import Image from "next/image";
import { cn } from "@/lib/utils";
import BannerButton from "./BannerButton";
import type { BannerContent } from "./types";
import AnimateOnView from "../ui/animate-on-view";

export default function Banner({
  backgroundImage,
  backgroundColor,
  eyebrow,
  title,
  subtitle,
  richText,
  button,
  extraText,
}: BannerContent) {
  const titleSizeClasses = {
    md: "text-4xl font-medium md:text-[3.5rem]",
    lg: "text-5xl font-semibold md:text-[5rem]",
  };

  return (
    <section
      className={cn(
        "relative w-full min-h-[280px] overflow-hidden",
        "flex items-center justify-center",
        "px-6 py-12 md:py-16"
      )}
      style={{
        backgroundColor: !backgroundImage ? backgroundColor : undefined,
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-yellow-900/60" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full mx-auto text-center">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          {/* Eyebrow */}
          {!!eyebrow && (
            <AnimateOnView>
              <p
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: eyebrow.color }}
              >
                {eyebrow.text}
              </p>
            </AnimateOnView>
          )}

          {/* Title */}
          <AnimateOnView delay={0.15}>
            <h2
              className={cn(
                "font-freight font-medium leading-tight whitespace-break-spaces lining-nums proportional-nums",
                titleSizeClasses[title?.size || "lg"]
              )}
              style={{ color: title?.color }}
            >
              {title?.text}
            </h2>
          </AnimateOnView>

          {/* Subtitle */}
          {subtitle && (
            <AnimateOnView delay={2 * 0.15}>
              <p
                className="font-medium text-base md:text-lg max-w-2xl whitespace-pre-line"
                style={{ color: subtitle.color }}
              >
                {subtitle.text.replace(/\\n/g, "\n")}
              </p>
            </AnimateOnView>
          )}

          {/* Button */}
          {button && button.label && (
            <AnimateOnView className="pt-2" delay={3 * 0.15}>
              <BannerButton button={button} />
            </AnimateOnView>
          )}

          {/* Rich Text */}
          {richText && (
            <AnimateOnView delay={4 * 0.15}>
              <div
                className="text-base md:text-lg max-w-2xl prose prose-invert lining-nums proportional-nums"
                dangerouslySetInnerHTML={{ __html: richText }}
              />
            </AnimateOnView>
          )}

          {/* Extra Text */}
          {extraText && (
            <AnimateOnView delay={5 * 0.15}>
              <p
                className="text-xs md:text-sm pt-2"
                style={{ color: extraText.color }}
              >
                {extraText.text}
              </p>
            </AnimateOnView>
          )}
        </div>
      </div>
    </section>
  );
}
