import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

export const getTimer = (count_down_timer_till_2_on_sat?: boolean) => {
  let now = dayjs().tz("Europe/London");
  const now2 = dayjs().tz("Europe/London");
  const isSunday = now.day() === 0;
  const isFriday = now.day() === 5;
  const isSaturday = now.day() === 6;

  let isBeforeWrapUp = true;
  let startHour = 9;
  let targetHour = 17;
  let targetMinute = 30;
  let nextBusinessDay = 1;
  let nextBusinessStartHour = 9;

  if (count_down_timer_till_2_on_sat) {
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
    isBeforeWrapUp = false;
  } else if (now2.isBefore(todayEnd)) {
    targetTime = todayEnd;
    isBeforeWrapUp = true;
  } else {
    targetTime = now2
      .add(nextBusinessDay, "day")
      .hour(nextBusinessStartHour)
      .minute(0)
      .second(0);
    isBeforeWrapUp = false;
  }

  const diff = targetTime.diff(now2);
  const duration = dayjs.duration(diff);

  return {
    isBeforeWrapUp,
    isSaturday,
    time: {
      hour: String(Math.floor(duration.asHours())).padStart(2, "0"),
      minute: String(duration.minutes()).padStart(2, "0"),
      second: String(duration.seconds()).padStart(2, "0"),
    },
  };
};
