"use client";

import AnimateOnView from "../ui/animate-on-view";
import type { SecretSauceExplainedContent } from "./types";

export default function SecretSauceExplainedClient({
  features,
}: SecretSauceExplainedContent) {
  return (
    <section className="bg-yellow-100 w-full flex flex-col items-center px-6 md:px-10 pb-6 md:py-5">
      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto md:max-w-[110rem]">
        {features.map((feature, index) => (
          <AnimateOnView key={index} delay={index * 0.2} direction="right">
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-6 py-6 px-4 md:py-7 md:px-6 md:w-103 md:h-70.25"
              role="article"
              aria-labelledby={`feature-heading-${index}`}
            >
              <h3
                id={`feature-heading-${index}`}
                className="font-freight font-medium text-yellow-900 text-[2.25rem] md:text-[2.5rem] leading-tight md:leading-11 whitespace-break-spaces"
              >
                {feature.title}
              </h3>
              <p className="text-grey-500 text-base md:text-lg leading-7">
                {feature.description}
              </p>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
