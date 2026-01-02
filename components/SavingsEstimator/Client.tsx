"use client";

import Image from "next/image";
import { Button } from "../Button";
import { getResolvedIcon } from "@/lib/iconUtils";
import AnimateOnView from "../ui/animate-on-view";
import {
  SavingsEstimatorContent,
  SavingsEstimatorTopDefectsData,
} from "./types";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  EstimatorInfoResponse,
  useEstimatorInfo,
} from "@/hooks/useEstimatorInfo";
import Loader from "./Loader";
import TypingText from "../ui/TypingText";

const RightPlaceholder = ({
  top,
  middle,
  bottom,
}: SavingsEstimatorContent["rightSection"]["placeholderImages"]) => {
  return (
    <div className="relative md:w-[84%] h-[212px] md:h-[462px]">
      <AnimateOnView className="rounded-md md:rounded-2xl shadow-2xl h-full w-full bg-white p-2 md:p-6">
        <p className="font-medium text-xs md:text-2xl text-foreground">
          {middle.text}
        </p>
        <div className="w-full h-full relative">
          <Image
            src="/assets/images/savings-graph.webp"
            alt="savings-graph"
            fill
            className="object-contain"
          />
        </div>
      </AnimateOnView>
      <AnimateOnView
        delay={0.2}
        className="rounded-md md:rounded-2xl shadow-2xl h-[55px] w-[173px] md:h-[120px] md:w-[370px] bg-white p-3 md:p-6 absolute -top-[20%] -right-[10%] flex flex-col justify-between"
      >
        <p className="font-medium text-[10px] md:text-lg text-muted-foreground text-center">
          {top.text}
        </p>
        <div className="bg-error-100 h-2.5 md:h-6 w-full" />
      </AnimateOnView>
      <AnimateOnView
        delay={0.2}
        className="rounded-md md:rounded-2xl shadow-2xl h-[90px] w-[180px] md:h-[200px] md:w-[390px] bg-success-100 p-2 md:p-6 border border-whatsapp-green absolute -bottom-[23%] -left-[10%] flex flex-col justify-between"
      >
        <div className="flex items-center space-x-1 md:space-x-2 pl-2 md:pl-0">
          <img
            src={bottom.icon}
            alt="bulb-icon"
            className="-ml-2 size-4 md:size-9"
          />
          <p className="font-medium text-xs md:text-3xl text-success-500">
            {bottom.text}
          </p>
        </div>
        <div className="bg-white h-2.5 md:h-6 w-[65%]" />
        <div className="bg-white h-4 md:h-9 w-full" />
      </AnimateOnView>
    </div>
  );
};

const RightNoData = ({
  headerIcon,
  title,
  subheading,
  averageData,
  disclaimer,
  postcode,
  topDefectsData,
}: SavingsEstimatorContent["rightSection"]["noData"] & {
  postcode: string;
  topDefectsData: SavingsEstimatorTopDefectsData;
}) => {
  return (
    <div className="z-10">
      <AnimateOnView className="bg-warning-100 rounded-2xl px-6 py-10 flex flex-col items-center space-y-8">
        {getResolvedIcon({
          icon: headerIcon,
          ariaLabel: "no-data-icon",
          className: "size-10 mt-2 text-error-500",
        })}
        <div>
          <p className="text-center text-error-500 font-medium text-lg">
            {title}
          </p>
          <p className="text-center font-medium text-input text-xs mt-2">
            {subheading.replace("<postcode>", postcode.toUpperCase())}
          </p>
        </div>
        <div className="space-y-4 text-foreground text-base w-full">
          <p className="text-center font-medium text-muted-foreground text-xs">
            {averageData.label}
          </p>
          <div className="bg-background rounded-lg p-5">
            <p>
              {averageData.data1.replace(
                "<average_repair_cost>",
                `£${topDefectsData.total_low} - £${topDefectsData.total_high}`
              )}
            </p>
          </div>
          <div className="bg-background rounded-lg p-5">
            <p>
              {averageData.data2.replace(
                "<common_issues>",
                `${topDefectsData.top_defects}`
              )}
            </p>
          </div>
          <div className="bg-background rounded-lg p-5">
            <p>
              {averageData.data3.replace(
                "<likelihood_percentage>",
                `${topDefectsData.average_recurrence_percentage}`
              )}
            </p>
          </div>
        </div>
      </AnimateOnView>
      <AnimateOnView delay={0.15}>
        <p className="text-input text-xs mt-4">
          {disclaimer
            .replace("<no_of_surveys>", `${topDefectsData.jobs}+`)
            .replace("<postcode>", postcode.toUpperCase())}
        </p>
      </AnimateOnView>
    </div>
  );
};

