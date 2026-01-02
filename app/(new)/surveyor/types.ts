import { SurveyorHeroProps } from "@/components/SurveyorHero/types";
import type { NewsAndUpdate } from "@/components/NewsAndUpdate/types";
import type { FeatureCards } from "@/components/FeatureCards/types";
import { HCComparisonContent } from "@/components/HCComparison/types";
import { MeetPeopleContent } from "@/components/MeetPeople/types";
import { BannerContent } from "@/components/Banner/types";
import { VideoCardContent } from "@/components/VideoCard/types";
import { QuizContent } from "@/components/Quiz/types";
import { JourneyToBeingIndependentContent } from "@/components/JourneyToBeingIndependent/types";
import { OverlayCardsContent } from "@/components/OverlayCards/types";
import { ReportExplainerContent } from "@/components/ReportExplainer/types";
import { FAQContent } from "@/components/FAQ/types";

export type SurveyorPageData = {
  surveyorData: {
    hero: SurveyorHeroProps;
    hcPerks: FeatureCards;
    surveyorsQuiz: QuizContent;
    newsAndUpdate: NewsAndUpdate;
    compareHouzecheck: HCComparisonContent;
    meetPeople: MeetPeopleContent;
    offerBanner: BannerContent;
    meetSurveyingDirectorVideo: VideoCardContent;
    journeyToBeingIndependent: JourneyToBeingIndependentContent;
    surveyorBenefits?: OverlayCardsContent;
    surveyorProfiles?: OverlayCardsContent;
    techSecretSauce: ReportExplainerContent;
    faqs: FAQContent;
  };
  url: string;
};
