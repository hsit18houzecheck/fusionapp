"use client";

import { cn, replacePlaceholders } from "@/lib/utils";
import { PostcodeInfoBoxProps } from "../types";
import { Check, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PostcodeInfoBox({
  postcode,
  surveyCount,
  surveyorCount,
  nextAvailableSlot,
  rating,
  mapPostcodeInfoBox,
  className,
  onClose,
}: PostcodeInfoBoxProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 md:translate-x-0  md:left-6 top-32.5 md:top-41.75 z-2 w-78.25 h-100.5 md:w-111 md:h-103.75",
        "rounded-lg bg-yellow-900/80 text-white-100 p-4 md:p-6 shadow-lg",
        "animate-in fade-in slide-in-from-top-4 duration-300",
        className
      )}
    >
      <span
        className="absolute right-7.5 top-5 w-2.5 h-2.5 text-yellow-500 cursor-pointer"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </span>
      {/* Main heading */}
      <h2 className="font-freight text-yellow-500 font-medium text-[1.75rem] md:text-[2rem] leading-8 md:leading-9 mb-3 mt-4 md:mt-6 lining-nums">
        {replacePlaceholders(mapPostcodeInfoBox.heading, { postcode, surveyCount })}
      </h2>

      {/* Subheading */}
      <p className="font-freight text-yellow-100 font-medium text-[1.125rem] md:text-[1.5rem] leading-6 italic mb-4 lining-nums">
        {replacePlaceholders(mapPostcodeInfoBox.subheading, { surveyorCount })}
      </p>

      {/* Description text */}
      <p className="text-[0.75rem] text-white-100 md:text-[0.75rem] font-medium leading-5.5 md:leading-5.5 mb-4 opacity-90">
        {mapPostcodeInfoBox.description}
      </p>

      {/* Info badges */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 rounded-[0.25rem] bg-yellow-800 w-fit p-1 text-yellow-500 font-semibold">
          <span className="text-[0.875rem] font-medium">
            {replacePlaceholders(mapPostcodeInfoBox.availabilityBadge, {
              nextAvailableSlot,
            })}
          </span>
          <Check className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-2 rounded-[0.25rem] bg-yellow-800 w-fit p-1 text-yellow-500 font-semibold">
          <span className="text-[0.875rem] font-medium">
            {replacePlaceholders(mapPostcodeInfoBox.ratingBadge, { rating })}
          </span>
          <Image
            src="/assets/icons/badge.svg"
            alt="Rating badge"
            width={14}
            height={19}
            className="w-3.5 h-4.75"
          />
        </div>
      </div>

      {/* CTA button */}
      <Link
        href={mapPostcodeInfoBox.ctaButton.url || "/"}
        className="block text-center w-full rounded-lg bg-yellow-500 text-yellow-900 font-semibold text-[0.875rem] p-3.5 hover:bg-yellow-500/90 transition-colors"
      >
        {mapPostcodeInfoBox.ctaButton.label}
      </Link>
    </div>
  );
}
