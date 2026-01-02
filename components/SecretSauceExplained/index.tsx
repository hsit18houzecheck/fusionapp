import SecretSauceExplainedClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { SecretSauceExplainedContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function SecretSauceExplained() {
  let content = DEFAULT_CONTENT as SecretSauceExplainedContent;

  try {
    const cmsData = await getCMSData<SecretSauceExplainedContent>(
      CMS_KEYS.SECRET_SAUCE_EXPLAINED_CONTENT
    );
    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch secret sauce explained content from cms:", error);
  }

  return <SecretSauceExplainedClient features={content.features} />;
}

