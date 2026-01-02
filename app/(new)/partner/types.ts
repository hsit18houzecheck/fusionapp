import { BannerContent } from "@/components/Banner/types";
import { CommonHero1Props } from "@/components/CommonHero1/types";
import { FAQContent } from "@/components/FAQ/types";
import { FeatureCardsSectionContent } from "@/components/FeatureCards/types";
import { MeetPeopleContent } from "@/components/MeetPeople/types";
import type { MythBustingProps } from "@/components/MythBusting/types";
import { NewsAndUpdate } from "@/components/NewsAndUpdate/types";
import { OverlayCardsContent } from "@/components/OverlayCards/types";
import { VideoCardSectionContent } from "@/components/VideoCard/types";
import { VisionContent } from "@/components/Vision/type";

export type PartnerPageData = {
  partnerData: {
    hero: CommonHero1Props;
    accredition: {
      backgroundColor: string;
      logos: { url: string; alt: string }[];
    };
    vision: VisionContent;
    mythBusting: MythBustingProps;
    meetPeople: MeetPeopleContent;
    news: NewsAndUpdate;
    offerBanner: BannerContent;
    whatItMeansVideo: VideoCardSectionContent;
    techDemoVideo: VideoCardSectionContent;
    partnerReviews: OverlayCardsContent;
    partnerSuccess: FeatureCardsSectionContent;
    faqs: FAQContent;
  };
  url: string;
};
