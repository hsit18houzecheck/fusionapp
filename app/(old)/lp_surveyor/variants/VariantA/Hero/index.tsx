import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import Form from "./Form";
import Timer from "./Timer";
import { getTimer } from "./utils";
import OfflineBox from "./OfflineBox";
import PhoneWrapper from "../../../PhoneWrapper";
import { HeroProps } from "../../../types";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const Hero: React.FC<HeroProps> = ({
  userKey,
  landingPageContent,
  formProps,
}) => {
  const timerProps = getTimer(
    landingPageContent?.count_down_timer_till_2_on_sat
  );

  return (
    <div
      className="relative px-5 pb-12 pt-5 md:px-28 md:pb-28 md:pt-14"
      id="book-form-containter"
      style={{ backgroundColor: landingPageContent?.bg_col || "#17365c" }}
    >
      <div className="absolute mt-[100px] md:mt-0 h-[57%] md:h-[80%] w-[80%] md:w-[50%] right-0 md:bottom-0">
        <Image
          fill
          alt="house flat"
          src={
            landingPageContent?.hero_image ||
            "/assets/images/old-website/house-flat.webp"
          }
        />
      </div>
      <div
        className={cn("max-w-6xl mx-auto flex flex-col md:flex-row", {
          "text-secondary-old": landingPageContent?.bg_col !== "#17365c",
          "text-white": landingPageContent?.bg_col === "#17365c",
        })}
      >
        <div className="flex flex-col items-center md:items-start space-y-6">
          <p className="font-freight text-3xl md:text-6xl w-[80%] md:w-[75%] text-center md:text-left mx-auto md:mx-[inherit]">
            {landingPageContent?.left_hero_title ||
              "Get your survey confirmed in minutes."}
          </p>
          <div className="md:hidden">
            <Suspense>
              <Form
                {...timerProps}
                userKey={userKey}
                landingPageContent={landingPageContent}
                formProps={formProps}
              />
            </Suspense>
          </div>
          {landingPageContent?.show_clock || timerProps?.isBeforeWrapUp ? (
            <Timer landingPageContent={landingPageContent} {...timerProps} />
          ) : (
            <OfflineBox />
          )}
          <div className="space-y-4 z-[500]">
            {[
              "RICS-qualified surveyors and valuations",
              "Fast turnaround - reports within 48 hours*",
              // eslint-disable-next-line react/jsx-key
              <span>
                Friendly UK-based support team (Mon–Fri until 5:30pm)
                <br />
                <PhoneWrapper landingPageContent={landingPageContent}>
                  <a href="tel:0330 113 1133" id="tel-num" className="tel-num">
                    Call us now 0330 113 1133
                  </a>
                </PhoneWrapper>
              </span>,
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-[#89d2c6] shrink-0">
                  <FiCheck className="text-white" size={20} />
                </div>
                <p className="font-normal text-sm md:text-lg whitespace-break-spaces">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="font-normal text-sm md:text-lg text-center md:text-left">
            40,000+ SUCCESSFUL SURVEYS COMPLETED
          </p>
          <p className="text-sm text-center md:text-left w-[60%]">
            *Houzecheck average survey report turnaround after inspection is 48
            hours, making Houzecheck one of the fastest survey providers in the
            country.
            <br />
            In some scenarios surveys have been known to take longer than 48
            hours in turnaround time.
          </p>
        </div>
        <div className="hidden md:block md:w-[55%]">
          <Suspense>
            <Form
              {...timerProps}
              userKey={userKey}
              landingPageContent={landingPageContent}
              formProps={formProps}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;
