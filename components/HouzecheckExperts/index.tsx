import HouzecheckExpertsClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { HouzecheckExpertsContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function HouzecheckExperts() {
  let content = DEFAULT_CONTENT as HouzecheckExpertsContent;

  try {
    const cmsData = await getCMSData<HouzecheckExpertsContent>(
      CMS_KEYS.HOUZECHECK_EXPERTS_CONTENT,
      { cachebust: true, cache: false }
    );
    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error(
      "Failed to fetch houzecheck experts content from cms:",
      error
    );
  }

  return (
    <HouzecheckExpertsClient
      eyebrow={content.eyebrow}
      title={content.title}
      teamTypes={content.teamTypes}
    />
  );
}

