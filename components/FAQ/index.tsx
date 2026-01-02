import FAQClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_FAQ_CONTENT } from "./constants";
import { FAQContent } from "./types";

export default async function FAQ() {
  let content = DEFAULT_FAQ_CONTENT as FAQContent;

  try {
    const cmsData = await getCMSData<FAQContent>(
      CMS_KEYS.FAQ_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      // CMS data structure matches our types directly
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch FAQ content from CMS:", error);
  }

  return <FAQClient {...content} />;
}

export { FAQClient };
