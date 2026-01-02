import Image from "next/image";
import { Suspense } from "react";
import { LIST_DATA, PROP_DATA, TESTIMONIAL_DATA } from "./constants";
import Footer from "@/components/OldWebsite/Footer2";
import LandingPageForm from "@/components/OldWebsite/LandingPageForm2";
import Navbar from "@/components/OldWebsite/Navbar2";
import PropView from "@/components/OldWebsite/PropView";
import List from "@/components/OldWebsite/ListView";

export const metadata = {
  title: "RICS® Surveyors £269 | Surveys in 24 hrs | Houzecheck",
  description:
    "We are surveyors approved by RICS. Detailed RICS survey report. Surveys in 24 hrs. Low cost & free quote for surveys & valuations in UK",
};
const Book = () => {
  return (
    <div className="h-full w-full">
      <Navbar hideNumber />
      <div className="w-full bg-primary-old md:px-10 px-0">
        <div className="md:max-w-[1020px] mx-auto px-5 py-3">
          <h1 className="md:text-3xl text-2xl">
            Leaders in Residential Property Surveys
          </h1>
        </div>
      </div>
      <div className="w-full md:px-10 px-0">
        <div className="md:max-w-[1020px] mx-auto px-5 py-0 md:py-2 md:px-5">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-1/2">
              {LIST_DATA.map((obj) => (
                <List
                  key={obj.key}
                  img={obj.img}
                  txt={obj.txt}
                  highlightTxt={obj.highlightTxt}
                  boldTxt={obj.boldTxt}
                />
              ))}
              <div className="hidden md:flex justify-center items-center">
                <Image
                  src="/assets/images/old-website/landing2/rics-logo.webp"
                  width={160}
                  height={70}
                  alt="RICS logo"
                  className="mr-5"
                />
                <Image
                  src="/assets/images/old-website/landing2/trust-pilot.webp"
                  width={170}
                  height={130}
                  alt="Trustpilot logo"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:p-6">
              <div className="border border-black md:shadow-2xl rounded-3xl p-6">
                {/* <form onSubmit={(e) => bookHandler(e)} autoComplete="off"> */}
                <Suspense>
                  <LandingPageForm />
                </Suspense>
              </div>
              <div className="flex md:hidden justify-center items-center">
                <Image
                  src="/assets/images/old-website/landing2/rics-logo.webp"
                  width={160}
                  height={70}
                  alt="RICS logo"
                  className="mr-5"
                />
                <Image
                  src="/assets/images/old-website/landing2/trust-pilot.webp"
                  width={170}
                  height={130}
                  alt="Trustpilot logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-10 bg-cover md:bg-auto"
        style={{
          backgroundImage:
            'url("/assets/images/old-website/landing2/bg-img1.svg")',
          transform: "rotate(180deg)",
        }}
      ></div>
      <div className="w-full md:px-10 px-0">
        <div className="md:max-w-[1020px] mx-auto md:p-5 p-2">
          <h2 className="md:text-2xl text-lg text-center mb-5">
            A very detailed RICS compliant survey report with timely delivery by
            certified RICS surveyors is in our DNA
          </h2>
          <div className="md:flex items-center justify-center">
            <Image
              src="/assets/images/old-website/landing2/house-jargon.webp"
              width={600}
              height={1100}
              alt=""
              className="block md:hidden mx-auto"
            />
            <Image
              alt=""
              src="/assets/images/old-website/landing2/report-front.webp"
              width={300}
              height={600}
              className="border border-black mx-auto md:mr-5 mt-8 md:mt-0"
            />
            <Image
              alt=""
              src="/assets/images/old-website/landing2/house-jargon.webp"
              width={600}
              height={1100}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-10 bg-cover md:bg-auto"
        style={{
          backgroundImage:
            'url("/assets/images/old-website/landing2/bg-img1.svg")',
        }}
      ></div>
      <div className="w-full md:px-10 px-5 bg-primary-old py-10">
        <div className="md:max-w-[1020px] mx-auto md:p-5">
          <h2 className="text-3xl my-4">Who We Are</h2>
          <p>
            We are leaders in Homebuyer surveys and valuation with over 30 years
            of experience. Excellence is paramount! Our 150+ local surveyors are
            fully accredited members of the Royal Institution of Chartered
            Surveyors (RICS). Each surveyor is well-versed in their respective
            locations, specializing in specific areas. At HouzeCheck, we
            maintain a commitment to quality by excluding trainees or
            unqualified surveyors. We strictly prohibit practices where trainees
            conduct inspections, with qualified surveyors physically overseeing
            and approving reports. As a company, we adhere to the utmost
            standards of service and professionalism within the UK property
            sector.
          </p>
        </div>
      </div>
      <div
        className="w-full h-10 bg-cover md:bg-auto"
        style={{
          backgroundImage:
            'url("/assets/images/old-website/landing2/bg-img1.svg")',
          transform: "rotate(180deg)",
        }}
      ></div>
      <div className="w-full px-10">
        <div className="md:max-w-[1020px] mx-auto md:p-5">
          <h2 className="text-3xl my-4 text-center">Our Services</h2>
          <div className="md:flex">
            {PROP_DATA.map((obj) => (
              <PropView
                key={obj.key}
                img={obj.img}
                txt={obj.txt}
                title={obj.title}
                list={obj.list}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="md:max-w-[1020px] mx-auto p-5">
          <h2 className="text-3xl my-4 text-center">What Our Clients Say</h2>
          <div className="md:flex items-center mb-5 justify-between">
            {TESTIMONIAL_DATA.map((obj) => (
              <div
                className="text-sm md:w-[30%] my-5 relative border border-black px-5 pb-5 rounded-lg"
                key={obj.key}
                // style={{
                //   backgroundImage: 'url("/assets/images/old-website/landing2/card-bg.svg")',
                //   backgroundSize: "cover",
                // }}
              >
                <div className="h-6 w-full bg-primary-old absolute left-0 rounded-t-lg border-b border-black">
                  <div className="flex items-center mt-1 ml-5">{obj.stars}</div>
                </div>
                <p className="mt-10 leading-8">{obj.message}</p>
                <p className="font-bold my-3">{obj.name}</p>
                <p className="font-bold">{obj.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
