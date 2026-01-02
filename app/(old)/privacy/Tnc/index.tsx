"use client";
import React, { useState } from "react";
import "./Tnc.css";
import { TNC_TYPES } from "../constant";
import TncWebsite from "./TncWebsite";
import PrivacyPolicy from "./PrivacyPolicy";
import Link from "next/link";
// import TncSurvey from "./TncSurvey";
// import ComplaintHandling from "./ComplaintHandling";
// import ValuationTnc from "./ValuationTnc";

const Tnc = () => {
  const [selection, setSelection] = useState<
    (typeof TNC_TYPES)[keyof typeof TNC_TYPES]
  >(TNC_TYPES.PrivacyPolicy);
  const keys = Object.keys(TNC_TYPES) as Array<keyof typeof TNC_TYPES>;
  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="flex flex-wrap">
        <div className="md:w-2/12 pl-0 bg-light-blue-old flex md:block overflow-auto pt-10">
          {keys.map((key) => (
            <p
              className={`p-3 tnc-section-btn text-nowrap${
                selection === TNC_TYPES[key] ? " tnc-section-btn-active" : ""
              }`}
              onClick={() => setSelection(TNC_TYPES[key])}
              key={key}
            >
              {TNC_TYPES[key]}
            </p>
          ))}
          <Link
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
          >
            <p className="p-3 tnc-section-btn">Google Privacy & Terms</p>
          </Link>
        </div>
        <div className="md:w-10/12 pt-5">
          {selection === TNC_TYPES.PrivacyPolicy && <PrivacyPolicy />}
          {/* {selection === TNC_TYPES.TncSurvey && <TncSurvey />}
          {selection === TNC_TYPES.ComplaintHandling && <ComplaintHandling />}
          {selection === TNC_TYPES.ValuationTnc && <ValuationTnc />} */}
        </div>
      </div>
    </div>
  );
};

export default Tnc;
