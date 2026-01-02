import { useEffect, useState } from "react";

// Tailwind v4 default breakpoints (min-width)
// Reference: https://tailwindcss.com/docs/screens
// Added an optional "3xl" for convenience to represent ~1920px (Full HD)

type BreakpointName = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const BREAKPOINTS: { name: BreakpointName; min: number }[] = [
  { name: "sm", min: 640 },
  { name: "md", min: 768 },
  { name: "lg", min: 1024 },
  { name: "xl", min: 1280 },
  { name: "2xl", min: 1536 },
  { name: "3xl", min: 1920 },
];

function getBreakpointName(width: number): BreakpointName {
  // Match previous behavior: widths below the smallest breakpoint map to "sm"
  let current: BreakpointName = "sm";
  for (const bp of BREAKPOINTS) {
    if (width >= bp.min) {
      current = bp.name;
    } else {
      break;
    }
  }
  return current;
}

const useTailwindBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointName>("sm");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const current = getBreakpointName(windowWidth);
      setBreakpoint(current);
    };

    // Initialize and subscribe to resize events
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    breakpoint,
    // Match previous semantics: mobile when at "sm"
    isMobile: ["sm"].includes(breakpoint),
    // Full HD convenience check via synthetic "3xl"
    isFullHd: ["3xl"].includes(breakpoint),
  };
};

export default useTailwindBreakpoint;
