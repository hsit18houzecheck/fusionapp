import { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Whether to pause the animation on mobile devices
   * @default false
   */
  pauseOnMobile?: boolean
  /**
   * Whether to pause the animation when clicked or held (useful for touch devices)
   * @default false
   */
  pauseOnClick?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
  rowClassName?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  pauseOnMobile = false,
  pauseOnClick = false,
  children,
  vertical = false,
  repeat = 4,
  rowClassName,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("bg-transparent flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "group-active:paused": pauseOnClick,
              "[animation-direction:reverse]": reverse,
              "paused md:running": pauseOnMobile,
            }, rowClassName)}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
