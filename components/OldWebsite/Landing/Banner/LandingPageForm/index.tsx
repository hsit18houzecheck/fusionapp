"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import Swal from "sweetalert2";
import { FaPhone } from "react-icons/fa6";
import { sendGTMEvent } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import Button from "@/components/OldWebsite/Button";
import { useCreateLead } from "@/hooks/useMiscApi";
import type { FormEvent } from "react";
import type { LandingPageFormProps } from "../types";

const LandingPageForm: React.FC<LandingPageFormProps> = ({
  u_landing_page,
  u_valuation_survey,
  pushToDataLayer = false,
  dataLayerEvent,
  userKey,
}) => {
  const {
    mutate: createLead,
    isError,
    isPending: isCreatingLead,
    error,
    data,
    isSuccess,
  } = useCreateLead();

  const router = useRouter();

  const initial_form_vals = {
    first_name: "",
    last_name: "",
    email: "",
    property_postcode: "",
    u_message: "",
    u_channel: "web",
    contact_number: "",
  };
  const [formData, setFormData] = useState(initial_form_vals);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_term = searchParams.get("utm_term");
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    if (isSuccess) {
      console.log(data?.data?.result?.data?.u_show_online, "from effect");
      try {
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion(
            // `order?lead_id=${response.data.result.lead_id}&interaction_id=${response.data.result.interaction_id}&name=${formData.first_name}`
            formData,
            data?.data?.result.lead_id
          );
        }
      } catch (e) {
        console.log("error in conversion");
      }
      if (pushToDataLayer) {
        sendGTMEvent(dataLayerEvent);
      }
      // if (data?.data?.result?.data?.u_show_online === "true") {
      //   console.log(
      //     " if entered",
      //     data?.data?.result?.data?.u_show_online,
      //     "u_show_online"
      //   );
      //   router.push(
      //     `/order?lead_id=${data?.data?.result?.lead_id}&interaction_id=${data?.data?.result?.interaction_id}&name=${formData.first_name}`
      //   );
      // } else {
      //   console.log(
      //     "else entered",
      //     response?.data?.result?.data?.u_show_online,
      //     "u_show_online"
      //   );
      //   // router.push("/thankyou");
      router.push(`/lead?interaction_id=${data?.data?.result?.interaction_id}`);
      //   // window.location.href = `https://lead.houzecheck.com/${response?.data?.result?.interaction_id}`;
      // }
      // ---------
      // window.uet_report_conversion();
      // window.gtag_report_conversion(
      //   `order?lead_id=${response.data.result.lead_id}&interaction_id=${response.data.result.interaction_id}&name=${formData.first_name}`
      // );
    }
    if (isError) {
      console.log(error, "from error");
      Swal.fire({
        title: "",
        text: "Something Went Wrong!",
        icon: "error",
      });
    }
  }, [isError, error, data, error, isSuccess]);

  const bookHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringfiedFormData = {
      ...formData,
      business_phone: formData.contact_number,
      u_property_postcode: formData.property_postcode.replace(/\s+/g, ""), // removes whitespace
      web_stage: "Landing",
      u_landing_page,
      u_valuation_survey,
      userKey:
        (typeof window !== "undefined" && (window as any).userKey) ||
        userKey ||
        "",
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

    // catch(function (error) {
    //   console.log(error, "Error on Authentication");
    //   if (error.response.status === 403) {
    //     const mailData = {
    //       email: "team@houzecheck.com",
    //       subject: "Reoccurring customer query",
    //       mailbody: JSON.stringify(stringfiedFormData),
    //     };
    //     Axios.post("api/sendmailtosales", mailData)
    //       .then(() => {
    //         setLoading(false);
    //         router.push({ pathname: "/thankyou" });
    //       })
    //       .catch((err) => {
    //         setLoading(false);
    //         console.log(err, "zdzzzzzz");
    //       });
  };
  return (
    <>
      <div className={"landing-form mb-5"}>
        <h1 className="text-dark-blue text-2xl md:text-3xl font-bold">
          Book RICS Surveyor
        </h1>
        {/* <form onSubmit={(e) => bookHandler(e)} autoComplete="off"> */}
        <form
          onSubmit={(e) => bookHandler(e)}
          className="md:p-8 [&>input]:placeholder:text-gray-400 [&>textarea]:placeholder:text-gray-400"
          id="book-form"
        >
          <input
            id="property_postcode"
            type="text"
            className={"landing-form-control w-full my-2 md:my-4 p-3 md:p-4"}
            placeholder="Property Postcode"
            onChange={(e) =>
              setFormData({ ...formData, property_postcode: e.target.value })
            }
            required
          />
          <input
            id="first_name"
            type="text"
            className={"landing-form-control w-full my-2 md:my-4 p-3 md:p-4"}
            placeholder="Full Name"
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            required
          />
          <input
            type="number"
            className={"landing-form-control w-full my-2 md:my-4 p-3 md:p-4"}
            placeholder="Phone"
            name="phone_number"
            id="phone_number"
            onChange={(e) =>
              setFormData({ ...formData, contact_number: e.target.value })
            }
            required
          />
          <input
            type="email"
            className={"landing-form-control w-full my-2 md:my-4 p-3 md:p-4"}
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <textarea
            id="special_instructions"
            className={"landing-form-control w-full my-2 md:my-4 px-4 py-3"}
            placeholder="Special Instructions (optional)"
            onChange={(e) =>
              setFormData({ ...formData, u_message: e.target.value })
            }
            rows={3}
          ></textarea>
          <input type="hidden" id="gclid_field" name="gclid_field" value="" />
          {/* <p className="dark-blue-color-font mt-3">Prices from £269 | Next Day Availability</p> */}
          <Button
            id="bookpage-continue"
            type="submit"
            label={isCreatingLead ? "Loading..." : "Continue"}
            className={cn("mt-4 w-full", {
              "!bg-[#878585]": isCreatingLead,
            })}
            showLoader={isCreatingLead}
          />
        </form>
        <h2 className="block md:hidden">or</h2>

        <a
          href="tel:0330 113 1133"
          id="tel-num"
          className="bg-primary-old text-white block md:hidden py-3 text-bold tel-num"
          style={{ borderRadius: "0.6rem" }}
        >
          <span className="flex w-full items-center justify-center">
            <FaPhone className="text-white" width="26" height="26" /> 0330 113
            1133
          </span>
        </a>
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
      {/* <Script id="gtag-script-click">
        {`
          function gtag_report_conversion(data, lead_id) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "generateLeadForm",
              email: data.email,
              first_name: data.first_name,
              lead_id: lead_id,
              property_postcode: data.property_postcode
            });          
          }
        `}
      </Script> */}
    </>
  );
};

export default LandingPageForm;
