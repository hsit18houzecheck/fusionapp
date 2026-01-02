import HeroClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { HomeHeroContent } from "./type";
import { DEFAULT_CONTENT } from "./constants";

export default async function Hero() {
  let content = DEFAULT_CONTENT as HomeHeroContent;

  try {
    const cmsData = await getCMSData<HomeHeroContent>(
      CMS_KEYS.HOME_HERO_CONTENT,
      { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch hero content from cms:", error);
  }

  return (
    <HeroClient
      title={content.title}
      subtitle={content.subtitle}
      button={content.button}
      ricsLogo={content.ricsLogo}
    />
  );
}
