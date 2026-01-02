import OurStoryClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { OurStoryContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function OurStory() {
  let content = DEFAULT_CONTENT as OurStoryContent;

  try {
    const cmsData = await getCMSData<OurStoryContent>(
      CMS_KEYS.OUR_STORY_CONTENT
    );
    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch our story content from cms:", error);
  }

  return (
    <OurStoryClient
      eyebrow={content.eyebrow}
      title={content.title}
      cards={content.cards}
    />
  );
}

