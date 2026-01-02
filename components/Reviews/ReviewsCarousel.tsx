"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LastSlide, NormalizedReview } from "./types";
import Image from "next/image";
import { SiTrustpilot } from "react-icons/si";
import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn, getTrustpilotReviewLink } from "@/lib/utils";
import Link from "next/link";
import AnimateOnView from "../ui/animate-on-view";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

type CarouselProps = {
  reviews: NormalizedReview[];
  lastSlide: LastSlide;
};

function Stars({ rating }: { rating: number }) {
  const max = 5;
  const full = Math.max(0, Math.min(max, Math.round(rating)));
  return (
    <div className="flex gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className="bg-trustpilot-green h-[1.1875rem] w-[1.1875rem] flex items-center justify-center"
        >
          <SiTrustpilot className="text-white" size={14} />
        </div>
      ))}
    </div>
  );
}

export function ReviewsCarousel({ reviews, lastSlide }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);
  const [lastVisible, setLastVisible] = useState(false);

  const { isMobile } = useTailwindBreakpoint();

  reviews = isMobile ? reviews.slice(0, 4) : reviews;
  const lastSlideRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    if (!lastSlideRef.current) return;
    const el = lastSlideRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLastVisible(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.75,
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <>
      <div className="flex space-x-12 mt-8 md:mt-0 absolute md:top-[5rem] bottom-[3rem] md:bottom-[inherit] w-dvw">
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
          <CarouselContent className="mb-8 md:ml-[28rem] mr-[20%] md:mr-[13.2%] 3xl:mr-[25%]">
            {reviews.map((review, reviewIdx) => {
              const dateLabel = review.publishedDate
                ? dayjs(review.publishedDate).format("MMMM D, YYYY")
                : "";
              return (
                <AnimateOnView
                  key={review.id}
                  delay={reviewIdx > 2 ? 0 : reviewIdx * 0.15}
                  amount={0.1}
                >
                  <CarouselItem className="pl-4 basis-[inherit]">
                    <Link
                      href={getTrustpilotReviewLink(review.id) || "/"}
                      target="_blank"
                    >
                      <div className="rounded-xl bg-card shadow-xl p-5 md:p-6 min-w-[16rem] max-w-[16rem] md:min-w-[25.125rem] md:max-w-[25.125rem] h-[18rem] md:h-[19.75rem] flex flex-col">
                        <div className="flex items-center gap-3">
                          <div className="relative h-9 w-9 md:h-11 md:w-11 rounded-full overflow-hidden bg-trustpilot-avatar-pink text-trustpilot-black-2 flex items-center justify-center text-sm md:text-base font-semibold">
                            {review.imageUrl ? (
                              <Image
                                src={review.imageUrl}
                                className="object-cover"
                                fill
                                alt="trustpilot-avatar"
                                sizes="(max-width: 768px) 2.25rem, 2.25rem"
                              />
                            ) : (
                              review.initials
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-trustpilot-black text-sm md:text-base font-semibold">
                              {review.name}
                            </span>
                            <span className="text-xs md:text-sm text-trustpilot-black-3 font-medium">
                              {review.countryCode ?? ""} • {review.reviewCount}{" "}
                              reviews
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Stars rating={review.rating} />
                        </div>
                        {review.title && (
                          <div className="mt-3 text-sm md:text-base text-trustpilot-black font-bold truncate">
                            {review.title}
                          </div>
                        )}
                        <div className="flex flex-col flex-1">
                          {review.text && (
                            <p className="mt-4 text-sm md:text-base text-trustpilot-black whitespace-pre-line font-medium line-clamp-4">
                              {review.text}
                            </p>
                          )}
                          {dateLabel && (
                            <div className="mt-4">
                              <span className="font-medium rounded-md text-trustpilot-black px-2 py-1 text-xs bg-trustpilot-date-bg">
                                {dateLabel}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                </AnimateOnView>
              );
            })}

            {/* LAST SLIDE */}
            <CarouselItem key="last-slide" className="pl-4 basis-[inherit]">
              <div
                ref={lastSlideRef}
                className={cn(
                  "rounded-xl bg-background shadow-xl p-5 md:p-6 min-w-[16rem] max-w-[16rem] md:min-w-[25.125rem] md:max-w-[25.125rem] h-[18rem] md:h-[19.75rem] flex flex-col justify-between opacity-0 translate-y-2",
                  {
                    "opacity-100 translate-y-0 transition-opacity duration-700 ease-out":
                      lastVisible,
                  }
                )}
              >
                <div>
                  <h4 className="font-semibold md:text-2xl font-freight text-foreground">
                    {lastSlide.title}
                  </h4>
                  <p className="font-normal text-base text-muted-foreground mt-2 md:mt-6">
                    {lastSlide.description}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={lastSlide.secondaryBtn.url || "/"}
                    className="flex-1"
                  >
                    <button className="bg-primary text-foreground h-12 rounded-xl text-xs md:text-sm font-extrabold w-full">
                      {lastSlide.secondaryBtn.label}
                    </button>
                  </Link>
                  <Link
                    href={lastSlide.primaryBtn.url || "/"}
                    className="flex-1"
                  >
                    <button className="bg-foreground text-primary h-12 rounded-xl text-xs md:text-sm font-extrabold w-full">
                      {lastSlide.primaryBtn.label}
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center gap-2 absolute left-0 right-0 bottom-4 md:bottom-14">
        {Array.from({ length: snapCount }).map((_, idx) => (
          <button
            key={idx}
            className="h-11"
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={cn(
                "w-10 md:w-16 h-1 rounded-full bg-pagination-black",
                {
                  "opacity-20": currentIndex !== idx,
                }
              )}
            />
          </button>
        ))}
      </div>
    </>
  );
}
