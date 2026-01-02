"use client";

import Image from "next/image";
import { VideoDialog } from "./VideoDialog";
import { useState } from "react";
import { VideoCardContent } from "./types";
import { Button } from "../Button";
import { SectionWrapper } from "../SectionWrapper";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

export default function VideoCard({
  eyebrow,
  title,
  subtitle,
  video,
  backgroundImage,
  mobileBackgroundImage,
  allowGradient = true,
}: VideoCardContent & { allowGradient?: boolean }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { isMobile } = useTailwindBreakpoint();
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={
            isMobile
              ? mobileBackgroundImage || backgroundImage || ""
              : backgroundImage || ""
          }
          alt={title || "background-image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 50vw"
        />
        {/* Gradient Overlay - 40% linear #000A21 */}
        <div
          className="absolute inset-0"
          style={
            allowGradient
              ? {
                  background:
                    "linear-gradient(180deg, rgba(0, 10, 33, 0.4) 0%, rgba(0, 10, 33, 0.4) 100%)",
                }
              : {}
          }
        />
      </div>

      {/* Content Overlay */}
      <SectionWrapper
        className="relative h-full flex flex-col justify-center p-6 lg:p-20 text-white-100 gap-6"
        containerClassName="!px-0"
        contentCenter={false}
        center={false}
        eyebrow={
          eyebrow
            ? {
                text: eyebrow,
                className: "mb-2 md:mb-2",
              }
            : undefined
        }
        title={
          title
            ? {
                text: title,
                className: "text-white-100",
              }
            : undefined
        }
        subtitle={
          subtitle
            ? {
                text: subtitle,
                className: "text-white-100",
              }
            : undefined
        }
      >
        <div>
          {/* Button */}
          {video?.button && (
            <Button
              variant={video.button?.variant}
              leftIcon={video.button?.leftIcon || video.icon}
              rightIcon={video.button?.rightIcon}
              iconClassName="size-5"
              onClick={() => {
                if (video.videoFile) {
                  setIsVideoOpen(true);
                } else if (video.url) {
                  window.open(video.url, "_blank");
                }
              }}
            >
              {video.button?.label || video.title}
            </Button>
          )}

          {video?.videoFile && (
            <VideoDialog
              animationStyle="from-center"
              videoSrc={video.videoFile}
              isVideoOpen={isVideoOpen}
              setIsVideoOpen={setIsVideoOpen}
            />
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
