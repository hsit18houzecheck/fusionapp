import ServiceClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { ServicesContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function Service() {
  let content = DEFAULT_CONTENT as ServicesContent;

  try {
    const cmsData = await getCMSData<ServicesContent>(
      CMS_KEYS.SERVICES_CONTENT
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch services content from cms:", error);
  }

  return (
    <ServiceClient
      heading={content.heading}
      title={content.title}
      subtitle={content.subtitle}
      serviceitems={content.serviceitems}
      lastcard={content.lastcard}
    />
  );
}
