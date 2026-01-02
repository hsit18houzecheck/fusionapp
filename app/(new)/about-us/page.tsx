import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_ABOUTUS_PAGE_DATA } from "./constants";
import { AboutUsPageData } from "./types";
import ContactUs from "@/components/ContactUs";
import MeetPeople from "@/components/MeetPeople";
import AboutUsHero from "@/components/AboutUsHero";
import VideoCardSection from "@/components/VideoCard/Section";
import HouzecheckExperts from "@/components/HouzecheckExperts";
import OurStory from "@/components/OurStory";
import AboutUsMarqueeClient from "@/components/AboutUsMarquee/Client";
import { getPageMetadata } from "@/services/cmsService";

export async function generateMetadata() {
  const { title, description } = await getPageMetadata(
    CMS_KEYS.ABOUTUS_PAGE_CONTENT
  );
  return {
    title,
    description,
  };
}

export default async function AboutUsPage() {
  let data = DEFAULT_ABOUTUS_PAGE_DATA;

  try {
    const cmsData = await getCMSData<AboutUsPageData>(
      CMS_KEYS.ABOUTUS_PAGE_CONTENT,
      {
        userAttributes: { urlPath: "/about-us" },
        cache: false,
        cachebust: true,
      }
    );

    if (cmsData) {
      data = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch surveyor page content from CMS:", error);
  }

  const { aboutusPageData } = data;

  return (
    <>
      <div className="bg-background">
        <AboutUsHero {...aboutusPageData.hero} />
        <AboutUsMarqueeClient
          row1Cards={aboutusPageData.row1Cards?.cards || []}
          row2Cards={aboutusPageData.row2Cards?.cards || []}
        />
      </div>

      <VideoCardSection
        {...aboutusPageData.redefinePropertySurvey}
        video={{
          ...aboutusPageData.redefinePropertySurvey.video,
          allowGradient: false,
        }}
      />
      <OurStory />
      <HouzecheckExperts />
      <hr className="w-full border border-[#D9D9D9] m-0" />
      <MeetPeople {...aboutusPageData.meetPeople} />
      <ContactUs />
    </>
  );
}
