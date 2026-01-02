import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import AnimateOnView from "../ui/animate-on-view";
import type { SurveyorHeroProps } from "./types";
import { cn } from "@/lib/utils";

export default function SurveyorHero({
  eyebrow,
  title,
  subtitle,
  image,
  ricsLogo,
  button,
}: SurveyorHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[400px] md:min-h-[500px] bg-yellow-100 overflow-hidden",
        "flex items-center justify-center",
        "px-6 pb-0"
      )}
    >
      {/* Content Container */}
      <div className="container mx-auto pt-12 md:pt-20 flex-1 flex flex-col">
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 flex flex-col space-y-9">
          {/* Eyebrow */}
          <AnimateOnView>
            <p className="eyebrow-lg">{eyebrow}</p>
          </AnimateOnView>

          {/* Title */}
          <AnimateOnView delay={1 * 0.15}>
            <h1 className="text-4xl md:text-[3.5rem] font-freight font-medium text-yellow-900">
              {title}
            </h1>
          </AnimateOnView>

          {/* Subtitle */}
          <AnimateOnView delay={2 * 0.15}>
            <p className="text-base md:text-lg text-grey-500 max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
          </AnimateOnView>

          {/* CTA Button */}
          <AnimateOnView delay={3 * 0.15}>
            <div className="flex justify-center">
              <Button
                style={{
                  backgroundColor: button.backgroundColor,
                  color: button.textColor,
                }}
                rightIcon={button.icon}
                iconClassName="w-4 h-4"
              >
                <Link href={button.url || "/"}>{button.label}</Link>
              </Button>
            </div>
          </AnimateOnView>

          {/* RICS Logo */}
          <AnimateOnView delay={4 * 0.15}>
            <Image
              src={ricsLogo}
              alt="RICS Regulated by RICS"
              width={120}
              height={60}
              className="mx-auto"
            />
          </AnimateOnView>
        </div>

        {/* Dashboard Image */}
        <AnimateOnView delay={5 * 0.15}>
          <div className="mt-auto">
            <div className="relative w-full max-w-8xl mx-auto flex flex-col items-center">
              <Image
                src={image}
                alt="Surveyor Dashboard"
                width={1440}
                height={440}
                // className="w-full h-auto rounded-t-2xl"
                priority
              />
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
