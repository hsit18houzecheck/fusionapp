"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SurveyCompletedContent } from "./types";
import dynamic from "next/dynamic";
import AnimateOnView from "../ui/animate-on-view";
import { useEffect, useRef, useState } from "react";

import MapLoadingOverlay from "./SurveyMap/MapLoadingOverlay";

const SurveyMap = dynamic(
  () => import("@/components/SurveyCompleted/SurveyMap"),
  { ssr: false }
);

export default function SurveyCompletedClient({
  title,
  count,
  description,
  mapHeading,
  mapSearchPlaceholder,
  mapLayerLabels,
  mapPostcodeInfoBox,
  mapNotificationBanner,
  mapPopup,
}: SurveyCompletedContent) {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-10 m-0">
      <AnimateOnView
        className={cn(
          "md:max-w-440 px-6 md:px-10 mx-auto",
          "flex flex-col lg:flex-row",
          "gap-6 lg:gap-8"
        )}
      >
        <div
          ref={mapRef}
          className={cn(
            "relative w-full",
            "rounded-2xl lg:flex-1 h-177 md:h-185 lg:h-185 min-h-80 shrink-0"
          )}
        >
          <MapLoadingOverlay />
          {shouldLoadMap && (
            <SurveyMap
              role="img"
              aria-label="Map"
              mapHeading={mapHeading}
              mapSearchPlaceholder={mapSearchPlaceholder}
              mapLayerLabels={mapLayerLabels}
              mapPostcodeInfoBox={mapPostcodeInfoBox}
              mapNotificationBanner={mapNotificationBanner}
              mapPopup={mapPopup}
              className="w-full h-full relative z-20"
            />
          )}
        </div>

        <article
          role="region"
          aria-label="Surveys completed ticker"
          data-slot="survey-completed"
          className={cn(
            "relative w-full h-86.25 lg:h-185 lg:w-130.5 overflow-hidden",
            "flex flex-col items-center justify-center text-center",
            "gap-8 md:gap-10 lg:gap-12 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20",
            "rounded-2xl bg-yellow-900"
          )}
        >
          {/* Decorative house outline */}
          <div className="pointer-events-none absolute h-69 w-92.5 top-4 -left-5.75 md:-left-12 md:top-9.25 md:h-101 md:w-143.25 select-none md:block">
            <Image
              src="/assets/illustrations/house-shape-survey.svg"
              alt="Decorative house outline"
              fill
              sizes="(max-width: 768px) 17.25rem, 23.125rem"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Title */}
          <p
            className={cn(
              "font-freight font-medium text-white-100",
              "text-[1.5rem] leading-7 md:text-[2rem] md:leading-9 lg:text-[2.5rem] lg:leading-11"
            )}
          >
            {title}
          </p>

          {/* Big count */}
          <p
            className={cn(
              "font-freight font-black text-yellow-500",
              "text-[4rem] md:text-[6rem] lg:text-[7.75rem] leading-12 tracking-[-0.0775rem] lining-nums"
            )}
          >
            {Number.isFinite(count) ? count.toLocaleString("en-GB") : "0"}
          </p>

          {/* Bottom line */}
          <p
            className={cn(
              "font-freight font-medium text-white-100",
              "text-[1.25rem] leading-6 md:text-[1.75rem] md:leading-8 lg:text-[2.5rem] lg:leading-11"
            )}
          >
            {description}
          </p>
        </article>
      </AnimateOnView>
    </section>
  );
}
