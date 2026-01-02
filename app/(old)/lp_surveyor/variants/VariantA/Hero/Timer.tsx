"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import { TimerProps } from "../../../types";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

interface TimeContainerProps {
  label: string;
  value: string;
}

const TimeContainer: React.FC<TimeContainerProps> = ({ label, value }) => (
  <div className="flex flex-col items-center bg-[#FFF0F1] rounded-lg py-2 md:py-4 md:px-4 w-[64px] md:w-[88px] shrink-0">
    <p className="text-3xl md:text-4xl font-extrabold text-[#E21E2C]">
      {value}
    </p>
    <p className="text-[10px] md:text-sm font-light">{label}</p>
  </div>
);

const Timer: React.FC<TimerProps> = ({
  landingPageContent,
  isBeforeWrapUp: defaultIsBeforeWrapUp,
  time: defaultTime,
}) => {
  const [time, setTime] = useState(defaultTime);
  const [isBeforeWrapUp, setIsBeforeWrapUp] = useState(defaultIsBeforeWrapUp);

  useEffect(() => {
    const updateTimer = () => {
      let now = dayjs().tz("Europe/London");
      const now2 = dayjs().tz("Europe/London");
      const isSunday = now.day() === 0;
      const isFriday = now.day() === 5;
      const isSaturday = now.day() === 6;

      let startHour = 9;
      let targetHour = 17;
      let targetMinute = 30;
      let nextBusinessDay = 1;
      let nextBusinessStartHour = 9;

      if (landingPageContent?.count_down_timer_till_2_on_sat) {
        if (isFriday) {
          nextBusinessStartHour = 10;
        }
        if (isSaturday) {
          startHour = 10;
          targetHour = 14;
          targetMinute = 0;
          nextBusinessDay = 2;
        }
        if (isSunday) {
          now = now.add(1, "day");
        }
      }

      const todayStart = now.hour(startHour).minute(0).second(0);
      const todayEnd = now.hour(targetHour).minute(targetMinute).second(0);
      let targetTime;

      if (now2.isBefore(todayStart)) {
        targetTime = todayStart;
        setIsBeforeWrapUp(false);
      } else if (now2.isBefore(todayEnd)) {
        targetTime = todayEnd;
        setIsBeforeWrapUp(true);
      } else {
        targetTime = now2
          .add(nextBusinessDay, "day")
          .hour(nextBusinessStartHour)
          .minute(0)
          .second(0);
        setIsBeforeWrapUp(false);
      }

      const diff = targetTime.diff(now2);
      const duration = dayjs.duration(diff);

      setTime({
        hour: String(Math.floor(duration.asHours())).padStart(2, "0"),
        minute: String(duration.minutes()).padStart(2, "0"),
        second: String(duration.seconds()).padStart(2, "0"),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [landingPageContent?.count_down_timer_till_2_on_sat]);

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 text-black w-[80%] md:w-[inherit] md:max-w-[60%] z-10">
      <p className="text-xs md:text-base font-normal">Act Now.</p>
      <p className="text-sm md:text-xl font-extrabold text-justify">
        {!isBeforeWrapUp
          ? "Submit the form to get a priority call back in the morning"
          : landingPageContent?.count_down_timer_text ||
            "Same-Day Quotes End at 5.30pm"}
      </p>
      <div className="flex justify-between mt-2 items-center">
        <TimeContainer label="HOURS" value={time.hour} />
        <span className="text-4xl font-extrabold text-[#E21E2C] mx-2">:</span>
        <TimeContainer label="MINUTES" value={time.minute} />
        <span className="text-4xl font-extrabold text-[#E21E2C] mx-2">:</span>
        <TimeContainer label="SECONDS" value={time.second} />
      </div>
    </div>
  );
};

export default Timer;
