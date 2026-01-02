"use client";

import { MdCheck } from "react-icons/md";
import { cn } from "@/lib/utils";
import { usePersuasionNotification } from "@/hooks/usePersuasionNotification";
import AnimateOnView from "../ui/animate-on-view";
import TypingText from "../ui/TypingText";

export default function NotificationBadge() {
  const { currentMessage, currentIndex } = usePersuasionNotification({
    interval: 8000,
    enabled: true,
  });

  if (!currentMessage) return <div className="h-7" />;
  return (
    <>
      <AnimateOnView
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm",
          "bg-success-100 text-success-500 font-semibold text-[0.625rem] md:text-xs",
          "max-w-full overflow-hidden"
        )}
      >
        <MdCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
        <TypingText
          key={currentIndex}
          text={currentMessage}
          typingSpeed={750}
          pauseDuration={150}
          showCursor={false}
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          cursorClassName="h-1"
          textColors={["#007037"]}
          variableSpeed={{ min: 50, max: 120 }}
        />
      </AnimateOnView>
    </>
  );
}
