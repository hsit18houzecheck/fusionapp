"use client";

import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { useEffect, useState } from "react";
import { SectionWithLandingContentProps } from "../../../types";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

interface LiveStatusProps extends SectionWithLandingContentProps {
  isBeforeWrapUp: boolean;
  isSaturday: boolean;
}

const LiveStatus: React.FC<LiveStatusProps> = ({
  landingPageContent,
  isBeforeWrapUp,
  isSaturday,
}) => {
  const [index, setIndex] = useState(0);
  const [persuasionData, setPersuasionData] = useState<
    Array<{ message?: string; [key: string]: any }>
  >([]);

  const currentPersuasionMessage = persuasionData[index]?.message || "";

  useEffect(() => {
    const getPersuasion = async () => {
      try {
        const res = await fetch(
          "https://houzecheck.service-now.com/api/houch/persuasion_messaging/social_proof"
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        let bookings = data?.result?.social_proof?.last_24_hours?.bookings;

        if (!isBeforeWrapUp) {
          if (!isSaturday) {
            bookings = [
              ...data?.result?.social_proof?.last_24_hours?.summary,
              ...bookings,
            ];
          }
          if (isSaturday) {
            bookings = [
              ...data?.result?.social_proof?.this_week?.booking_summary,
              ...bookings,
            ];
          }
        }

        if (Array.isArray(bookings)) {
          setPersuasionData(bookings);
        } else {
          setPersuasionData([]);
        }
      } catch (e) {
        setPersuasionData([]);
      }
    };

    getPersuasion();
  }, [
    landingPageContent?.count_down_timer_till_2_on_sat,
    isBeforeWrapUp,
    isSaturday,
  ]);

  useEffect(() => {
    setIndex(0);
  }, [persuasionData]);

  useEffect(() => {
    if (persuasionData.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % persuasionData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [persuasionData]);

  return (
    <div
      className="h-[50px] md:h-[66px]"
      style={{ backgroundColor: landingPageContent?.bg_col || "#17365c" }}
    >
      <div
        className={`border-t-2 border-t-[#E21E2C] flex items-center justify-center px-5 space-x-2 overflow-hidden transition-all duration-500 ${
          persuasionData.length > 0 ? "bg-[#FFF0F1]" : "bg-secondary-old"
        }`}
        style={{
          maxHeight: persuasionData.length > 0 ? 80 : 0,
          paddingTop: persuasionData.length > 0 ? "0.75rem" : 0,
          paddingBottom: persuasionData.length > 0 ? "0.75rem" : 0,
          opacity: persuasionData.length > 0 ? 1 : 0,
        }}
      >
        <div className="relative h-[24px] w-[24px] md:h-[40px] md:w-[40px] shrink-0">
          <Image
            fill
            alt="Live status logo"
            src="/assets/images/old-website/status-icon.svg"
          />
        </div>
        <p className="text-[#E21E2C] text-sm md:text-lg font-normal text-center truncate whitespace-nowrap overflow-hidden max-w-full">
          {currentPersuasionMessage}
        </p>
      </div>
    </div>
  );
};

export default LiveStatus;
