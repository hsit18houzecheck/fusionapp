import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_CONTENT } from "./constants";
import { WhyHouzecheckContent } from "./types";
import WhyHouzecheckClient from "./Client";

export default async function WhyHouzecheck() {
  let content = DEFAULT_CONTENT as WhyHouzecheckContent;

  try {
    const cmsData = await getCMSData<WhyHouzecheckContent>(
      CMS_KEYS.WHY_HOUZECHECK_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch why houzecheck content from cms:", error);
  }

  return <WhyHouzecheckClient {...content} />;
}
