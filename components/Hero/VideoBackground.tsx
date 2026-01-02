"use client";

import { useEffect, useState } from "react";

interface HeroVideoBackgroundProps {
  videoUrl: string;
}

export default function HeroVideoBackground({
  videoUrl,
}: HeroVideoBackgroundProps) {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    // Defer video loading slightly to allow main thread to settle
    // This prevents the UI freezing during the critical initial render
    const timer = setTimeout(() => {
      setShouldRenderVideo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full z-0 top-0 h-162.5 bg-yellow-100/20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000"
        poster="/assets/images/placeholder-poster.png"
        preload="none"
      >
        {shouldRenderVideo && <source src={videoUrl} type="video/mp4" />}
      </video>

      {/* Overlays - kept static to ensure text readability immediately */}
      {/* 75% Transparent overlay for text readability */}
      <div className="absolute inset-0 bg-yellow-100/60 z-10 pointer-events-none"></div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-18.75 bg-linear-to-t from-yellow-100 to-transparent pointer-events-none"></div>
    </div>
  );
}
