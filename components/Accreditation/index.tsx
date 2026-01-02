import Image from "next/image";
import type { AccreditationProps } from "./types";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const DEFAULT_LOGOS = [
  { url: "/assets/images/rics-logo.webp", alt: "RICS logo" },
];

export default function Accreditation({
  backgroundColor = "#fff",
  logos = DEFAULT_LOGOS,
  logoHeight = 60,
  logoWidth = 200,
  logoClassName,
}: AccreditationProps) {
  // If there are 4 or fewer logos, show them statically
  const useMarquee = logos.length > 4;

  return (
    <section
      className="w-full bg-white py-8 md:py-12"
      style={{ backgroundColor }}
    >
      {useMarquee ? (
        <Marquee
          pauseOnHover
          className="[--duration:30s] [--gap:3rem]"
          repeat={2}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logoWidth}
                height={logoHeight}
                className={cn(
                  "h-12 md:h-16 w-auto object-contain",
                  logoClassName
                )}
                priority={false}
              />
            </div>
          ))}
        </Marquee>
      ) : (
        <div className="container mx-auto px-6 flex items-center justify-evenly md:gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.url}
                alt={logo.alt}
                width={logoWidth}
                height={logoHeight}
                className={cn(
                  "h-12 md:h-16 w-auto object-contain",
                  logoClassName
                )}
                priority={false}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
