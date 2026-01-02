import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProcessStep } from "./types";
import { DESKTOP_SHAPES, MOBILE_SHAPES } from "./constants";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  isMobile?: boolean;
}

export default function ProcessStepCard({ step, index, isMobile = false }: ProcessStepCardProps) {
  const backgroundImage = isMobile ? MOBILE_SHAPES[index] : DESKTOP_SHAPES[index];
  
  const containerClasses = cn("relative", {
    "w-full max-w-54 min-h-[344px] mx-auto": isMobile,
    "flex-1 max-w-md min-h-50": !isMobile,
  });

  const contentClasses = cn("relative z-10 flex flex-col", {
    "text-white py-8 px-5 justify-between h-[300px]": isMobile,
    "p-6 md:py-8 lg:py-10 justify-center min-h-50": !isMobile,
    "pt-20! pb-5!": isMobile && index !== 0,
    "md:pl-15! md:pr-6!": !isMobile && index !== 0,
  });

  const titleClasses = cn("font-medium text-yellow-100 md:mb-6 lg:mb-10", {
    "text-base": isMobile,
    "text-sm md:text-base lg:text-lg": !isMobile,
  });

  const descriptionClasses = cn("text-white leading-relaxed", {
    "text-sm": isMobile,
    "text-xs md:text-sm lg:text-base": !isMobile,
  });

  return (
    <div className={containerClasses}>
      {/* SVG Background Shape */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className={contentClasses}>
        <h3 className={titleClasses}>{step.title}</h3>
        <p className={descriptionClasses}>{step.description}</p>
      </div>
    </div>
  );
}