const RightReport = ({
  title,
  action1,
  bodyText,
  info,
  disclaimer,
  primaryBtn,
  secondaryBtn,
  postcode,
  reportData,
}: SavingsEstimatorContent["rightSection"]["report"] & {
  postcode: string;
  reportData: EstimatorInfoResponse;
}) => {
  return (
    <div className="z-10 space-y-6">
      <AnimateOnView className="bg-warning-100 rounded-2xl px-6 py-10 space-y-5">
        <p className="text-center font-medium text-lg text-foreground">
          {title}
        </p>
        <div className="flex flex-col items-center bg-background rounded-2xl px-5 py-10 space-y-4">
          <h1 className="text-secondary font-medium font-freight text-[40px] md:text-[56px] -mt-8">
            £{reportData.total_low} - £{reportData.total_high}
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <img
                src={action1.icon}
                alt="bulb-icon"
                className="-ml-2 h-6 w-6"
              />
              <p className="font-medium text-lg text-success-500">
                {action1.label}
              </p>
            </div>
            <p className="text-muted-foreground text-center text-xs md:text-base mt-2">
              {bodyText.replace(
                "<range>",
                `£${Math.round(reportData.total_low / 1000)}k - £${Math.round(reportData.total_high / 1000)}k`
              )}
            </p>
          </div>
          <div className="flex items-center text-input space-x-1">
            {getResolvedIcon({
              icon: info.icon,
              ariaLabel: "info-icon",
              className: "size-5",
            })}
            <h4 className="font-medium text-xs">{info.label}</h4>
          </div>
        </div>
      </AnimateOnView>
      <AnimateOnView delay={0.15}>
        <p className="text-input text-xs mt-4">
          {disclaimer
            .replace("<postcode>", postcode.toUpperCase())
            .replace("<no_of_surveys>", `${reportData.jobs}`)}
        </p>
      </AnimateOnView>
      <AnimateOnView
        delay={2 * 0.15}
        className="flex justify-center flex-col md:flex-row items-center"
      >
        <Link href={primaryBtn.url || "/"}>
          <Button rightIcon={primaryBtn.icon} iconClassName="size-6">
            {primaryBtn.label}
          </Button>
        </Link>
        {/* <Button variant="ghost">{secondaryBtn.label}</Button> */}
      </AnimateOnView>
    </div>
  );
};

