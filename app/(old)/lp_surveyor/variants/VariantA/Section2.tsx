"use client";

import Truspilot from "@/components/Trustpilot";
import { FaStar } from "react-icons/fa6";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

const Section2 = () => {
  const { isMobile } = useTailwindBreakpoint();

  return (
    <div className="bg-primary-old px-5 py-12 md:px-28 md:py-28">
      <div className="max-w-6xl mx-auto text-white flex flex-col items-center space-y-4">
        <p className="font-freight font-bold text-secondary-old text-3xl md:text-5xl text-center">
          {`"Excellent service from the first enquiry phone call to completion of
        the survey"`}
        </p>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <FaStar key={index} color="#FFD342" size={isMobile ? 38 : 44} />
          ))}
        </div>
        <div className="md:w-[80%]">
          <Truspilot type="slider" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
