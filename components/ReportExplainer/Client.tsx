"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReportExplainerContent } from "./types";
import { ReportIcon } from "./icons";
import AnimateOnView from "../ui/animate-on-view";
import { SectionWrapper } from "../SectionWrapper";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

export default function ReportExplainerClient({
  eyebrow,
  title,
  description,
  tabs,
}: ReportExplainerContent) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const { isMobile } = useTailwindBreakpoint();
  const activeTab = tabs[activeTabIndex] || tabs[0];

  return (
    <SectionWrapper
      className="bg-yellow-900 py-12 md:py-20 "
      eyebrow={eyebrow}
      title={
        title
          ? {
              text: title,
              className: "text-yellow-100",
            }
          : undefined
      }
      subtitle={
        description
          ? { text: description, className: "text-grey-100" }
          : undefined
      }
    >
      {/* Tabs and Content Container */}
      <div className="h-198.5 md:h-auto flex flex-col-reverse md:flex-col lg:flex-row overflow-hidden relative">
        {/* Background Image */}
        {activeTab?.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={
                isMobile
                  ? activeTab.mobileImage || activeTab.image
                  : activeTab.image
              }
              alt={activeTab.label}
              fill
              className="object-cover object-center rounded-3xl"
              priority
            />
          </div>
        )}
        {/* Left Sidebar - Tabs */}
        <div className="relative z-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 md:after:h-28.5 after:bg-linear-to-b after:from-transparent after:to-yellow-900 after:pointer-events-none after:z-1">
          <AnimateOnView delay={0.2} direction="right">
            <div className="flex flex-row md:flex-col lg:h-198.5 overflow-x-auto md:overflow-y-auto align-flex-end backdrop-blur-md rounded-b-[1.4375rem] md:rounded-l-[1.4375rem]">
              {tabs.map((tab, index) => {
                const isActive = index === activeTabIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTabIndex(index)}
                    className={cn(
                      "my-0 w-45.75 md:w-60 shrink-0 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 px-3.5 py-8 transition-all",
                      "border-t-8 md:border-r-0 md:border-t-0 border-t-transparent cursor-pointer",
                      {
                        "bg-yellow-900 border-t-8 md:border-r-8 border-yellow-100":
                          isActive,
                        "bg-yellow-900/80 hover:bg-yellow-900/90": !isActive,
                      }
                    )}
                    aria-label={tab.label}
                    aria-current={isActive ? "true" : "false"}
                    role="tab"
                    data-slot="report-tab"
                  >
                    <div className="shrink-0">
                      <ReportIcon
                        iconUrl={tab.iconUrl}
                        className="text-yellow-100"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-1.5 md:p-1 flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-xs md:text-sm leading-4 md:leading-4.5 text-center md:text-left tracking-normal text-yellow-500"
                        )}
                      >
                        {tab.label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </AnimateOnView>
        </div>

        {/* Right Content Area */}
        <div className="relative flex-1 flex items-end md:items-start gap-2 p-6 lg:p-6 min-h-100 lg:min-h-198.5">
          {activeTab && (
            <AnimateOnView key={activeTab.label} delay={0.3} direction="right">
              <div className="w-full z-1 lg:max-w-85.75 backdrop-blur-md bg-yellow-900/80 rounded-2xl px-6 py-7">
                <div className="flex flex-col gap-4 px-1">
                  <h3 className="text-yellow-500 text-[1rem] md:text-[1.125rem] leading-6 md:leading-7 font-medium">
                    {activeTab.title}
                  </h3>
                  <p className="text-grey-100 text-sm md:text-base leading-6 md:leading-7 font-normal">
                    {activeTab.description}
                  </p>
                </div>
              </div>
            </AnimateOnView>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
