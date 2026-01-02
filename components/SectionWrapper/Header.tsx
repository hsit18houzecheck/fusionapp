import { cn } from "@/lib/utils";
import AnimateOnView from "../ui/animate-on-view";
import { SectionHeaderProps } from "./types";

import { normalizeSectionText } from "./utils";

const SectionHeader = ({
  contentCenter = true,
  duration = 0.1,
  eyebrow,
  title,
  subtitle,
  headingClassName,
  headerComponent,
}: SectionHeaderProps) => {
  const normalizedEyebrow = normalizeSectionText(eyebrow);
  const normalizedTitle = normalizeSectionText(title);
  const normalizedSubtitle = normalizeSectionText(subtitle);

  return (
    <>
      {(!!normalizedEyebrow || !!normalizedTitle || !!normalizedSubtitle) && (
        <AnimateOnView
          duration={duration}
          className={cn(
            "flex flex-col gap-4 md:gap-6",
            {
              "items-center text-center": contentCenter,
              "items-start text-left": !contentCenter,
            },
            headingClassName
          )}
        >
          {!!normalizedEyebrow && (
            <p
              className={cn("eyebrow-lg", normalizedEyebrow.className)}
              style={normalizedEyebrow.style}
            >
              {normalizedEyebrow.text}
            </p>
          )}
          {!!normalizedTitle && (
            <h2
              className={cn(
                "font-freight text-yellow-900 text-[1.75rem] md:text-[2.5rem] font-medium leading-8 md:leading-11 lining-nums proportional-nums",
                normalizedTitle.className
              )}
              style={normalizedTitle.style}
            >
              {normalizedTitle.text}
            </h2>
          )}
          {!!normalizedSubtitle && (
            <p
              className={cn(
                "text-grey-500 text-base md:text-lg font-medium leading-6 md:leading-7",
                normalizedSubtitle.className
              )}
              style={normalizedSubtitle.style}
            >
              {normalizedSubtitle.text}
            </p>
          )}
          {headerComponent}
        </AnimateOnView>
      )}
    </>
  );
};

export default SectionHeader;
