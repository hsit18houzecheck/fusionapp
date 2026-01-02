"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconButton } from "@/components/IconButton";
import { Card } from "@/components/Card";
import { SocialsLink, CardDetail } from "../types";
import AnimateOnView from "@/components/ui/animate-on-view";

type SocialsSectionProps = {
  socialsTitle: string;
  socialsSubtitle: string;
  socialsLink: SocialsLink;
  cardDetails: CardDetail[];
};

export default function SocialsSection({
  socialsTitle,
  socialsSubtitle,
  socialsLink,
  cardDetails,
}: SocialsSectionProps) {
  return (
    <div className={cn("w-full bg-white", "px-6 md:px-0 pb-8 md:pb-10")}>
      <div className="md:max-w-440 md:px-10 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10">
          {/* Left Card - Instagram with Background Image */}
          <AnimateOnView
            delay={0.15}
            className="relative w-full md:w-[944px] rounded-2xl overflow-hidden min-h-[530px] md:min-h-[740px] mb-6 md:mb-0"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/assets/images/customer-instagram.png"
                alt={socialsTitle}
                fill
                className="object-cover md:object-cover [object-position:25%_0%] xl:object-center"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/10 to-yellow-900/70" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-20 overflow-hidden min-h-[500px] lg:min-h-[600px]">
              <h3 className="font-freight font-medium text-[1.75rem] md:text-3xl mb-2 text-yellow-500">
                {socialsTitle}
              </h3>
              <p className="text-base md:text-lg font-medium opacity-90 mb-6 text-white-100">
                {socialsSubtitle}
              </p>
              <div>
                <IconButton
                  label={socialsLink.title}
                  icon={socialsLink.icon || "external"}
                  iconPosition="right"
                  onClick={() => {
                    if (socialsLink.url) {
                      window.open(socialsLink.url, "_blank");
                    }
                  }}
                  className={cn(
                    "bg-yellow-500 text-yellow-900 hover:bg-yellow-500/90",
                    "font-medium rounded-md h-auto text-xs md:text-sm p-3 md:p-3.5"
                  )}
                  iconClassName="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            </div>
          </AnimateOnView>

          {/* Right Cards - Stacked */}
          <div className="flex flex-col gap-10 md:flex-1 w-full md:w-[41.67%]">
            {cardDetails?.map((card, index) => (
              <Card
                key={index}
                index={index}
                eyebrow={card.eyebrows}
                title={card.title}
                subtitle={card.subtitle}
                variant={index === 0 ? "dark" : "light"}
                button={
                  card.button?.label || card.button?.icon
                    ? {
                        label: card.button.label,
                        icon: card.button.icon as any,
                        iconPosition: card.button.iconPosition || "right",
                        url: card.button.url,
                      }
                    : undefined
                }
                contentClassName="min-h-[280px] md:min-h-[350px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
