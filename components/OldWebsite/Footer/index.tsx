import Link from "next/link";
import { FOOTER_COLUMN_DATA } from "./constants";
import Image from "next/image";
import "./index.scss";
import Script from "next/script";

import { cn } from "@/lib/utils";
import PhoneWrapper from "@/app/(old)/lp_surveyor/PhoneWrapper";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({
  hideLinks = false,
  landingPageContent,
  theme = "dark",
}) => (
  <div
    className={cn("w-full", {
      "text-white bg-dark-blue-old": theme === "dark",
      "text-black bg-white": theme === "light",
    })}
  >
    <div className="max-w-[1250px] px-5 mx-auto">
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-10">
        <div>
          <span className="font-bold text-lg md:text-2xl">Houzecheck</span>
          <div className="md:text-sm text-xs mt-2">
            <p className={cn({ "md:hidden": hideLinks })}>
              A <span className="font-bold">Cheaper</span>,
              <span className="font-bold"> Faster</span> and
              <span className="font-bold"> Objective</span> way to
              <br />
              survey and value residential property
            </p>
            <p
              className={cn("text-base hidden", {
                "md:block": hideLinks,
              })}
            >
              A <span className="font-bold">Cheaper</span>,
              <span className="font-bold"> Faster</span> and
              <span className="font-bold"> Objective</span> way to survey and
              <br />
              value residential property
            </p>
            <div className={cn({ "md:hidden": hideLinks })}>
              <p className="mt-4">
                Office hours: <br />
                <strong>Monday to Friday 9:00 to 17:30</strong>
                <br />
                <strong>Saturdays 9:00 to 16:00</strong>
              </p>
              <PhoneWrapper landingPageContent={landingPageContent}>
                <a
                  href="tel:0330 113 1133"
                  id="tel-num"
                  className="tel-num text-bold"
                >
                  Call: 0330 113 1133
                </a>
              </PhoneWrapper>
              <Link href="mailto:hello@houzecheck.com">
                <p className="mt-4 cursor-pointer">
                  Email: <br />
                  <strong>hello@houzecheck.com</strong>
                </p>
              </Link>
            </div>
          </div>
        </div>
        {!hideLinks &&
          FOOTER_COLUMN_DATA.map(({ title, content }, colIndex) => (
            <div key={colIndex} className="hidden md:block">
              <p className="text-2xl mb-6">{title}</p>
              {content.map(({ label, url }, rowIndex) => (
                <Link href={url} key={rowIndex}>
                  <p className="mt-4">{label}</p>
                </Link>
              ))}
            </div>
          ))}
        {!hideLinks && (
          <Accordion
            type="single"
            collapsible
            className="md:hidden footer-columns mt-4"
          >
            {FOOTER_COLUMN_DATA.map(({ title, content }, colIndex) => (
              <AccordionItem value={`footer-col-${colIndex}`} key={colIndex}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                  {content.map(({ label, url }, rowIndex) => (
                    <Link href={url} key={rowIndex}>
                      <p className="mt-4">{label}</p>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
        {hideLinks && (
          <>
            <div
              className={cn("", {
                "hidden md:block": hideLinks,
              })}
            >
              <PhoneWrapper landingPageContent={landingPageContent}>
                <a
                  href="tel:0330 113 1133"
                  id="tel-num"
                  className="tel-num items-start flex flex-col"
                >
                  Call: <br />
                  <strong>0330 113 1133</strong>
                </a>
              </PhoneWrapper>
              <Link href="mailto:hello@houzecheck.com">
                <p className="mt-4 cursor-pointer">
                  Email: <br />
                  <strong>hello@houzecheck.com</strong>
                </p>
              </Link>
            </div>
            <p
              className={cn("", {
                "hidden md:block": hideLinks,
              })}
            >
              Office hours: <br />
              <strong>Monday to Friday 9:00 to 17:30</strong>
              <br />
              <strong>Saturdays 9:00 to 16:00</strong>
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-10">
        <p className="text-xs md:text-base">
          Our local RICS surveyors cover all postcodes in England and parts of
          North and South Wales.
        </p>
        <div className="flex item-center my-auto">
          <Image
            className="object-contain"
            src="/assets/images/old-website/smartphone.webp"
            alt="Smartphone"
            width={18}
            height={18}
          />
          <p className="pl-2 text-xs">Safe and Fast online payments</p>
        </div>
        <div className="flex item-center my-auto">
          <Image
            className="object-contain"
            src="/assets/images/old-website/credit-card.webp"
            alt="Credit card"
            width={18}
            height={18}
          />
          <p className="pl-2 text-xs">
            All major Credit and Debit card accepted
          </p>
        </div>
      </div>
      <div className="w-full md:items-end flex flex-col p-4 md:p-10 pt-0 md:pt-0">
        <Image
          src="/assets/images/old-website/payment-methods.webp"
          alt="Payment methods"
          width={268}
          height={44}
        />
      </div>
    </div>
    <p className="text-center py-6 text-xs px-2">
      Copyright © 2023 Houzecheck Limited and Houzecheck Surveying Limited.
      <br />
      <br />
      Houzecheck Surveying Limited is a wholly owned subsidiary of Houzecheck
      Limited and is a RICS regulated firm.
    </p>
    <Script id="call-conversion">{`gtag('config', 'AW-820666851/3EOiCJ_uktsBEOPDqYcD', {
        'phone_conversion_number': '0330 113 1133',
        'phone_conversion_css_class':'tel-num'
      });`}</Script>
  </div>
);

export default Footer;
