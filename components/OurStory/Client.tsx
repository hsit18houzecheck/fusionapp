"use client";

import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { OurStoryContent } from "./types";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BaseCard } from "../Service/BaseCard";
import { SectionWrapper } from "../SectionWrapper";

type Props = OurStoryContent;

export default function OurStoryClient({ eyebrow, title, cards }: Props) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snapCount, setSnapCount] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setSnapCount(api.scrollSnapList().length);

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <SectionWrapper
      className="bg-yellow-100 py-12 md:py-20 relative"
      eyebrow={eyebrow}
      title={title}
    >
      {cards && cards.length > 0 && (
        <div className="w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full animate-bounce-x"
          >
            <CarouselContent className="ml-0 md:-ml-6">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-0 md:pl-6 basis-full md:basis-auto"
                >
                  <BaseCard
                    image={card.image}
                    className="w-[343px] md:w-[393px] h-[520px] md:h-[767px]"
                  >
                    {/* Content Frame */}
                    <div className="absolute inset-x-4 bottom-4 md:bottom-6">
                      <div className="flex flex-col gap-7 min-h-53.5 bg-yellow-900/65 backdrop-blur-md border border-yellow-100/10 rounded-2xl p-5 md:p-6 text-yellow-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                        <h3 className="font-freight font-medium text-yellow-500 text-2xl md:text-[2rem] leading-7 md:leading-9">
                          {card.title}
                        </h3>
                        <p className="text-white text-xs leading-5 font-medium">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </BaseCard>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          {snapCount > 1 && (
            <div className="flex justify-center gap-2 mt-4 mb-0 md:mt-20 md:mb-10">
              {Array.from({ length: snapCount }).map((_, idx) => (
                <button
                  key={idx}
                  className="h-11"
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={cn(
                      "w-10 md:w-18 h-0.75 rounded-md bg-yellow-900",
                      {
                        "opacity-20": currentIndex !== idx,
                      }
                    )}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </SectionWrapper>
  );
}
