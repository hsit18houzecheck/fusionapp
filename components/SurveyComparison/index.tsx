import SurveyComparisonClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_SURVEY_COMPARISON_CONTENT } from "./constants";
import type { SurveyComparisonContent } from "./types";

export default async function SurveyComparison() {
  let content = DEFAULT_SURVEY_COMPARISON_CONTENT as SurveyComparisonContent;

  try {
    const cmsData = await getCMSData<SurveyComparisonContent>(
      CMS_KEYS.SURVEY_COMPARISON_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch SurveyComparison content from CMS:", error);
  }

  return (
    <SurveyComparisonClient
      eyebrow={content.eyebrow}
      title={content.title}
      comparisonDate={content.comparisonDate}
      table={content.table}
      ctaButton={content.ctaButton}
    />
  );
}

export { SurveyComparisonClient };