const SavingsEstimatorClient = ({
  eyebrow,
  title,
  subheading,
  inputLabel,
  searchBtn,
  info,
  rightSection,
  topDefectsData,
}: SavingsEstimatorContent & {
  topDefectsData: SavingsEstimatorTopDefectsData;
}) => {
  const [postcode, setPostcode] = useState("");
  const [searchPostcode, setSearchPostcode] = useState("");
  const [hasFetched, setHasFetched] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const {
    data: reportData,
    isLoading,
    refetch,
  } = useEstimatorInfo({ postcode: searchPostcode });

  useEffect(() => {
    if (searchPostcode) {
      refetch();
      setHasFetched(true);
    }
  }, [searchPostcode]);

  return (
    <section>
      {/* md:max-w-[110rem] px-6 md:px-10  */}
      <div className="mx-auto flex flex-col xl:flex-row min-h-225">
        <div className="flex-1 md:pr-10 flex flex-col justify-center items-center xl:items-end py-10">
          <div className="w-full md:max-w-[51.5rem] space-y-10 px-6 md:px-0 md:pl-10">
            <AnimateOnView className="space-y-2 text-center md:text-left">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="font-medium text-[28px] md:text-[40px] font-freight text-foreground lining-nums proportional-nums">
                {title}
              </h2>
              <p className="font-medium text-base md:text-lg text-muted-foreground">
                {subheading}
              </p>
            </AnimateOnView>
            <AnimateOnView className="mt-4 flex flex-col items-center md:items-start">
              <p className="font-medium text-base md:text-lg text-foreground">
                {inputLabel}
              </p>
              <div className="border-b-3 border-b-foreground flex items-center w-[258px]">
                <input
                  className="outline-none border-0 rounded-none py-6 font-semibold text-3xl text-foreground max-w-[220px]"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  onFocus={() => setShowAnimation(false)}
                  onBlur={() => !postcode && setShowAnimation(true)}
                />
                {showAnimation && (
                  <TypingText
                    text={["SW1A 0AA", "AB1 2CD"]}
                    typingSpeed={75}
                    loop={true}
                    pauseDuration={1500}
                    showCursor={true}
                    className="absolute font-semibold text-3xl text-yellow-900 opacity-[0.2] pointer-events-none"
                    cursorClassName="h-3 ml-1"
                    textColors={["#1f1801"]}
                    variableSpeed={{ min: 50, max: 120 }}
                  />
                )}
                {!!postcode && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setPostcode("");
                      setShowAnimation(true);
                    }}
                  >
                    <MdClose className="text-foreground" />
                  </Button>
                )}
              </div>
              <Button
                disabled={!postcode}
                rightIcon={searchBtn.icon}
                className="mt-10"
                iconClassName="size-5"
                onClick={() => {
                  setSearchPostcode(postcode);
                }}
              >
                {searchBtn.label}
              </Button>
            </AnimateOnView>
            <AnimateOnView className="bg-background flex rounded-[8px] text-muted-foreground p-5 space-x-2">
              {getResolvedIcon({
                icon: info.icon,
                ariaLabel: "info-icon",
                className: "size-4 mt-2 shrink-0",
              })}
              <div>
                <h4 className="font-medium font-freight text-base md:text-xl">
                  {info.label.replace(
                    "<range>",
                    `£${Math.round(topDefectsData.total_low / 1000)}k - £${Math.round(topDefectsData.total_high / 1000)}k`
                  )}
                </h4>
                {!!info.disclaimer && (
                  <p className="font-freight text-xs md:text-base">
                    {info.disclaimer}
                  </p>
                )}
              </div>
            </AnimateOnView>
          </div>
        </div>
        <div className="flex-1 bg-background flex flex-col items-center xl:items-start justify-center relative overflow-hidden md:px-10 py-10 min-h-[460px] md:min-h-[inherit]">
          <div className="w-full md:max-w-[51.5rem] flex flex-col items-center">
            <div className="absolute md:bottom-40 -left-[50%] md:-right-20 top-0 md:-left-[25%] w-[22.5rem] h-[16.875rem] md:w-[33.75rem] z-0">
              <Image
                src="/assets/illustrations/house-shape.svg"
                alt="house shape"
                fill
                className="object-contain scale-x-[-1]"
                sizes="(max-width: 768px) 16.875rem, 22.5rem"
              />
            </div>
            {isLoading && (
              <>
                <Loader />
                <p className="text-foreground text-lg font-medium">
                  {rightSection.loading.title}
                </p>
                <p className="text-input font-medium text-xs mt-2">
                  {rightSection.loading.subheading}
                </p>
              </>
            )}
            {!isLoading && !hasFetched && (
              <RightPlaceholder {...rightSection.placeholderImages} />
            )}
            {!isLoading && hasFetched && (
              <div className="px-6 md:px-0 z-10">
                {!!reportData?.defects?.length && (
                  <RightReport
                    {...rightSection.report}
                    postcode={searchPostcode}
                    reportData={reportData}
                  />
                )}
                {!reportData?.defects?.length && (
                  <RightNoData
                    {...rightSection.noData}
                    topDefectsData={topDefectsData}
                    postcode={searchPostcode}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsEstimatorClient;
