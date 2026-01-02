"use client";

import { ProcessContent } from "./types";
import ProcessStepCard from "./ProcessStepCard";
import Link from "next/link";

export default function ProcessClient({
  eyebrow,
  heading,
  subheading,
  steps,
  button,
}: ProcessContent) {
  return (
    <section>
      <div className="md:max-w-440 px-6 md:px-10 mx-auto">
        <div className="w-full flex flex-col gap-8 md:gap-12 bg-yellow-100 pb-8 md:pb-20 pt-16 md:pt-20 px-6 md:px-20 mx-auto rounded-3xl relative">
          {/* Header */}
          <div className="text-center">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="font-freight font-medium text-yellow-900 text-3xl md:text-[2.5rem] mb-4">
              {heading}
            </h2>
            <p className="text-grey-500 text-base md:text-lg font-medium">
              {subheading}
            </p>
          </div>

          {/* Desktop: Horizontal Arrow Flow */}
          <div className="hidden md:flex md:gap-6 lg:gap-8 justify-center items-center">
            {steps.map((step, index) => (
              <ProcessStepCard key={index} step={step} index={index} />
            ))}
          </div>

          {/* Mobile: Vertical Arrow Flow */}
          <div className="md:hidden flex flex-col gap-6 max-w-md mx-auto">
            {steps.map((step, index) => (
              <ProcessStepCard key={index} step={step} index={index} isMobile />
            ))}
          </div>
          {button && (
            <div className="flex justify-center">
            <Link href={button.url || "/"}>
              <button className="bg-yellow-500 text-yellow-900 h-12 gap-1 rounded-lg text-xs leading-4 md:leading-4.5 md:text-sm font-extrabold p-3.5">
                {button.label}
              </button>
            </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
