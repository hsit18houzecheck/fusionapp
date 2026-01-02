import Image from "next/image";
import { MeetPeopleContent } from "./types";

export type MeetPeopleClientProps = MeetPeopleContent;

import { SectionWrapper } from "../SectionWrapper";

export default function MeetPeople({
  eyebrow,
  title,
  subTitle,
  photo,
  paragraph,
  signature,
  name,
}: MeetPeopleClientProps) {
  return (
    <SectionWrapper
      eyebrow={
        eyebrow ? { text: eyebrow, className: "font-medium" } : undefined
      }
      title={
        title
          ? { text: title, className: "text-3xl md:text-[2.5rem]" }
          : undefined
      }
      subtitle={subTitle ? { text: subTitle } : undefined}
      className="py-12 md:py-20"
      containerClassName="!max-w-4xl"
    >
      <div>
        {/* Profile Image */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden bg-yellow-100">
            <Image
              src={photo}
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 192px"
            />
          </div>
        </div>

        {/* Letter Content */}
        <div className="space-y-6 text-grey-500 text-base md:text-lg leading-relaxed">
          {/* Paragraph - HTML content */}
          <div
            className="[&_p]:mb-6 [&_p:last-child]:mb-0 [&_br]:hidden"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />

          {/* Signature Section */}
          {/* <div className="mt-8 mb-2">
            <div className="relative w-48 h-24">
              <Image
                src={signature}
                alt="Signature"
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </div>
          </div> */}

          {/* Name */}
          <p className="font-medium">{name}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
