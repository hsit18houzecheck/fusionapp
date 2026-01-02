"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import type { PhoneWrapperProps } from "./types";

const PhoneWrapper: React.FC<PhoneWrapperProps> = ({
  children,
  landingPageContent,
}) => (
  <button
    id="tel-num-wrapper"
    onClick={() =>
      landingPageContent &&
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
