import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import type { NewsCardProps } from "./types";

export default function NewsCard({ newsItem }: NewsCardProps) {
  return (
    <article className="flex flex-col w-full mb-10 md:mb-0">
      {/* Image */}
      <div className="relative w-[345px] md:w-auto min-h-[300px] md:min-h-[514px] rounded-lg overflow-hidden mb-6">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Eyebrow */}
        <p className="text-[0.5rem] md:text-[0.625rem] font-bold uppercase tracking-widest text-peach-500">
          {newsItem.eyebrow}
        </p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-freight font-medium text-yellow-900 lining-nums proportional-nums">
          {newsItem.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-grey-500 font-medium">
          {newsItem.subtitle}
        </p>

        {/* CTA Button */}
        {!!newsItem.button.label && (
          <Button
            variant={newsItem.button.variant}
            rightIcon={newsItem.button.rightIcon}
            iconClassName="w-4 h-4"
          >
            <Link href={newsItem.button.url || "/"}>
              {newsItem.button.label}
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
