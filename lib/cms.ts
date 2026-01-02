import { builder } from "@builder.io/sdk";
import type { GetContentOptions } from "@builder.io/sdk";
import { filterByEnvironment } from "./utils";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey) {
  builder.init(apiKey);
}

export const CMS_KEYS = {
  NAVIGATION_LINKS: "navigation-links",
  PAGE: "page",
  FOOTER_CONTENT: "footer-content",
  TRUSTPILOT_REVIEWS_CONTENT: "trustpilot-reviews",
  HOME_HERO_CONTENT: "home-hero-content",
  WHY_HOUZECHECK_CONTENT: "home-why-houzecheck",
  CARDS_SECTION_CONTENT: "cards-section-content",
  SURVEY_COMPLETED_CONTENT: "survey-completed",
  SURVEY_MAP_CONTENT: "survey-map",
  SERVICES_CONTENT: "home-services-component",
  FAQ_CONTENT: "faq-content",
  MEET_PEOPLE_CONTENT: "meet-people",
  SAVINGS_ESTIMATOR_CONTENT: "savings-estimator-content",
  SURVEYOR_BENEFITS_CONTENT: "surveyor-benefits",
  BANNER_CONTENT: "banner-1-content",
  SERVICE_PAGE_CONTENT: "service-page",
  PARTNER_PAGE_CONTENT: "partner-page",
  SECRET_SAUCE_EXPLAINED_CONTENT: "secret-sauce-explained",
  REPORT_EXPLAINER_CONTENT: "report-explainer",
  PROCESS_CONTENT: "process-content",
  SURVEY_COMPARISON_CONTENT: "survey-comparison",
  OUR_PARTNER_CONTENT: "our-partner-content",
  SURVEYOR_PAGE_CONTENT: "surveyor-page",
  SURVEY_TYPES_EXPLAINED_CONTENT: "survey-types-explained-content",
  START_REFERRING_INSTANTLY_CONTENT: "partner-referring-instantly",
  CONTACT_US_CONTENT: "contactus",
  HOME_PAGE_CONTENT: "home-page",
  ABOUTUS_PAGE_CONTENT: "about-us-page",
  HOUZECHECK_EXPERTS_CONTENT: "houzecheck-experts",
  OUR_STORY_CONTENT: "our-story",
  ABOUT_US_MARQUEE_CONTENT: "about-us-marquee",
} as const;

export type CMSKey = (typeof CMS_KEYS)[keyof typeof CMS_KEYS];

export async function getCMSData<T>(
  key: CMSKey,
  options: GetContentOptions = {}
): Promise<T | null> {
  const content = await builder.get(key, {...options, cache: false, cachebust: true}).toPromise();
  const data = content?.data ?? null;

  return data;
  return filterByEnvironment(
    data,
    process.env.ENVIRONMENT || "development"
  ) as T | null;
}

export { builder };
