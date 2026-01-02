import { cn } from "@/lib/utils";
import AnimateOnView from "../ui/animate-on-view";
import { SectionWrapperProps } from "./types";

import { normalizeSectionText } from "./utils";
import SectionHeader from "./Header";

export const SectionWrapper = ({
  center = true,
  contentCenter = true,
  duration = 0.1,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  headingClassName,
  headerComponent,
  ...props
}: SectionWrapperProps) => {
  const sectionHeaderProps = {
    contentCenter,
    duration,
    eyebrow,
    title,
    subtitle,
    headingClassName,
    headerComponent,
  };

  return (
    <section
      className={cn("py-12 md:py-10 overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col gap-8 md:gap-10 md:max-w-[110rem] px-6 md:px-10",
          { "mx-auto": center },
          containerClassName
        )}
      >
        <SectionHeader {...sectionHeaderProps} />
        {children}
      </div>
    </section>
  );
};
