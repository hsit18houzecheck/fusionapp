import OurPartnerClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { OurPartnerContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function OurPartner() {
  let content = DEFAULT_CONTENT as OurPartnerContent;

  try {
    const cmsData = await getCMSData<OurPartnerContent>(
      CMS_KEYS.OUR_PARTNER_CONTENT, { cachebust: true, cache: false }
    );
    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch our partner content from cms:", error);
  }

  return (
    <OurPartnerClient
      eyebrow={content.eyebrow}
      title={content.title}
      subtitle={content.subtitle}
      partners={content.partners}
      backgroundColor={content.backgroundColor}
    />
  );
}

