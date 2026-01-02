"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { sendGTMEvent } from "@next/third-parties/google";
import Truspilot from "@/components/Trustpilot";
import { cn } from "@/lib/utils";
import { useCreateLead } from "@/hooks/useMiscApi";
import { HeroFormProps } from "../../../types";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const Form: React.FC<HeroFormProps> = ({
  isBeforeWrapUp: defaultIsBeforeWrapUp,
  userKey,
  landingPageContent,
  formProps,
}) => {
  const [isBeforeWrapUp, setIsBeforeWrapUp] = useState(defaultIsBeforeWrapUp);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    property_postcode: "",
    u_message: "",
    u_channel: "web",
    contact_number: "",
  });

  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_term = searchParams.get("utm_term");
  const gclid = searchParams.get("gclid");

  const router = useRouter();

  const {
    mutate: createLead,
    isError,
    isPending: isCreatingLead,
    error,
    data,
    isSuccess,
  } = useCreateLead();

  const className = {
    input:
      "text-xs md:text-base rounded-md border outline-none bg-light-blue-old border-[#8FCDF9] px-5 md:px-7 h-[40px] md:h-[50px] w-full",
  };
  const isSaturday = dayjs().tz("Europe/London").day() === 6;

  const bookHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringfiedFormData = {
      ...formData,
      userKey,
      business_phone: formData.contact_number,
      u_property_postcode: formData.property_postcode.replace(/\s+/g, ""), // removes whitespace
      web_stage: "LandingNew",
      u_utm_source: utm_source || "",
      u_utm_medium: utm_medium || "",
      u_utm_campaign: utm_campaign || "",
      u_utm_term: utm_term || "",
      gclid: gclid || "",
    };
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("set", "user_data", {
        email: formData.email,
      });
    }
    createLead({ body: stringfiedFormData });
  };

  useEffect(() => {
    const updateTimer = () => {
      let now = dayjs().tz("Europe/London");
      const now2 = dayjs().tz("Europe/London");
      const isSunday = now.day() === 0;
      const isSaturday = now.day() === 6;
      let startHour = 9;
      let targetHour = 17;
      let targetMinute = 30;

      if (landingPageContent?.count_down_timer_till_2_on_sat) {
        if (isSaturday) {
          startHour = 10;
          targetHour = 14;
          targetMinute = 0;
        }
        if (isSunday) {
          now = now.add(1, "day");
        }
      }

      const todayStart = now.hour(startHour).minute(0).second(0);
      const todayEnd = now.hour(targetHour).minute(targetMinute).second(0);

      if (now2.isBefore(todayStart)) {
        setIsBeforeWrapUp(false);
      } else if (now2.isBefore(todayEnd)) {
        setIsBeforeWrapUp(true);
      } else {
        setIsBeforeWrapUp(false);
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      try {
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion(formData, data?.data?.result.lead_id);
        }
      } catch (e) {
        console.log("error in conversion");
      }
      sendGTMEvent({
        event: "ld_experiment_cta_clicked",
        experiment_name: landingPageContent?.test_key,
        variant: landingPageContent?.key,
      });
      router.push(`/lead?interaction_id=${data?.data?.result?.interaction_id}`);
    }
    if (isError) {
      Swal.fire({
        title: "",
        text: "Something Went Wrong!",
        icon: "error",
      });
    }
  }, [isError, error, data, error, isSuccess]);

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-2xl py-3 md:py-5 space-y-4 relative">
        <div className="absolute h-[95px] w-[95px] md:h-[143px] md:w-[143px] -top-5 -right-5 md:-top-12 md:-right-12 z-10 flicker">
          <Image
            fill
            alt="Offer image"
            src={
              isBeforeWrapUp
                ? isSaturday &&
                  landingPageContent?.count_down_timer_till_2_on_sat
                  ? "/assets/images/old-website/offer-online-2.svg"
                  : "/assets/images/old-website/offer-online.png"
                : !landingPageContent?.show_clock
                  ? "/assets/images/old-website/offer-offline-2.svg"
                  : "/assets/images/old-website/offer-offline.png"
            }
          />
        </div>
        <div className="relative h-[32px]">
          <Image
            fill
            alt="Houzecheck logo"
            src="/assets/images/old-website/hc-logo.svg"
          />
        </div>
        <div className="px-5">
          <h2 className="text-lg md:text-2xl font-bold text-center text-[#223654] leading-snug whitespace-break-spaces">
            {landingPageContent?.hero_form_title ||
              "Get your RICS survey or\nvaluation booked today"}
          </h2>
        </div>
        <form
          onSubmit={(e) => bookHandler(e)}
          className="space-y-4 text-black"
          id="lp-surveyor-new-form"
        >
          <div className="px-5 md:px-7 space-y-4">
            <input
              id="property_postcode"
              type="text"
              placeholder="Property postcode"
              className={className.input}
              onChange={(e) =>
                setFormData({ ...formData, property_postcode: e.target.value })
              }
              required
            />
            <input
              id="contact_number"
              type="text"
              placeholder="Phone number"
              className={className.input}
              onChange={(e) =>
                setFormData({ ...formData, contact_number: e.target.value })
              }
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className={className.input}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              id="first_name"
              type="text"
              placeholder="Full name"
              className={className.input}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              required
            />
            <input type="hidden" id="gclid_field" name="gclid_field" value="" />
          </div>
          <div className="w-full bg-[#fbeaea] text-[#e05b5b] text-center text-sm py-2 mt-2 mb-2">
            150+ RICS surveyors nationwide{" "}
            <span className="text-green-600">✅</span>
          </div>
          <div className="px-5 md:px-7">
            <button
              id={formProps?.submitButtonId || "lp-surveyor-submit-button"}
              type="submit"
              className={cn(
                "w-full bg-secondary-old text-white py-3 rounded-md text-sm md:text-lg",
                { "opacity-50 cursor-not-allowed": isCreatingLead }
              )}
              disabled={isCreatingLead}
            >
              {isCreatingLead
                ? "SUBMITTING"
                : landingPageContent?.hero_form_cta_label || "CLICK TO BOOK"}
            </button>
          </div>
        </form>
        <div className="text-center px-7">
          <Truspilot />
        </div>
      </div>
      <Script id="gclid-script">
        {`
        function getParam(p) {
        var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        }

        function getExpiryRecord(value) {
        var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds

        var expiryDate = new Date().getTime() + expiryPeriod;
        return {
        value: value,
        expiryDate: expiryDate
        };
        }

        function addGclid() {
        var gclidParam = getParam('gclid');
        var gclidFormFields = ['gclid_field', 'foobar']; // all possible gclid form field ids here
        var gclidRecord = null;
        var currGclidFormField;

        var gclsrcParam = getParam('gclsrc');
        var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

        gclidFormFields.forEach(function (field) {
        if (document.getElementById(field)) {
        currGclidFormField = document.getElementById(field);
        }
        });

        if (gclidParam && isGclsrcValid) {
        gclidRecord = getExpiryRecord(gclidParam);
        localStorage.setItem('gclid', JSON.stringify(gclidRecord));
        }

        var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
        var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

        if (currGclidFormField && isGclidValid) {
        currGclidFormField.value = gclid.value;
            }
          }
        window.addEventListener('load', addGclid);
      
        `}
      </Script>
    </>
  );
};

export default Form;
