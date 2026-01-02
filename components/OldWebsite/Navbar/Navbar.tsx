"use client";
// COMPONENTS
import Link from "next/link";
import Image from "next/image";

import NavDropdown from "./NavDropdown";
import { useState } from "react";

import { NAV_MENU } from "./constants";
import { FaPhone } from "react-icons/fa6";

import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";
import PhoneWrapper from "../PhoneWrapper";
import type { NavProps } from "./types";

// CUSTOM COMPONENTS

// STYLES

function Nav({
  hideLinks = false,
  showOfferMsg = true,
  landingPageContent,
}: NavProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const { isMobile } = useTailwindBreakpoint();

  const handleDropdown = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {showOfferMsg && (
        <div
          className="text-center w-full py-3 text-lg"
          style={{ backgroundColor: "lightgreen" }}
        >
          {dayjs().format("MMMM")} Sale: Grab yourself a bargain on surveys and
          valuation reports.
        </div>
      )}
      <div className="bg-secondary-old flex flex-col">
        <div className="self-center flex w-full max-w-[1250px] justify-between mt-3.5 md:mb-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center items-center">
          <div className="flex w-full md:w-auto justify-between items-center px-5">
            <div className="relative h-[60px] md:w-[240px] w-[160px]">
              <Link href="/">
                <Image
                  fill
                  alt="Logo"
                  loading="lazy"
                  src="https://houzecheck-pdfreports.s3.eu-west-2.amazonaws.com/HouzecheckWebsite/logo2.png"
                  className="object-contain"
                />
              </Link>
            </div>
            <button
              className={cn("block md:hidden", {
                block: !hideLinks,
                hidden: hideLinks,
              })}
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.87408 23H25.8741C26.5616 23 27.1241 22.4375 27.1241 21.75C27.1241 21.0625 26.5616 20.5 25.8741 20.5H5.87408C5.18658 20.5 4.62408 21.0625 4.62408 21.75C4.62408 22.4375 5.18658 23 5.87408 23ZM5.87408 16.75H25.8741C26.5616 16.75 27.1241 16.1875 27.1241 15.5C27.1241 14.8125 26.5616 14.25 25.8741 14.25H5.87408C5.18658 14.25 4.62408 14.8125 4.62408 15.5C4.62408 16.1875 5.18658 16.75 5.87408 16.75ZM4.62408 9.25C4.62408 9.9375 5.18658 10.5 5.87408 10.5H25.8741C26.5616 10.5 27.1241 9.9375 27.1241 9.25C27.1241 8.5625 26.5616 8 25.8741 8H5.87408C5.18658 8 4.62408 8.5625 4.62408 9.25Z"
                  fill="white"
                />
              </svg>
            </button>
            {hideLinks && isMobile && (
              <PhoneWrapper landingPageContent={landingPageContent}>
                <a
                  href="tel:0330 113 1133"
                  id="tel-num"
                  className="text-white text-lg md:text-xl font-bold tel-num mt-0 py-0 justify-center items-center self-center flex gap-2 bg-transparent w-auto"
                >
                  <FaPhone
                    className="text-white text-base"
                    width="26"
                    height="26"
                  />
                  0330 113 1133
                </a>
              </PhoneWrapper>
            )}
          </div>
          {!hideLinks && (
            <div
              className={`${
                menuVisible ? "block" : "hidden"
              } text-center md:items-start self-center md:flex w-[650px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center text-sm md:text-base transition-all duration-300 ease-in-out`}
            >
              {NAV_MENU.map((obj, i) => (
                <NavDropdown
                  key={obj.title}
                  obj={obj}
                  index={i}
                  setActiveIndex={handleDropdown}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          )}
          {(!hideLinks || !isMobile) && (
            <PhoneWrapper landingPageContent={landingPageContent}>
              <a
                href="tel:0330 113 1133"
                id="tel-num"
                className="text-black md:text-white text-base md:text-xl font-bold tel-num py-1 mt-4 md:mt-0 md:py-0 justify-center items-center self-center flex gap-2 bg-light-blue md:bg-transparent w-full md:w-auto"
              >
                <FaPhone
                  className="text-black md:text-white text-base"
                  width="26"
                  height="26"
                />
                0330 113 1133
              </a>
            </PhoneWrapper>
          )}
        </div>
      </div>
    </>
  );
}

// const DropdownFn = () => {
//   return <div></div>;
// };

export default Nav;
