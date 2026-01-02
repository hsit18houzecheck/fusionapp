import Image from "next/image";
import { StepCard, SuccessStoryCard } from "./types";
import { handleCTAClick } from "@/lib/utils";
import { PARTNER_FORM_EVENT } from "@/app/(new)/partner/constants";

type CardPropType = {
  step: StepCard;
  story: SuccessStoryCard;
  rotation: string;
  successRotation: string;
  showSuccessStory: boolean;
};

export const Card = ({
  step,
  story,
  rotation,
  successRotation,
  showSuccessStory,
}: CardPropType) => {
  return (
    <>
      <div
        key={`step-card`}
        className={`flex items-start justify-center relative shrink-0 ${rotation}`}
      >
        <div className="w-[300px] md:w-[375px] h-[432px] md:h-[402px] bg-yellow-900 flex flex-col gap-10 md:gap-12 items-start px-6 py-7 rounded-2xl shadow-xl">
          <div className="relative shrink-0 size-10">
            <Image
              src={step.iconPath}
              unoptimized
              alt={`${step.title} icon`}
              width={40}
              height={40}
              className="size-10"
            />
          </div>
          <h3 className="font-freight font-medium text-yellow-100 text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] tracking-normal w-full">
            {step.step}: {step.title}
          </h3>
          <div className="flex flex-col gap-8 grow items-start justify-end w-full">
            <p className="font-normal text-sm md:text-base leading-7 text-white w-full">
              {step.description.includes("here") ? (
                <>
                  {step.description.split("here")[0]}
                  <a className="text-yellow-500 underline font-bold cursor-pointer" onClick={(e) => handleCTAClick(e, {url: `#${PARTNER_FORM_EVENT}`})}>
                    here
                  </a>
                  {step.description.split("here")[1]}
                </>
              ) : (
                step.description
              )}
            </p>
          </div>
        </div>
      </div>
      {showSuccessStory && (
        <div
          key={`success-card`}
          className={`flex items-start justify-center relative shrink-0 ${successRotation}`}
        >
          <div className="w-[300px] md:w-[402px] h-[325px] md:h-[402px] bg-yellow-100 flex flex-col gap-5 md:gap-12 items-start px-6 py-7 rounded-2xl shadow-xl">
            <div className="relative shrink-0 size-10">
              <Image
                src={story.iconPath}
                alt="Handshake icon"
                unoptimized
                width={40}
                height={40}
                className="size-10"
              />
            </div>
            <h3 className="font-freight font-medium text-yellow-900 text-2xl md:text-[2rem] md:leading-[2rem] tracking-normal w-full">
              {story.companyName}
            </h3>
            <div className="flex flex-col gap-8 grow items-start justify-end w-full">
              <p className="font-normal text-xs md:text-base leading-6 md:leading-7 text-yellow-900 w-full">
                {story.description
                  .split(/(\bX\b|\bY\b|£Z|\bZ\b|\b12 months\b|\b3 months\b)/)
                  .map((part, i) => {
                    if (
                      part === "X" ||
                      part === "Y" ||
                      part === "£Z" ||
                      part === "Z" ||
                      part === "12 months" ||
                      part === "3 months"
                    ) {
                      return (
                        <span key={i} className="font-bold">
                          {part}
                        </span>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
