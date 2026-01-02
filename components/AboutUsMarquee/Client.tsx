"use client";

import { cn } from "@/lib/utils";
import type { MarqueeCard } from "./types";
import { Marquee } from "../ui/marquee";
import { useState } from "react";
import { VideoDialog } from "../VideoCard/VideoDialog";
import { Button } from "../Button";
import Image from "next/image";
interface MarqueeCardComponentProps {
  card: MarqueeCard;
  setVideoFile: (file: string | undefined) => void;
}

function MarqueeCardComponent({
  card,
  setVideoFile,
}: MarqueeCardComponentProps) {
  const isDark = card.backgroundColor === "#1F1801";

  return (
    <div
      className="relative shrink-0 w-[343px] h-[280px] md:w-[742px] md:h-[355px] rounded-2xl overflow-hidden shadow-[0px_82px_60px_0px_rgba(128,93,5,0.09),0px_24.721px_18.088px_0px_rgba(128,93,5,0.06),0px_10.268px_7.513px_0px_rgba(128,93,5,0.05),0px_3.714px_2.717px_0px_rgba(128,93,5,0.03)]"
      style={
        card.backgroundColor ? { backgroundColor: card.backgroundColor } : {}
      }
    >
      {card.backgroundImage && (
        <div className="absolute inset-0 top[2px] right[2px]">
          <Image
            src={card.backgroundImage}
            alt={card.eyebrow || "card-image"}
            fill
            className="object-right md:object-cover"
          />
        </div>
      )}
      {/* Background Image if exists */}
      {/* {card.backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={card.backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )} */}

      {/* Decorative house shape */}
      {/* {!card.backgroundImage && (
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] pointer-events-none">
          <Image
            src="/assets/illustrations/house-shape-survey.svg"
            alt="Decorative house outline"
            width={541}
            height={404}
            className="h-full w-full object-contain object-right-top"
            priority
          />
        </div>
      )} */}
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-18 py-8 md:py-20 gap-6 md:gap-10">
        {/* Eyebrow */}
        {card.eyebrow && (
          <p
            className={cn(
              "text-[0.625rem] font-bold tracking-[0.25rem] uppercase leading-3",
              isDark ? "text-peach-500" : "text-peach-500"
            )}
          >
            {card.eyebrow}
          </p>
        )}

        {/* Text Container */}
        {!card.videoFile && (
          <div className="flex flex-col gap-4 md:gap-6 max-w-[630px]">
            {/* Title */}
            <h3
              className={cn(
                "font-freight font-medium text-2xl md:text-[2.5rem] leading-8 md:leading-11",
                isDark ? "text-yellow-500" : "text-yellow-900"
              )}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className={cn(
                "text-sm md:text-lg font-medium leading-6 md:leading-7",
                isDark ? "text-white-100" : "text-grey-500"
              )}
            >
              {card.description}
            </p>
          </div>
        )}

        {/* Button (if applicable) */}
        {card.videoFile && (
          <>
            <Button
              variant="default"
              className="w-fit self-center justify-self-center"
              leftIcon="MdPlayCircleOutline"
              iconClassName="size-5"
              onClick={() => {
                setVideoFile(card.videoFile);
              }}
            >
              Watch video
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

interface AboutUsMarqueeClientProps {
  row1Cards: MarqueeCard[];
  row2Cards: MarqueeCard[];
}

export default function AboutUsMarqueeClient({
  row1Cards,
  row2Cards,
}: AboutUsMarqueeClientProps) {
  const [videoFile, setVideoFile] = useState<string | undefined>();

  return (
    <section className="w-full pt-12 md:pt-10 overflow-hidden">
      <div className="flex flex-col bg-yellow-100 h-full">
        {/* Row 1 - Scrolling Left */}

        <Marquee
          pauseOnHover
          pauseOnClick
          className="[--duration:20s] pb-10"
          rowClassName="gap-x-5 pr-2.5 md:gap-x-10 md:pr-5"
        >
          {row1Cards.map((card, index) => (
            <MarqueeCardComponent
              key={index}
              card={card}
              setVideoFile={setVideoFile}
            />
          ))}
        </Marquee>

        {/* Row 2 - Scrolling Right */}
        <Marquee
          reverse
          pauseOnHover
          pauseOnClick
          className="[--duration:20s] pb-10"
          rowClassName="gap-x-5 pr-2.5 md:gap-x-10 md:pr-5"
        >
          {row2Cards.map((card, index) => (
            <MarqueeCardComponent
              key={index}
              card={card}
              setVideoFile={setVideoFile}
            />
          ))}
        </Marquee>
        <VideoDialog
          animationStyle="from-center"
          videoSrc={videoFile}
          isVideoOpen={!!videoFile}
          setIsVideoOpen={() => setVideoFile(undefined)}
        />
      </div>
    </section>
  );
}
