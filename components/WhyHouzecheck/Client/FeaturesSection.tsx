import Image from "next/image";
import { cn } from "@/lib/utils";
import { MdBolt } from "react-icons/md";
import { FeatureItem, CustomerStoryVideo } from "../types";
import { ICON_MAP } from "../constants";
import { SectionWrapper } from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionWrapper/Header";

type FeaturesSectionProps = {
  eyebrow: string;
  heading: string;
  features: FeatureItem[];
  customerStoryEyebrow: string;
  customerStoryTitle: string;
  customerStorySubtitle: string;
  customerStoryVideo: CustomerStoryVideo;
};

const getFeatureIcon = (iconNameOrUrl: string) => {
  // Check if it's a URL
  if (iconNameOrUrl.startsWith("http") || iconNameOrUrl.startsWith("/")) {
    return (
      <Image src={iconNameOrUrl} alt="Feature icon" width={50} height={50} />
    );
  }

  const Icon = ICON_MAP[iconNameOrUrl as keyof typeof ICON_MAP] || MdBolt;
  return <Icon className="w-12.5 h-12.5 text-yellow-500" />;
};

export default function FeaturesSection({
  eyebrow,
  heading,
  features,
  customerStoryEyebrow,
  customerStoryTitle,
  customerStorySubtitle,
  customerStoryVideo,
}: FeaturesSectionProps) {
  return (
    <div className={cn("w-full bg-white", "py-8 md:py-10")}>
      {/* Features Section */}
      <div className="md:max-w-440 px-6 md:px-10 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10">
          {/* Left Section - Features (41.67%) */}
          <SectionWrapper
            contentCenter={false}
            duration={0.15}
            eyebrow={eyebrow}
            title={heading}
            className="bg-yellow-100 mb-6 md:mb-0 md:w-[41.67%] rounded-2xl py-6 md:py-10"
          >
            <div className="grid grid-cols-2 gap-8 md:gap-10 mt-1 md:mt-16.75">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
                >
                  {/* Icon Container */}
                  <div className="relative w-14 h-14 md:w-18 md:h-18 rounded-full bg-yellow-900 flex items-center justify-center p-4">
                    {getFeatureIcon(feature.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="font-open-sauce font-medium text-yellow-900 text-base md:text-lg">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-grey-500 font-medium text-xs leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </SectionWrapper>
          {/* Right Section - Customer Story (58.33%) */}
          <div className="w-full md:w-[58.33%] flex items-center">
            <div className="relative h-[500px] md:h-full rounded-2xl overflow-hidden bg-yellow-900 backdrop-blur-md p-6 md:p-12 justify-center text-white-100 gap-8 md:gap-10 flex flex-col">
              <SectionHeader
                contentCenter={false}
                duration={0.15}
                eyebrow={customerStoryEyebrow}
                title={
                  customerStoryTitle
                    ? {
                        text: customerStoryTitle,
                        className: "text-white-100",
                      }
                    : undefined
                }
                subtitle={
                  customerStorySubtitle
                    ? {
                        text: customerStorySubtitle,
                        className: "text-white-100",
                      }
                    : undefined
                }
              />
              <Image
                src={customerStoryVideo.backgroundImage || ""}
                alt={customerStoryTitle || "background-image"}
                width={461}
                height={120}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
