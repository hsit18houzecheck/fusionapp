"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { PhoneWrapperProps } from "./types";

const PhoneWrapper: React.FC<PhoneWrapperProps> = ({
  children,
  landingPageContent,
}) => (
  <button
    id="tel-num-wrapper"
    onClick={() =>
      sendGTMEvent({
        event: "ld_experiment_cta_phone_clicked",
        experiment_name: landingPageContent?.test_key,
        variant: landingPageContent?.key,
      })
    }
  >
    {children}
  </button>
);

export default PhoneWrapper;
