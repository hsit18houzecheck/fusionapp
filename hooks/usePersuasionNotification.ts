import { useEffect, useState } from "react";
import { getSocialProof } from "@/services/houzeCheckAPI";
import { getTimer } from "@/lib/timerUtil";

type NotificationMessage = {
  message?: string;
  [key: string]: any;
};

type UsePersuasionNotificationOptions = {
  interval?: number;
  enabled?: boolean;
};

type UsePersuasionNotificationReturn = {
  currentMessage: string;
  currentIndex: number;
  messages: NotificationMessage[];
  isLoading: boolean;
  error: string | null;
};

export function usePersuasionNotification({
  interval = 5000,
  enabled = true,
}: UsePersuasionNotificationOptions = {}): UsePersuasionNotificationReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState<NotificationMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch social proof data
  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    const fetchPersuasionData = async () => {
      try {
        setIsLoading(true);
        const socialProofs = await getSocialProof();
        const { isBeforeWrapUp, isSaturday } = getTimer(true);

        let bookings = socialProofs?.last_24_hours?.bookings;

        if (!isBeforeWrapUp) {
          if (!isSaturday) {
            bookings = [
              ...(socialProofs?.last_24_hours?.summary ?? []),
              ...(bookings ?? []),
            ];
          }
          if (isSaturday) {
            bookings = [
              ...(socialProofs?.this_week?.booking_summary ?? []),
              ...(bookings ?? []),
            ];
          }
        }

        if (Array.isArray(bookings)) {
          setMessages(bookings);
        } else {
          setMessages([]);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch persuasion data"
        );
        setMessages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPersuasionData();
  }, [enabled]);

  // Rotate through messages
  useEffect(() => {
    if (messages.length === 0 || !enabled) return;

    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(rotationInterval);
  }, [messages, interval, enabled]);

  return {
    currentMessage: messages[currentIndex]?.message || "",
    currentIndex,
    messages,
    isLoading,
    error,
  };
}

