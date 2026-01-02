import SurveyCompletedClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { SurveyCompletedContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function SurveyCompleted() {
  let content = DEFAULT_CONTENT as SurveyCompletedContent;

  try {
    const cmsData = await getCMSData<SurveyCompletedContent>(
      CMS_KEYS.SURVEY_COMPLETED_CONTENT
    );
    const cmsMapData = await getCMSData<SurveyCompletedContent>(
      CMS_KEYS.SURVEY_MAP_CONTENT,
      {
        cachebust: true,
        cache: false,
      }
    );
    if (cmsData) {
      content = cmsData;
      if (cmsMapData) {
        content = {
          ...content,
          ...cmsMapData,
        };
      }
    }
  } catch (error) {
    console.error("Failed to fetch survey completed content from cms:", error);
  }

  return (
    <SurveyCompletedClient
      title={content.title}
      count={content.count}
      description={content.description}
      mapSearchPlaceholder={content.mapSearchPlaceholder}
      mapLayerLabels={content.mapLayerLabels}
      mapPostcodeInfoBox={content.mapPostcodeInfoBox}
      mapNotificationBanner={content.mapNotificationBanner}
      mapHeading={content.mapHeading}
      mapPopup={content.mapPopup}
    />
  );
}
