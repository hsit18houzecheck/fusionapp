import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimateOnView from "../ui/animate-on-view";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const NotificationBadge = dynamic(() => import("./NotificationBadge"));

type HeroClientProps = {
  title: string;
  subtitle: string;
  button: {
    label: string;
    url: string;
  };
  ricsLogo: string;
};

export default function HeroClient({
  title,
  subtitle,
  button,
  ricsLogo,
}: HeroClientProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden",
        "flex items-center justify-center",
        "px-6 pb-16 pt-8 md:py-20"
      )}
    >
      {/* Left Building - Flat */}
      {/* @TODO: Commented for demo */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 md:translate-x-0 w-[120px] sm:w-[200px] md:w-[250px] h-auto z-0">
        <AnimateOnView>
          <Image
            src="/assets/images/left.png"
            alt="Flat building illustration"
            width={250}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </AnimateOnView>
      </div> */}

      {/* Right Building - House */}
      {/* @TODO: Commented for demo */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2/4 md:translate-x-0 w-[120px] sm:w-[200px] md:w-[250px] h-auto z-0">
        <AnimateOnView>
          <Image
            src="/assets/images/right.png"
            alt="House building illustration"
            width={300}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </AnimateOnView>
      </div> */}

      {/* Main Content */}
      <div className="relative z-30 w-full mx-auto">
        <div className="flex flex-col items-center text-center gap-6 md:gap-10">
          {/* Notification Badge */}
          <AnimateOnView>
            <NotificationBadge />
          </AnimateOnView>

          {/* Main Heading */}
          <AnimateOnView initialOpacity={0.01} delay={1 * 0.15}>
            <h1
              className={cn(
                "font-freight font-medium text-yellow-900 proportional-nums lining-nums",
                "text-4xl md:text-[3.5rem] leading-tight",
                "px-4 md:px-0"
              )}
            >
              {title || ""}
            </h1>
          </AnimateOnView>

          {/* Subtitle */}
          <AnimateOnView delay={2 * 0.15}>
            <p
              className={cn(
                "text-black/75 font-medium text-base md:text-lg",
                "px-4 md:px-0"
              )}
            >
              {subtitle || ""}
            </p>
          </AnimateOnView>

          {/* CTA Button */}
          <AnimateOnView delay={3 * 0.15}>
            <div className="pt-0">
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-lg p-3.5 h-auto text-xs md:text-sm font-semibold text-yellow-900"
              >
                <Link href={button.url || "/"}>
                  {button.label}{" "}
                  <ArrowUpRight className="size-5" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </AnimateOnView>

          {/* RICS Logo */}
          <AnimateOnView delay={4 * 0.15}>
            <div className="pt-0">
              <Image
                src={ricsLogo}
                alt="RICS Regulated Firm"
                width={120}
                height={60}
                // className="h-auto w-[100px] md:w-[120px]"
                priority
              />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
