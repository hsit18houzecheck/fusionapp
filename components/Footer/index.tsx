import FooterClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_CONTENT } from "./constants";
import { FooterContent } from "./types";

export default async function Footer() {
  let content = DEFAULT_CONTENT as FooterContent;
  try {
    const cmsData = await getCMSData<FooterContent>(CMS_KEYS.FOOTER_CONTENT, { cachebust: true, cache: false });

    if (cmsData) {
      content = cmsData;
    }
  } catch (e) {
    console.error("Failed to fetch footer content from cms:", e);
  }

  return (
    <FooterClient
      brand={content.brand}
      officeHours={content.officeHours}
      contactUs={content.contactUs}
      linkGroups={content.linkGroups}
      policyAndTermsLinks={content.policyAndTermsLinks}
      copyright={content.copyright}
      socials={content.socials}
    />
  );
}
