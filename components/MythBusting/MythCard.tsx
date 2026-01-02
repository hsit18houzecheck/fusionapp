"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import type { MythCardProps } from "./types";
import { CARD_ROTATIONS, TEXT_GENERATE_DURATION } from "./constants";

export default function MythCard({ myth, index }: MythCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const rotation = CARD_ROTATIONS[index % CARD_ROTATIONS.length];

  return (
    <div
      className={cn(
        "md:relative h-[23.4375rem] w-[16.25rem] md:w-[25.125rem] md:h-[25.125rem] mx-auto",
        rotation
      )}
    >
      <div className="relative w-full h-full bg-yellow-100 rounded-2xl p-4 md:p-6 flex flex-col shadow-xl">
        {/* Asterisk icon */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0 mb-6">
          <Image
            src="/assets/images/asterisk-yellow.svg"
            alt="Asterisk"
            width={48}
            height={48}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-between space-y-10 h-full">
          {/* Myth text */}
          <div className="space-y-4">
            <p className="text-2xl md:text-[2rem] font-freight font-medium text-yellow-900 leading-tight">
              {myth.myth}
            </p>

            {/* Answer text with animation */}
            {isRevealed && (
              <TextGenerateEffect
                words={myth.answer}
                className="text-sm! md:text-base! text-grey-500! font-normal"
                duration={TEXT_GENERATE_DURATION}
              />
            )}
          </div>

          {/* Action button */}
          {!isRevealed && (
            <div className="mt-auto">
              <button
                onClick={() => setIsRevealed(true)}
                className="text-xs text-grey-500 font-bold hover:text-grey-700 transition-colors"
              >
                {myth.actionBtn.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
