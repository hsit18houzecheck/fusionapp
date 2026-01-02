"use client";

import Link from "next/link";
import type { StartReferringInstantlyContent } from "./types";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn, handleCTAClick } from "@/lib/utils";
import { Card } from "./Card";
import { StepCardRotations, successCardRotations } from "./constants";
import AnimateOnView from "../ui/animate-on-view";
import { SectionWrapper } from "../SectionWrapper";
import SectionHeader from "../SectionWrapper/Header";
import { Button } from "../Button";

type StartReferringInstantlyClientProps = {
  heading: string;
  title: string;
  subtitle: string;
  ctaButton: StartReferringInstantlyContent["ctaButton"];
  steps: StartReferringInstantlyContent["steps"];
  successStories: StartReferringInstantlyContent["successStories"];
  showSuccessStory: boolean;
};

export default function StartReferringInstantlyClient({
  heading,
  title,
  subtitle,
  ctaButton,
  steps,
  successStories,
  showSuccessStory,
}: StartReferringInstantlyClientProps) {
  return (
    <SectionWrapper
      className="py-12 md:py-20"
      containerClassName="overflow-visible"
    >
      <div
        className={`z-1 ${showSuccessStory ? "h-[1211px]" : "h-[830px]"} ${showSuccessStory ? "md:h-[1250px]" : "md:h-[870px]"} bg-yellow-500 rounded-2xl w-full flex flex-col items-center px-6 py-12 md:px-0 md:py-20 relative overflow-visible`}
      >
        <SectionHeader eyebrow={heading} title={title} subtitle={subtitle} />
        {/* Desktop Cards */}
        <div className="flex gap-2 items-center justify-center w-full mt-8 md:mt-10">
          <Button
            asChild
            className="h-11 md:h-12 rounded-[10px] bg-yellow-900 text-yellow-500 hover:bg-yellow-900/90 p-3 md:p-3.5 gap-1"
            onClick={(e) => handleCTAClick(e, ctaButton)}
          >
            <Link href={ctaButton.url || ctaButton.href || "/"}>
              <span className="font-semibold text-xs md:text-sm leading-[16px] md:leading-[18px] whitespace-nowrap">
                {ctaButton.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="size-3"
              >
                <path
                  d="M1.45104 11.6594L0 10.2083L8.16667 2.04167H1.11771V0H11.6594V10.5417H9.61771V3.49271L1.45104 11.6594Z"
                  fill="#F7DE8C"
                />
              </svg>
            </Link>
          </Button>
        </div>
        <div
          className={cn(
            "hidden md:flex w-full z-10 absolute top-[30%] py-6 px-14 md:p-0 gap-x-8 md:gap-x-8 md:justify-center overflow-y-hidden overflow-x-auto md:overflow-visible",
            {
              "md:top-[33%]": showSuccessStory,
              "md:top-[45%]": !showSuccessStory,
            }
          )}
        >
          {steps.map((step, index) => {
            return (
              <AnimateOnView
                key={index}
                className=""
                delay={0.2}
                direction="up"
              >
                <div
                  className="flex justify-start flex-col gap-y-9 md:gap-y-15"
                  key={index}
                >
                  <Card
                    key={index}
                    step={step}
                    story={successStories[index]}
                    rotation={StepCardRotations[index] || ""}
                    successRotation={successCardRotations[index] || ""}
                    showSuccessStory={showSuccessStory}
                  />
                </div>
              </AnimateOnView>
            );
          })}
        </div>
        {/* Mobile Cards Carousel */}
        <div
          className={`md:hidden w-full ${showSuccessStory ? "h-[920px] top-[23%]" : "h-[550px] top-[32%]"} z-10 absolute md:top-[32%] flex gap-x-8 md:gap-x-8 md:justify-center overflow-visible`}
        >
          <StepCardsCarousel
            steps={steps}
            successStories={successStories}
            showSuccessStory={showSuccessStory}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

type StepCardsCarouselProps = {
  steps: StartReferringInstantlyContent["steps"];
  successStories: StartReferringInstantlyContent["successStories"];
  showSuccessStory: boolean;
};

function StepCardsCarousel({
  steps,
  successStories,
  showSuccessStory,
}: StepCardsCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);

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
          align: "start",
          loop: false,
        }}
        className="w-dvw [&>div]:overflow-visible animate-bounce-x"
        // plugins={[
        //   Autoplay({
        //     delay: 5000,
        //   }),
        // ]}
      >
        <CarouselContent className="mb-8 ml-[1.5rem]">
          {steps.map((step, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex justify-start flex-col gap-y-12 md:gap-y-15 min-w-auto w-[350px] md:w-[375px] shrink grow mx-2 md:mx-4 basis-[inherit] mt-6"
              >
                <Card
                  key={index}
                  step={step}
                  story={successStories[index]}
                  rotation={StepCardRotations[index] || ""}
                  successRotation={successCardRotations[index] || ""}
                  showSuccessStory={showSuccessStory}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 absolute left-0 right-0 bottom-4 md:bottom-14 z-20">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <button
            key={idx}
            className="h-11"
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={cn("h-[3px] rounded-[8px] w-[72px] bg-yellow-900", {
                "opacity-20": currentIndex !== idx,
              })}
            />
          </button>
        ))}
      </div>
    </>
  );
}
