import Truspilot from "@/components/Trustpilot";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import PhoneWrapper from "../../PhoneWrapper";
import { NavbarProps } from "../../types";
import { cn } from "@/lib/utils";

const Navbar: React.FC<NavbarProps> = ({ landingPageContent }) => {
  return (
    <div
      className={cn(
        "px-5 py-3 md:px-28 bg-white overflow-hidden max-w-[dvw] min-h-[72px] md:min_h-[126px] flex flex-col",
        { "sticky top-0 z-[1000]": landingPageContent?.header_sticky }
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-1 w-full">
        <a href="/">
          <div className="relative h-[32px] w-[130px] md:h-[60px] md:w-[243px]">
            <Image
              fill
              alt="Houzecheck logo"
              src="/assets/images/old-website/hc-logo.svg"
            />
          </div>
        </a>
        <div className="flex flex-col items-end flex-1">
          <PhoneWrapper landingPageContent={landingPageContent}>
            <a
              href="tel:0330 113 1133"
              id="tel-num"
              className="flex space-x-3 flex-row items-center tel-num mt-2 md:mt-0"
            >
              <FaPhone className="text-lg" />
              <span className="text-base md:text-2xl">0330 113 1133</span>
            </a>
          </PhoneWrapper>
          <p className="block md:hidden text-right text-xs">
            Property experts online now
          </p>
          <div className="hidden md:block md:-mr-14 min-h-[70px]">
            <Truspilot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
