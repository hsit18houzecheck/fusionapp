"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SurveyTypesCarouselProps } from "./types";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimateOnView from "../ui/animate-on-view";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";
import Image from "next/image";

export function SurveyTypesCarousel({ surveyTypes }: SurveyTypesCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);

  const { isMobile } = useTailwindBreakpoint();

  surveyTypes = isMobile ? surveyTypes.slice(0, 4) : surveyTypes;
  const opts = {
    align: "start" as const,
    loop: false,
    slidesToScroll: isMobile ? 1 : 2,
  };

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <>
      <div className="flex space-x-12 mt-8 md:mt-0 absolute md:top-[2.5rem] bottom-[4.5rem] md:bottom-[inherit] w-dvw">
        <Carousel
          setApi={setApi}
          opts={opts}
          className="w-dvw [&>div]:overflow-visible animate-bounce-x"
          // plugins={[
          //   Autoplay({
          //     delay: 5000,
          //   }),
          // ]}
        >
          <CarouselContent className="mb-8 ml-[0.7rem] md:ml-[34rem] mr-[20%] md:mr-[6%] 3xl:mr-[25%]">
            {surveyTypes.map((surveyType, reviewIdx) => {
              return (
                <AnimateOnView
                  key={reviewIdx}
                  delay={reviewIdx > 2 ? 0 : reviewIdx * 0.15}
                  amount={0.1}
                >
                  <CarouselItem className="pl-4 basis-[inherit]">
                    <div className="bg-background rounded-2xl p-6 h-[27.6875rem] w-[21rem] md:w-[25.125rem] flex flex-col gap-10 md:gap-12">
                      <div className="relative w-10 h-10 shrink-0">
                        <Image
                          src="/assets/images/asterisk-yellow.svg"
                          alt="Asterisk"
                          width={48}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                      <p className="font-freight text-foreground font-semibold text-2xl md:text-[2rem] leading-[2rem]">
                        {surveyType.question}
                      </p>

                      <div>
                        <p className="text-foreground text-sm md:text-base whitespace-break-spaces mb-8 leading-6">
                          {surveyType.explaination}
                        </p>
                        {!!surveyType.disclaimer && (
                          <div className="text-muted-foreground text-xs font-medium">
                            <p>{surveyType.disclaimer}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                </AnimateOnView>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center gap-2 absolute left-0 right-0 bottom-12 md:bottom-24">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <button
            key={idx}
            className="h-11"
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={cn("w-10 md:w-16 h-1 rounded-full bg-primary", {
                "opacity-20": currentIndex !== idx,
              })}
            />
          </button>
        ))}
      </div>
    </>
  );
}
