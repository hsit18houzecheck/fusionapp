import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import MythCard from "./MythCard";
import type { MythBustingProps } from "./types";
import { CAROUSEL_CONFIG } from "./constants";

type MythCarouselProps = {
  myths: MythBustingProps["myths"];
};

export default function MythCarousel({ myths }: MythCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

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

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: CAROUSEL_CONFIG.ALIGN,
          loop: CAROUSEL_CONFIG.LOOP,
        }}
        className="w-dvw animate-bounce-x"
        // plugins={[
        //   Autoplay({
        //     delay: CAROUSEL_CONFIG.AUTOPLAY_DELAY,
        //   }),
        // ]}
      >
        <CarouselContent
          className="mb-8 ml-4 gap-x-5"
          containerClassName="overflow-visible"
        >
          {myths.map((myth, index) => (
            <CarouselItem
              key={index}
              className="flex justify-start flex-col gap-y-7 md:gap-y-15 min-w-auto w-[350px] md:w-[375px] shrink grow mx-4 basis-[inherit] mt-4"
            >
              <MythCard myth={myth} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Stepper */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <button
            key={idx}
            className="h-11"
            onClick={() => goTo(idx)}
            aria-label={`Go to myth ${idx + 1}`}
          >
            <div
              className={cn("w-15 h-0.5 rounded-full bg-yellow-500", {
                "opacity-20": currentIndex !== idx,
              })}
            />
          </button>
        ))}
      </div>
    </>
  );
}
