import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "./types";
import { BaseCard } from "./BaseCard";
import AnimateOnView from "../ui/animate-on-view";
import { SectionWrapper } from "../SectionWrapper";

type ServiceClientProps = {
  heading?: string;
  title: string;
  subtitle?: string;
  lastcard: {
    title: string;
    subtitle?: string;
    cta: { label: string; href: string };
  };
  serviceitems: ServiceItem[];
};

export default function ServiceClient({
  heading,
  title,
  subtitle,
  serviceitems,
  lastcard,
}: ServiceClientProps) {
  if (!serviceitems?.length) return null;

  return (
    <SectionWrapper
      className="mb-0"
      eyebrow={heading}
      title={title}
      subtitle={
        subtitle
          ? {
              text: subtitle,
            }
          : undefined
      }
    >
      <div className="flex justify-between space-x-3 overflow-y-hidden overflow-x-auto snap-x snap-mandatory items-start">
        {serviceitems.map((item, index) => (
          <AnimateOnView
            delay={index * 0.2}
            key={index}
            className="snap-start min-w-[345px] w-[345px] md:w-full max-w-[444px]"
          >
            <BaseCard image={item.image} badge={item.badge}>
              <div className="absolute inset-x-4 bottom-4 md:bottom-6">
                <div className="bg-yellow-900/65 backdrop-blur-md border border-yellow-100/10 rounded-2xl p-5 md:p-6 text-yellow-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                  <h3 className="font-freight text-yellow-500 text-3xl font-medium leading-snug lining-nums proportional-nums">
                    {item.title}
                  </h3>
                  {item.price ? (
                    <p className="mt-1 font-freight font-bold italic text-yellow-100 text-base md:text-lg lining-nums proportional-nums">
                      from £{item.price}
                    </p>
                  ) : null}
                  <p className="mt-3 text-xs md:text-xs text-white">
                    {item.description}
                  </p>

                  {item.highlights?.length ? (
                    <div className="mt-4">
                      <p className="text-xs text-white mb-2">Book this for:</p>
                      <div className="flex flex-wrap gap-2.5">
                        {item.highlights.map((h, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center text-yellow-500 text-xs font-bold bg-yellow-800 p-1 rounded-[4px]"
                          >
                            {h.title}
                            <span className="ml-1 text-[10px] inline">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="hidden"
                              >
                                <mask
                                  id="mask0_1202_11461"
                                  style={{ maskType: "alpha" }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                  height="20"
                                >
                                  <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1202_11461)">
                                  <path
                                    d="M9.96461 15C10.2739 15 10.5395 14.8891 10.7613 14.6671C10.9832 14.4452 11.0942 14.1791 11.0942 13.8688C11.0942 13.5585 10.9832 13.295 10.7613 13.0782C10.5395 12.8612 10.2739 12.7527 9.96461 12.7527C9.65544 12.7527 9.38989 12.8612 9.16794 13.0782C8.94614 13.295 8.83523 13.5585 8.83523 13.8688C8.83523 14.1791 8.94614 14.4452 9.16794 14.6671C9.38989 14.8891 9.65544 15 9.96461 15ZM9.08523 11.8125H10.8415C10.8415 11.33 10.8886 10.9772 10.9827 10.7542C11.077 10.531 11.2782 10.2684 11.5861 9.96648C12.0486 9.52565 12.3716 9.13246 12.5552 8.7869C12.7388 8.44135 12.8307 8.05864 12.8307 7.63877C12.8307 6.84586 12.5781 6.20391 12.0729 5.71294C11.5678 5.22197 10.9125 4.97648 10.1069 4.97648C9.36718 4.97648 8.71725 5.18364 8.15711 5.59794C7.59711 6.01211 7.2051 6.56218 6.98107 7.24815L8.59419 7.89315C8.73489 7.48857 8.93086 7.18253 9.18211 6.97503C9.43336 6.76766 9.70808 6.66398 10.0063 6.66398C10.301 6.66398 10.5538 6.75544 10.7646 6.93836C10.9753 7.12141 11.0807 7.36996 11.0807 7.68398C11.0807 7.96412 10.9789 8.22329 10.7754 8.46148C10.5718 8.69968 10.3656 8.91329 10.1567 9.10232C9.70197 9.53107 9.40968 9.90155 9.27982 10.2138C9.1501 10.526 9.08523 11.0589 9.08523 11.8125ZM10 18.4004C8.84003 18.4004 7.75037 18.182 6.73107 17.745C5.7119 17.3081 4.82037 16.7076 4.05648 15.9436C3.29246 15.1797 2.69197 14.2882 2.25503 13.269C1.81808 12.2497 1.59961 11.16 1.59961 10C1.59961 8.82614 1.81808 7.73301 2.25503 6.72065C2.69197 5.70843 3.29246 4.82037 4.05648 4.05648C4.82037 3.29246 5.7119 2.69197 6.73107 2.25503C7.75037 1.81808 8.84003 1.59961 10 1.59961C11.1739 1.59961 12.267 1.81808 13.2794 2.25503C14.2916 2.69197 15.1797 3.29246 15.9436 4.05648C16.7076 4.82037 17.3081 5.70843 17.745 6.72065C18.182 7.73301 18.4004 8.82614 18.4004 10C18.4004 11.16 18.182 12.2497 17.745 13.269C17.3081 14.2882 16.7076 15.1797 15.9436 15.9436C15.1797 16.7076 14.2916 17.3081 13.2794 17.745C12.267 18.182 11.1739 18.4004 10 18.4004ZM10 16.3588C11.7742 16.3588 13.2775 15.7425 14.51 14.51C15.7425 13.2775 16.3588 11.7742 16.3588 10C16.3588 8.22586 15.7425 6.72253 14.51 5.49003C13.2775 4.25753 11.7742 3.64128 10 3.64128C8.22586 3.64128 6.72253 4.25753 5.49003 5.49003C4.25753 6.72253 3.64128 8.22586 3.64128 10C3.64128 11.7742 4.25753 13.2775 5.49003 14.51C6.72253 15.7425 8.22586 16.3588 10 16.3588Z"
                                    fill="#F7DE8C"
                                  />
                                </g>
                              </svg>
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {item.secondaryCta ? (
                    <Link
                      href={item.secondaryCta.href || "/"}
                      className={cn(
                        "inline-flex items-center justify-center",
                        "h-10 md:h-11 basis-xl rounded-lg w-[120px] text-center leading-tight",
                        "bg-yellow-900/40",
                        "text-sm text-yellow-500 font-bold"
                      )}
                    >
                      {item.secondaryCta.label}
                    </Link>
                  ) : null}

                  {item.primaryCta ? (
                    <Link
                      href={item.primaryCta.href || "/"}
                      className={cn(
                        "inline-flex items-center justify-center",
                        "h-10 md:h-11 basis-xl  rounded-lg",
                        "bg-primary text-primary-foreground",
                        "hover:opacity-90 transition-opacity text-sm font-semibold"
                      )}
                    >
                      {item.primaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            </BaseCard>
          </AnimateOnView>
        ))}

        <AnimateOnView delay={serviceitems.length * 0.2}>
          <div className="snap-start shrink-0 w-[280px]">
            <aside className="relative overflow-hidden bg-yellow-100 rounded-[16px] w-full min-h-[520px] md:min-h-[767px] px-6 pb-5 md:px-8 flex flex-col justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="347"
                viewBox="0 0 128 347"
                fill="none"
                className="absolute top-0 left-0"
              >
                <path
                  d="M124.888 343.504V103.675C124.888 49.8591 102.233 45.8868 47.8584 27.3541C-6.11296 8.95867 -117.949 -28.2562 -167.121 -44.5641C-271.841 -79.2956 -296.621 -48.4773 -313.629 -20.1461C-336.184 17.4273 -342.998 29.3111 -350.382 42.0313L-392.772 113.376C-415.513 151.651 -435.419 285.728 -381.684 315.875C-334.604 342.288 -329.861 345.531 -333.166 343.504H124.888Z"
                  stroke="url(#paint0_linear_1161_2539)"
                  strokeWidth="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1161_2539"
                    x1="-145.556"
                    y1="-60"
                    x2="-145.556"
                    y2="344"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F39E8A" />
                    <stop offset="1" stopColor="#F39E8A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative">
                <h3 className="font-freight text-yellow-900 font-semibold text-[32px] md:text-[32px] leading-snug">
                  {lastcard.title}
                </h3>
                {lastcard.subtitle ? (
                  <p className="mt-3 text-grey-500 text-base md:text-lg">
                    {lastcard.subtitle}
                  </p>
                ) : null}
                {lastcard.cta ? (
                  <div className="mt-12">
                    <Link
                      href={lastcard.cta.href || "/"}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-yellow-900 text-yellow-500 px-5 h-14 text-base md:text-sm font-semibold hover:opacity-90"
                    >
                      <span>{lastcard.cta.label}</span>
                      <span aria-hidden className="text-yellow-500 font-bold">
                        →
                      </span>
                    </Link>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </AnimateOnView>
      </div>
    </SectionWrapper>
  );
}
