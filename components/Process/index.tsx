import ProcessClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { ProcessContent } from "./types";
import { DEFAULT_PROCESS_CONTENT } from "./constants";

export default async function Process() {
  let content = DEFAULT_PROCESS_CONTENT as ProcessContent;

  try {
    const cmsData = await getCMSData<ProcessContent>(CMS_KEYS.PROCESS_CONTENT, { cachebust: true, cache: false });

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch process content from cms:", error);
  }

  return (
    <ProcessClient
      eyebrow={content.eyebrow}
      heading={content.heading}
      subheading={content.subheading}
      steps={content.steps}
      button={content.button}
    />
  );
}

