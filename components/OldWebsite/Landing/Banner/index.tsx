import "./Banner.css";

import Image from "next/image";
import LandingPageForm from "./LandingPageForm";
import Truspilot from "@/components/Trustpilot";
import type { BannerProps } from "./types";
import { Suspense } from "react";

const Banner: React.FC<BannerProps> = ({
  data,
  userKey,
  landingPageFormProps,
}) => {
  const { title, points } = data;
  return (
    <div className={"main-banner"}>
      <div className="max-w-[1250px] mx-auto">
        <div className="flex flex-wrap items-center md:px-10 px-5 pt-16 md:pb-16">
          <div className="md:w-1/2 text-dark-blue-old pr-0">
            <p className="text-4xl md:text-5xl font-freight font-extrabold capitalize">
              {title}
            </p>
            <div className="max-w-[1250px] text-xl mt-10">
              {points.map((Val, i) => (
                <div className="flex flex-wrap items-center my-7" key={i}>
                  <div className="w-1/12 px-0">
                    <Image
                      src="/assets/images/old-website/landing/landing-page-list.webp"
                      width={36}
                      height={36}
                      alt=""
                    />
                  </div>
                  <div className="w-10/12 pl-3 pl-md-0 pr-0">
                    {typeof Val === "string" ? Val : <Val />}
                  </div>
                </div>
              ))}

              <div className="my-4 px-3 md:w-1/2 mx-auto md:mx-0">
                {/* <div className="text-center mr-md-4 cursor-pointer">
                      <p className="mb-0 text-left font-1">Rated Excellent on</p>
                      <Image
                        src="/images/trustpilot-logo.webp"
                        alt="Trustpilot"
                        width={150}
                        height={40}
                      />
                    </div> */}
                <div className="flex flex-col items-center mx-auto w-full">
                  <Image
                    src="/assets/images/old-website/landing/rics-logo.png"
                    alt="RICS"
                    width={140}
                    height={50}
                  />
                  <Truspilot />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center hidden md:block">
            <Suspense>
              <LandingPageForm
                userKey={userKey}
                {...landingPageFormProps}
                u_landing_page="Help To Buy"
                u_valuation_survey="Valuation (HTB/SO)"
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="block md:hidden text-center px-5">
        <Suspense>
          <LandingPageForm
            userKey={userKey}
            {...landingPageFormProps}
            u_landing_page="Help To Buy"
            u_valuation_survey="Valuation (HTB/SO)"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Banner;
