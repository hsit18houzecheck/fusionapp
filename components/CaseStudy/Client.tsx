"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { cn } from "@/lib/utils";
import AnimateOnView from "@/components/ui/animate-on-view";
import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudyClientProps } from "./types";
import { SectionWrapper } from "../SectionWrapper";

export default function CaseStudyClient({
  content,
  caseStudies,
}: CaseStudyClientProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);

    api.on("select", onSelect);

    // Cleanup on unmount
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
  };

  return (
    <SectionWrapper
      className="bg-white !py-0"
      containerClassName="!px-0 md:px-10"
      eyebrow={content.eyebrow}
      title={content.title}
      subtitle={content.subtitle}
    >
      {/* Carousel Container with Responsive Layout */}
      <AnimateOnView delay={0.45}>
        <div className="relative pb-16">
          {/* Desktop: partial next slide visible, Mobile: full card */}
          <div className="w-full">
            <Carousel
              setApi={setApi}
              opts={{
                loop: false,
                align: "start",
              }}
              className="w-full md:max-w-450 mx-auto md:pl-11"
              aria-label="Case studies carousel"
              aria-roledescription="carousel"
            >
              <CarouselContent aria-live="polite" className="mb-8">
                {caseStudies.map((caseStudy, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[95%] pl-3! md:pl-4!"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${caseStudies.length}: ${caseStudy.title}`}
                  >
                    <CaseStudyCard caseStudy={caseStudy} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={goToPrevious}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-grey-100 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Previous case study"
            >
              <MdArrowBack className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button
              onClick={goToNext}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center transition-colors"
              aria-label="Next case study"
            >
              <MdArrowForward className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 absolute left-0 right-0 bottom-4">
            {Array.from({ length: snapCount }).map((_, idx) => (
              <button
                key={idx}
                className="h-11"
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={cn("w-10 md:w-16 h-1 rounded-full bg-stone-900", {
                    "opacity-20": currentIndex !== idx,
                  })}
                />
              </button>
            ))}
          </div>
        </div>
      </AnimateOnView>
    </SectionWrapper>
  );
}
