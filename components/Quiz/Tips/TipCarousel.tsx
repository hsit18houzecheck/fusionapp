import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { TipsCarouselProps } from "../types";
import AnimateOnView from "@/components/ui/animate-on-view";

const TipsCarousel = ({ icon, tips }: TipsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const goTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div>
      <AnimateOnView delay={0.2}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-dvw md:w-full animate-bounce-x"
          // plugins={[
          //   Autoplay({
          //     delay: 5000,
          //   }),
          // ]}
        >
          <CarouselContent className="ml-[3rem] md:ml-[80rem] 2xl:mr-[25%]">
            {tips.map((tip, index) => {
              return (
                <CarouselItem key={index} className="pl-4 basis-[inherit]">
                  <div className="rounded-xl bg-background shadow-xl p-4 md:p-6 min-w-[16.25rem] max-w-[16.25rem] md:min-w-[25.125rem] md:max-w-[25.125rem] h-[18rem] md:h-[19.75rem] flex flex-col space-y-6 md:space-y-8">
                    <img
                      height={40}
                      width={33}
                      alt="Houzecheck Logo"
                      src={icon}
                    />
                    <h3 className="font-freight font-medium text-foreground text-2xl md:text-[2rem] md:leading-[2rem]">
                      {tip.title}
                    </h3>
                    <p className="text-foreground text-sm md:text-base">
                      {tip.description}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </AnimateOnView>

      <AnimateOnView
        delay={0.3}
        className="flex justify-center gap-2 mt-[1.875rem]"
      >
        {Array.from({ length: tips.length }).map((_, idx) => (
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
      </AnimateOnView>
    </div>
  );
};

export default TipsCarousel;
