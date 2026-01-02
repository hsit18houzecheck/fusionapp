import NavBarClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import type { NavigationContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function Navbar() {
  let data = DEFAULT_CONTENT as NavigationContent;

  try {
    const cmsData = await getCMSData<NavigationContent>(
      CMS_KEYS.NAVIGATION_LINKS, { cachebust: true, cache: false }
    );

    if (cmsData) {
      data = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch navigation links from cms:", error);
  }

  return (
    <NavBarClient
      links={data.links}
      logo={data.logo}
      logoMobile={data.logoMobile}
      partnerLink={data.partnerLink}
      contactNumber={data.contactNumber}
    />
  );
}
