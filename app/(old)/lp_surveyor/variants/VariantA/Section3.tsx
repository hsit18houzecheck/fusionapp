import Truspilot from "@/components/Trustpilot";
import BackToForm from "./Buttons/BackToForm";
import Image from "next/image";

const Section3 = () => (
  <div className="bg-white px-5 py-12 md:px-28 md:py-28">
    <div className="max-w-6xl mx-auto text-white flex flex-col md:flex-row space-y-6 justify-between md:h-[500px]">
      <div className="md:w-[60%] flex flex-col space-y-10">
        <p className="font-freight text-secondary-old font-bold text-3xl md:text-5xl text-center md:text-left">
          {"Why do thousands of customers\nchoose Houzecheck?"}
        </p>
        <div className="relative rounded-2xl bg-gradient-to-r from-primary-old to-white hidden md:block overflow-hidden flex-1">
          <div className="absolute h-[90%] w-[65%] right-0 bottom-0">
            <Image
              fill
              alt="Houzecheck logo"
              src="/assets/images/old-website/house-flat-2.png"
            />
          </div>
          <div className="w-[50%] flex flex-col items-start -ml-10">
            <Truspilot />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:flex md:flex-col md:justify-between md:flex-1 space-y-5">
          {[
            "Flexible Booking Options",
            "Fast Turnaround",
            "Exceptional Customer Support",
            "RICS-Certified Surveyors",
            "Peace of Mind",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 md:space-x-6"
            >
              <div className="w-[40px] h-[40px] md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full bg-primary-old shrink-0">
                <p className="font-normal text-base md:text-xl">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
              </div>
              <p className="font-normal text-base md:text-xl text-black">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-2xl bg-gradient-to-r from-primary-old to-white md:hidden h-[200px] overflow-hidden">
        <div className="absolute h-[90%] w-[75%] right-0 bottom-0">
          <Image
            fill
            alt="Houzecheck logo"
            src="/assets/images/old-website/house-flat-2.png"
          />
        </div>
        <div className="w-[80%] flex flex-col items-start -ml-10">
          <Truspilot />
        </div>
      </div>
    </div>
    <BackToForm className="mt-8" />
  </div>
);

export default Section3;
