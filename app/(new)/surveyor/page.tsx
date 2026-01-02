import { getCMSData, CMS_KEYS } from "@/lib/cms";
import NewsAndUpdate from "@/components/NewsAndUpdate";
import FeatureCards from "@/components/FeatureCards";
import SecretSauceExplained from "@/components/SecretSauceExplained";
import type { SurveyorPageData } from "./types";
import { DEFAULT_SURVEYOR_PAGE_DATA, SURVEYOR_FORM_EVENT } from "./constants";
import HCComparison from "@/components/HCComparison";
import Reviews from "@/components/Reviews";
import { FAQClient } from "@/components/FAQ";
import MeetPeople from "@/components/MeetPeople";
import Banner from "@/components/Banner";
import Quiz from "@/components/Quiz";
import OverlayCards from "@/components/OverlayCards";
import JourneyToBeingIndependent from "@/components/JourneyToBeingIndependent";
import CommonHero1 from "@/components/CommonHero1";
import SurveyorSignupForm from "./SurveyorSignupForm";
import { ReportExplainerClient } from "@/components/ReportExplainer";
import { getPageMetadata } from "@/services/cmsService";

export async function generateMetadata() {
  const { title, description } = await getPageMetadata(
    CMS_KEYS.SURVEYOR_PAGE_CONTENT
  );
  return {
    title,
    description,
  };
}

export default async function SurveyorPage() {
  let data = DEFAULT_SURVEYOR_PAGE_DATA;

  try {
    const cmsData = await getCMSData<SurveyorPageData>(
      CMS_KEYS.SURVEYOR_PAGE_CONTENT,
      {
        userAttributes: { urlPath: "/surveyor" },
        cachebust: true,
        cache: false,
      }
    );

    if (cmsData) {
      data = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch surveyor page content from CMS:", error);
  }

  const { surveyorData } = data;

  return (
    <>
      <CommonHero1
        {...surveyorData.hero}
        button={{
          ...surveyorData.hero.button,
          url: `#${SURVEYOR_FORM_EVENT}`,
        }}
      />
      <div className="bg-background">
        <Reviews />
      </div>
      <Quiz {...surveyorData.surveyorsQuiz} />
      <NewsAndUpdate {...surveyorData.newsAndUpdate} />
      <FeatureCards {...surveyorData.hcPerks} />
      {surveyorData.surveyorBenefits && (
        <OverlayCards
          {...surveyorData.surveyorBenefits}
          ctaV2={{
            ...surveyorData.surveyorBenefits.ctaV2,
            url: `#${SURVEYOR_FORM_EVENT}`,
          }}
        />
      )}
      <JourneyToBeingIndependent {...surveyorData.journeyToBeingIndependent} />
      <ReportExplainerClient {...surveyorData.techSecretSauce} />
      <SecretSauceExplained />
      <HCComparison
        {...surveyorData.compareHouzecheck}
        ctaBtn={{
          ...surveyorData.compareHouzecheck.ctaBtn,
          url: `#${SURVEYOR_FORM_EVENT}`,
        }}
      />
      <Banner {...surveyorData.offerBanner} />
      {surveyorData.surveyorProfiles && (
        <OverlayCards {...surveyorData.surveyorProfiles} />
      )}
      {/* <section className="py-16 md:py-20">
        <div className="md:max-w-[110rem] px-6 md:px-10 mx-auto h-[33.125rem] md:h-[52.125rem]">
          <VideoCard {...surveyorData.meetSurveyingDirectorVideo} />
        </div>
      </section> */}
      <MeetPeople {...surveyorData.meetPeople} />
      <FAQClient {...surveyorData.faqs} />
      <div className="hidden">
        <SurveyorSignupForm />
      </div>
    </>
  );
}
