import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { DEFAULT_PARTNER_PAGE_DATA, PARTNER_FORM_EVENT } from "./constants";
import { PartnerPageData } from "./types";
import MythBusting from "@/components/MythBusting";
import StartReferringInstantly from "@/components/StartReferringInstantly";
import { FAQClient } from "@/components/FAQ";
import NewsAndUpdate from "@/components/NewsAndUpdate";
import CommonHero1 from "@/components/CommonHero1";
import MeetPeople from "@/components/MeetPeople";
import VideoCardSection from "@/components/VideoCard/Section";
import Vision from "@/components/Vision";
import Accreditation from "@/components/Accreditation";
import OverlayCards from "@/components/OverlayCards";
import FeatureCardsSection from "@/components/FeatureCards/Section";
import PartnerSignupForm from "./PartnerSignupForm";
import { getPageMetadata } from "@/services/cmsService";

export async function generateMetadata() {
  const { title, description } = await getPageMetadata(
    CMS_KEYS.PARTNER_PAGE_CONTENT
  );
  return {
    title,
    description,
  };
}

export default async function PartnerPage() {
  let data = DEFAULT_PARTNER_PAGE_DATA;

  try {
    const cmsData = await getCMSData<PartnerPageData>(
      CMS_KEYS.PARTNER_PAGE_CONTENT,
      {
        userAttributes: { urlPath: "/partner" },
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

  const { partnerData } = data;

  return (
    <>
      <CommonHero1
        {...partnerData.hero}
        button={{
          ...partnerData.hero.button,
          url: `#${PARTNER_FORM_EVENT}`,
        }}
      />
      <Accreditation
        backgroundColor={partnerData.accredition.backgroundColor}
        logos={partnerData.accredition.logos}
        logoClassName="md:h-10"
      />
      <Vision {...partnerData.vision} />
      <FeatureCardsSection
        {...partnerData.partnerSuccess}
        classNames={{
          title: "text-center !text-5xl md:!text-[5rem] md:!leading-[5rem]",
          subtitle: "text-center !text-base md:!text-lg font-medium",
        }}
      />
      {/* <Banner {...partnerData.offerBanner} /> */}
      <VideoCardSection {...partnerData.whatItMeansVideo} />
      <MythBusting
        {...partnerData.mythBusting}
        ctaButton={{
          ...partnerData.mythBusting.ctaButton,
          url: `#${PARTNER_FORM_EVENT}`,
        }}
      />
      {/* <VideoCardSection {...partnerData.techDemoVideo} /> */}
      <OverlayCards {...partnerData.partnerReviews} />
      <NewsAndUpdate {...partnerData.news} />
      <StartReferringInstantly />
      <MeetPeople {...partnerData.meetPeople} />
      <FAQClient {...partnerData.faqs} />
      <div className="hidden">
        <PartnerSignupForm />
      </div>
    </>
  );
}
