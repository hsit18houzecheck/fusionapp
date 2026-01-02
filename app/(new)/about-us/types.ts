import { AboutUsHeroProps } from "@/components/AboutUsHero/types";
import { MarqueeCard } from "@/components/AboutUsMarquee/types";
import { MeetPeopleContent } from "@/components/MeetPeople/types";
import { VideoCardSectionContent } from "@/components/VideoCard/types";

export type AboutUsPageData = {
  aboutusPageData: {
    meetPeople: MeetPeopleContent;
    hero: AboutUsHeroProps;
    redefinePropertySurvey: VideoCardSectionContent;
    row1Cards: { cards: MarqueeCard[] };
    row2Cards: { cards: MarqueeCard[] };
  };
  url: string;
};
