import Image from "next/image";
import BackToForm from "./Buttons/BackToForm";
import { SectionWithLandingContentProps } from "../../types";
import { cn } from "@/lib/utils";

const Section7: React.FC<SectionWithLandingContentProps> = ({
  landingPageContent,
}) => {
  const isDarkTheme = landingPageContent?.bg_col === "#17365c";

  return (
    <div style={{ backgroundColor: landingPageContent?.bg_col || "#17365c" }}>
      <div
        className={cn("max-w-6xl mx-auto md:flex", {
          "text-secondary-old": !isDarkTheme,
          "text-white": isDarkTheme,
        })}
      >
        <div className="md:w-[50%] px-5 py-12 md:px-0 md:py-28 text-center md:text-left space-y-4">
          <p className="font-freight text-3xl md:text-5xl">
            Who is Houzecheck?
          </p>
          <p className="whitespace-break-spaces text-sm md:text-lg font-normal">
            {
              "Born from frustration. Built for homebuyers.\n\nIn 2017, our founder Amit Bansal was on the brink of losing his dream home — all because of survey delays and outdated processes. As a seasoned tech entrepreneur, he knew there had to be a better way.\n\nThat experience sparked the creation of Houzecheck — launched in 2018 to fix the broken property survey system.\n\nToday, Houzecheck brings together leading experts in surveying, technology, and operations to deliver faster, smarter, and more reliable home surveys. Whether you're buying your first home or investing in property, we’re here to help you make confident decisions — without the stress."
            }
          </p>
          <BackToForm
            theme={isDarkTheme ? "dark" : "light"}
            className="hidden md:block ml-0"
          />
        </div>
        <div className="relative h-[200px] md:h-[inherit] md:w-[50%]">
          <Image
            src="/assets/images/old-website/team-houzecheck.webp"
            alt="Team Houzecheck"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-5 md:hidden">
        <BackToForm theme={isDarkTheme ? "dark" : "light"} />
      </div>
    </div>
  );
};

export default Section7;
