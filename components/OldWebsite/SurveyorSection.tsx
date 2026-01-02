import Image from "next/image";
import Button from "./Button";
import type { SurveyorSectionProps } from "./types";

const SurveyorSection: React.FC<SurveyorSectionProps> = ({
  landing,
  href = "/book",
}) => {
  return (
    <div className="py-24">
      <div className="max-w-[1250px] block md:flex items-center mx-auto justify-around px-4">
        <h2 className="font-bold text-3xl text-dark-blue-old mb-5 py-3 text-center block md:hidden">
          Excellent Surveyors, Excellent Reports
        </h2>
        <div className="md:order-2">
          <Image
            src="/assets/images/old-website/home-surveyor.webp"
            alt="Surveyor"
            width={400}
            height={500}
            className="rounded-[25px] h-[revert-layer]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-between h-full">
          <h2 className="text-4xl md:text-5xl text-dark-blue-old mb-5 hidden md:block font-freight font-extrabold">
            Excellent Surveyors, Excellent Reports
          </h2>
          <p className="mb-8 text-base md:text-lg text-justify p-4 md:pr-10 md:pl-0 mt-1">
            Quality matters! Our team of 150+ local surveyors are all fully
            qualified members of the Royal Institution of Chartered Surveyors
            (RICS). <br />
            <br /> All our surveyors are experienced in the locations that they
            operate and specialise within. At Houzecheck we do not have trainees
            or unqualified surveyors and we do not permit practices whereby
            trainees undertake inspections and qualified surveyors remotely sign
            off their reports.
          </p>

          {!landing && (
            <Button
              href={href}
              className="w-4/5"
              label="Book a RICS Surveyor"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyorSection;
