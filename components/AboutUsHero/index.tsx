import Image from "next/image";
import AnimateOnView from "../ui/animate-on-view";
import type { AboutUsHeroProps } from "./types";
import { cn } from "@/lib/utils";

export default function AboutUsHero({
  eyebrow,
  title,
  subtitle,
  logoList,
}: AboutUsHeroProps) {
  return (
    <>
      <section
        className={cn(
          "relative w-full overflow-hidden",
          "flex items-center justify-center",
          "px-6 pb-0"
        )}
      >
        {/* Content Container */}
        <div className="container mx-auto pt-12 md:pt-20 flex-1 flex flex-col">
          {/* Text Content */}
          <div className="text-center max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-10">
            {/* Eyebrow */}
            <AnimateOnView>
              <p className="eyebrow-lg">{eyebrow}</p>
            </AnimateOnView>

            {/* Title */}
            <AnimateOnView delay={1 * 0.15}>
              <h1 className="text-4xl md:text-[3.5rem] leading-tight font-freight font-medium text-yellow-900 proportional-nums lining-nums">
                {title}
              </h1>
            </AnimateOnView>

            {/* Subtitle */}
            <AnimateOnView delay={2 * 0.15}>
              <p className="text-base md:text-lg text-grey-500 max-w-5xl mx-auto font-medium">
                {subtitle}
              </p>
            </AnimateOnView>

            <div className="flex items-center justify-center gap-10">
              {/* Logos */}
              {(logoList || []).map((logo, index) => (
                <AnimateOnView key={index} delay={4 * 0.15}>
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={200}
                    height={60}
                    className="h-9.25 w-auto object-contain"
                  />
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
