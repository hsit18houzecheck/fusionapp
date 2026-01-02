import AboutUsMarqueeClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { AboutUsMarqueeContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function AboutUsMarquee() {
  let content = DEFAULT_CONTENT as AboutUsMarqueeContent;

  try {
    const cmsData = await getCMSData<AboutUsMarqueeContent>(
      CMS_KEYS.ABOUT_US_MARQUEE_CONTENT
    );
    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch about us marquee content from cms:", error);
  }

  return (
    <AboutUsMarqueeClient
      row1Cards={content.row1Cards}
      row2Cards={content.row2Cards}
    />
  );
}
