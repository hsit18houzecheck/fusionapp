import type { ComponentType } from "react";

export type BannerData = {
  title: string;
  points: (string | ComponentType<any>)[];
};

export type LandingPageFormProps = {
  u_landing_page: string;
  u_valuation_survey: string;
  pushToDataLayer?: boolean;
  dataLayerEvent?: any;
  userKey?: string;
};

export type BannerProps = {
  data: BannerData;
  userKey?: string;
  landingPageFormProps?: Omit<
    LandingPageFormProps,
    "u_landing_page" | "u_valuation_survey"
  >;
};

