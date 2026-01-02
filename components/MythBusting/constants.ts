// Card rotation classes for visual variety
export const CARD_ROTATIONS = [
  "-rotate-5 md:-rotate-[5.376deg] -top-5",
  "rotate-3 md:rotate-5 -top-5",
  "rotate-0 md:bottom-10",
  "rotate-5 md:rotate-[10.034deg]",
] as const;

// Carousel configuration
export const CAROUSEL_CONFIG = {
  AUTOPLAY_DELAY: 5000,
  ALIGN: "start" as const,
  LOOP: true,
} as const;

// Animation delays
export const ANIMATION_DELAYS = {
  EYEBROW: 0,
  TITLE: 0.15,
  SUBTITLE: 0.3,
  CTA: 0.5,
  CARD_BASE: 0.1,
} as const;

// Text generation effect duration
export const TEXT_GENERATE_DURATION = 0.3;
