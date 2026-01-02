import type { LandingPageFormProps } from "./Banner/types";

export type LandingProps = {
  type: keyof typeof import("./constants").DATA;
  landingPageContent?: any;
  userKey?: string;
  landingPageFormProps?: Omit<
    LandingPageFormProps,
    "u_landing_page" | "u_valuation_survey"
  >;
};

