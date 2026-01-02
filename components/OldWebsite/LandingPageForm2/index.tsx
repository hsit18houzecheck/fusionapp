"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { sendGTMEvent } from "@next/third-parties/google";
import type { LandingPageForm2Props, LeadFormData } from "./types";

const LandingPageForm = ({
  showSurveyorNumber = false,
  formId,
  submitButtonId,
  pushToDataLayer = false,
  dataLayerEvent,
}: LandingPageForm2Props) => {
  const [postcode, setPostcode] = useState<string>("");
  const [formData, setFormData] = useState<LeadFormData>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const today = new Date();

  const [currStep, setCurrStep] = useState<number>(1);
  const [apiStatus, setApiStatus] = useState<{
    status: string;
    message: string;
  }>({ status: "", message: "" });

  const router = useRouter();

  const searchParams = useSearchParams();

  function addWorkingDays(date: Date, days: number) {
    const newDate = new Date(date.getTime());
    const dayOfWeek = newDate.getDay();

    for (let i = 0; i < days; i++) {
      newDate.setDate(newDate.getDate() + 1);
      while (newDate.getDay() === 0 || newDate.getDay() === 6) {
        newDate.setDate(newDate.getDate() + 1);
      }
    }

    return newDate;
  }

  function addOrdinalSuffix(day: number): string {
    if (day === 1 || day === 21 || day === 31) {
      return `${day}st`;
    } else if (day === 2 || day === 22) {
      return `${day}nd`;
    } else if (day === 3 || day === 23) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  }

  function getThirdWorkingDayFromDate(date: Date): string {
    const threeDaysLater = addWorkingDays(date, 2);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
    };
    const formattedDate = threeDaysLater.toLocaleDateString("en-US", options);
    const month = formattedDate.split(" ")[0];
    const day = formattedDate.split(" ")[1];
    const dayWithOrdinal = addOrdinalSuffix(threeDaysLater.getDate());

    return `${day}, ${dayWithOrdinal} ${month}`;
  }

  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_term = searchParams.get("utm_term");
  const gclid = searchParams.get("gclid");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://houzecheck.service-now.com/api/houch/hzchek_web_app/lead",
        {
          ...formData,
          business_phone: formData?.contact_number ?? "",
          u_property_postcode:
            formData?.property_postcode?.replace(/\s+/g, "") ?? "", // removes whitespace
          web_stage: "LandingNew",
          u_utm_source: utm_source || "",
          u_utm_medium: utm_medium || "",
          u_utm_campaign: utm_campaign || "",
          u_utm_term: utm_term || "",
          gclid: gclid || "",
        },
        {
          headers: {
            Authorization: "Basic c3VydmV5YXBwOnN1cnZleWFwcA==",
            "Content-Type": "application/json",
          },
        }
      );
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("set", "user_data", {
          email: formData.email,
        });
      }
      if (pushToDataLayer) {
        sendGTMEvent(dataLayerEvent);
      }
      setIsLoading(false);
      router.push(
        `/lead?interaction_id=${response?.data?.result?.interaction_id}`
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      const message = (error as any)?.response?.data?.error?.message;
      toast.error(message || "Something went wrong !!!");

      setIsLoading(false);
      // Handle error, e.g., show an error message
    }
  };

  function getRandomNumber(min = 3, max = 6): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSumbit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrStep(2);
    setApiStatus({
      status: "success",
      message: `Earliest availability of surveyor is on `,
    });
  };

  if (showSurveyorNumber) {
    switch (currStep) {
      case 1:
        return (
          <form className="md:px-8 text-center" onSubmit={handleSumbit2}>
            <h4 className="text-dark-blue text-xl md:text-2xl font-bold text-center">
              Find RICS Surveyors
            </h4>
            <input
              type="text"
              className={
                "w-full my-5 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
              }
              placeholder="Property Postcode*"
              name="property_postcode"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className={
                "bg-black text-white hover:text-black hover:!bg-yellow py-3 px-10 border border-black rounded-md mx-auto font-bold"
              }
            >
              {isLoading ? "Loading..." : "Find Surveyors"}
            </button>
          </form>
        );
      case 2:
        return (
          <>
            {apiStatus.status === "success" && (
              <div className="text-[1.1rem] mb-7">
                <p>
                  {`There are `}
                  <span className="font-bold">
                    {getRandomNumber()} surveyors available
                  </span>
                  {` around your postcode.`}
                </p>
                <br />
                <p>
                  {`${apiStatus.message}`}
                  <strong>{`${getThirdWorkingDayFromDate(today)}`}</strong>
                </p>
              </div>
            )}
            <form className="md:px-8 text-center" onSubmit={handleSubmit}>
              <h4 className="text-dark-blue text-xl md:text-2xl font-bold text-center">
                Book RICS Surveyor
              </h4>
              {/* <input
                type="text"
                className={
                  "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
                }
                placeholder="Property Postcode*"
                name="property_postcode"
                onChange={handleChange}
                required
              /> */}
              <input
                type="text"
                className={
                  "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
                }
                placeholder="Full Name*"
                name="first_name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className={
                  "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
                }
                placeholder="Email Address*"
                name="email"
                id="email"
                onChange={handleChange}
                required
              />
              <input
                type="number"
                className={
                  "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
                }
                placeholder="Phone Number*"
                name="contact_number"
                id="contact_number"
                onChange={handleChange}
                required
              />
              <textarea
                className={
                  "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
                }
                name="u_message"
                placeholder="Special Instructions (optional)"
                onChange={handleChange}
                rows={3}
              ></textarea>
              <input
                type="hidden"
                id="gclid_field"
                name="gclid_field"
                value=""
              />
              <button
                type="submit"
                className={
                  "bg-black text-white hover:text-black hover:!bg-yellow py-3 px-10 border border-black rounded-md mx-auto font-bold"
                }
              >
                {isLoading ? "Loading..." : "Book Surveyor"}
              </button>
            </form>
          </>
        );
    }
  }
  return (
    <form
      className="md:px-8 text-center"
      onSubmit={handleSubmit}
      {...(formId && { id: formId })}
    >
      <h4 className="text-dark-blue text-xl md:text-2xl font-bold text-center">
        Book RICS Surveyor
      </h4>
      <input
        id="property_postcode"
        type="text"
        className={
          "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
        }
        placeholder="Property Postcode*"
        name="property_postcode"
        onChange={handleChange}
        required
      />
      <input
        id="first_name"
        type="text"
        className={
          "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
        }
        placeholder="Full Name*"
        name="first_name"
        onChange={handleChange}
        required
      />
      <input
        id="email"
        type="email"
        className={
          "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
        }
        placeholder="Email Address*"
        name="email"
        onChange={handleChange}
        required
      />
      <input
        id="contact_number"
        type="number"
        className={
          "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
        }
        placeholder="Phone Number*"
        name="contact_number"
        onChange={handleChange}
        required
      />
      <textarea
        id="u_message"
        className={
          "w-full my-2 p-3 border-2 border-black bg-primary-old outline-0 placeholder:text-black rounded-md hover:bg-white placeholder:text-sm"
        }
        name="u_message"
        placeholder="Special Instructions (optional)"
        onChange={handleChange}
        rows={3}
      ></textarea>
      <input type="hidden" id="gclid_field" name="gclid_field" value="" />
      <button
        type="submit"
        className={
          "bg-black text-white hover:text-black hover:!bg-yellow py-3 px-10 border border-black rounded-md mx-auto font-bold"
        }
        {...(submitButtonId && { id: submitButtonId })}
      >
        {isLoading ? "Loading..." : "Book Surveyor"}
      </button>
    </form>
  );
};

export default LandingPageForm;
