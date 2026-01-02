"use client";

import { RefObject, useEffect } from "react";

export function useDeferredVideo(
  ref: RefObject<HTMLVideoElement>,
  src: string
) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const attachSource = () => {
      if (video.src) return;

      video.src = src;
      video.play().catch(() => {});
    };

    // Prefer idle time
    if ("requestIdleCallback" in window) {
      requestIdleCallback(attachSource);
    } else {
      setTimeout(attachSource, 1000);
    }
  }, [ref, src]);
}
