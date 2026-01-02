import SurveyorBenefitsClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { SurveyorBenefitsContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function SurveyorBenefits() {
  let content = DEFAULT_CONTENT as SurveyorBenefitsContent;

  try {
    const cmsData = await getCMSData<SurveyorBenefitsContent>(
      CMS_KEYS.SURVEYOR_BENEFITS_CONTENT, { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch surveyor benefits content from cms:", error);
  }

  return (
    <SurveyorBenefitsClient
      eyebrow={content.eyebrow}
      title={content.title}
      subtitle={content.subtitle}
      cards={content.cards}
      cta={content.cta}
      benefitsCtaLabel={content.benefitsCtaLabel}
    />
  );
}

