import Truspilot from "@/components/Trustpilot";
import BackToForm from "./Buttons/BackToForm";
import { SectionWithLandingContentProps } from "../../types";
import { cn } from "@/lib/utils";

const Section5: React.FC<SectionWithLandingContentProps> = ({
  landingPageContent,
}) => {
  const isDarkTheme = landingPageContent?.bg_col === "#17365c";
  return (
    <div
      className="px-5 py-12 md:px-28 md:py-28"
      style={{ backgroundColor: landingPageContent?.bg_col || "#17365c" }}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto flex flex-col items-center text-center space-y-4",
          {
            "text-secondary-old": !isDarkTheme,
            "text-white": isDarkTheme,
          }
        )}
      >
        <p className="font-freight font-bold text-3xl md:text-5xl">
          {"Listen to our customers"}
        </p>
        <p className="text-base md:text-lg">
          {"Read what homebuyers are saying about Houzecheck"}
        </p>
        <div className="flex flex-col md:flex-row space-x-2">
          <div className="md:w-[25%]">
            <Truspilot theme={isDarkTheme ? "dark" : "light"} />
          </div>
          <div className="md:w-[75%]">
            <Truspilot type="slider" theme={isDarkTheme ? "dark" : "light"} />
          </div>
        </div>
      </div>
      <BackToForm className="mt-8" theme={isDarkTheme ? "dark" : "light"} />
    </div>
  );
};

export default Section5;
