import Image from "next/image";
import type { FeatureCardProps } from "./types";
import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  subtitle,
  backgroundImage,
  contentPosition,
  classNames,
}: FeatureCardProps) {
  const getContentPositionClass = () => {
    switch (contentPosition) {
      case "top":
        return "justify-start text-left";
      case "bottom":
        return "justify-end text-left";
      case "center":
      default:
        return "justify-center items-center";
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden min-h[345px] md:min-h-[450px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title.value}
          fill
          className="object-fit"
        />
      </div>

      {/* Content */}
      <div
        className={`relative min-h-[345px] md:min-h-[450px] flex flex-col ${getContentPositionClass()} px-7 py-4 md:p-8 lg:p-12`}
      >
        {/* <div className="max-w-sm"> */}
        <h3
          className={cn(
            "text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-freight font-medium mb-3 lining-nums proportional-nums",
            classNames?.title
          )}
          style={{ color: title.textColor }}
        >
          {title.value}
        </h3>
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed",
            classNames?.subtitle
          )}
          style={{ color: subtitle.textColor }}
        >
          {subtitle.value}
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
