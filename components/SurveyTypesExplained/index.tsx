import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_CONTENT } from "./constants";
import { SurveyTypesExplainedContent } from "./types";
import SurveyTypesExplainedClient from "./Client";

export default async function SurveyTypesExplained() {
  let content = DEFAULT_CONTENT as SurveyTypesExplainedContent;
  try {
    const cmsData = await getCMSData<SurveyTypesExplainedContent>(
      CMS_KEYS.SURVEY_TYPES_EXPLAINED_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (e) {
    console.error("Failed to fetch footer content from cms:", e);
  }

  return <SurveyTypesExplainedClient {...content} />;
}
