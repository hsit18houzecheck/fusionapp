import StartReferringInstantlyClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { StartReferringInstantlyContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";
import { PARTNER_FORM_EVENT } from "@/app/(new)/partner/constants";

export default async function StartReferringInstantly() {
  let content = DEFAULT_CONTENT as StartReferringInstantlyContent;

  try {
    const cmsData = await getCMSData<StartReferringInstantlyContent>(
      CMS_KEYS.START_REFERRING_INSTANTLY_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error(
      "Failed to fetch start referring instantly content from cms:",
      error
    );
  }

  return (
    <StartReferringInstantlyClient
      heading={content.heading}
      title={content.title}
      subtitle={content.subtitle}
      ctaButton={{ ...content.ctaButton, url: `#${PARTNER_FORM_EVENT}` }}
      steps={content.steps}
      successStories={content.successStories}
      showSuccessStory={content.steps.length === content.successStories.length}
    />
  );
}
