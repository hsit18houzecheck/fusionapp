import { MeetPeopleContent } from "@/components/MeetPeople/types";
import { VideoCardContent } from "@/components/VideoCard/types";

export type HomePageData = {
  homePageData: {
    customerStoriesVideo: VideoCardContent;
    meetPeople: MeetPeopleContent;
    heroVideo?: string
  };
  url?: string;
};
