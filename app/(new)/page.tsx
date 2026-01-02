import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import { CMS_KEYS, getCMSData } from "@/lib/cms";
import { DEFAULT_HOME_PAGE_DATA } from "./constants";
import { HomePageData } from "./types";
import { getPageMetadata } from "@/services/cmsService";
import FAQ from "@/components/FAQ";
import WhyHouzecheck from "@/components/WhyHouzecheck";
import Service from "@/components/Service";
import SavingsEstimator from "@/components/SavingsEstimator";
import SurveyTypesExplained from "@/components/SurveyTypesExplained";
import MeetPeople from "@/components/MeetPeople";
import SurveyCompleted from "@/components/SurveyCompleted";
import HeroVideoBackground from "@/components/Hero/VideoBackground";
import VideoCard from "@/components/VideoCard";

export async function generateMetadata() {
  const { title, description } = await getPageMetadata(
    CMS_KEYS.HOME_PAGE_CONTENT
  );
  return {
    title,
    description,
  };
}

export default async function Home() {
  let data = DEFAULT_HOME_PAGE_DATA;

  try {
    const cmsData = await getCMSData<HomePageData>(CMS_KEYS.HOME_PAGE_CONTENT, {
      userAttributes: { urlPath: "/" },
    });

    // Merge CMS data with defaults, falling back to defaults for missing keys
    if (cmsData) {
      data = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch service page content from CMS:", error);
  }

  const { homePageData } = data;

  return (
    <div className="space-y-12 md:space-y-[3.75rem]">
      <div className="relative bg-background my-0">
        {/* Video Background */}
        {homePageData.heroVideo && (
          <HeroVideoBackground videoUrl={homePageData.heroVideo} />
        )}
        <Hero />
        <Reviews />
      </div>
      <Service />
      <SurveyCompleted />
      <WhyHouzecheck />
      <SavingsEstimator />
      <section>
        <div className="md:max-w-[110rem] px-6 md:px-10 mx-auto h-[33.125rem] md:h-[52.125rem]">
          <VideoCard {...homePageData.customerStoriesVideo} />
        </div>
      </section>
      <SurveyTypesExplained />
      <FAQ />
      <hr className="w-full border border-[#D9D9D9] m-0" />
      <MeetPeople {...homePageData.meetPeople} />
    </div>
  );
}
