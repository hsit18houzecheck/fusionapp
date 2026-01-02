import { DEFAULT_CONTENT } from "@/components/VideoCard/constants";
import { HomePageData } from "./types";
import { DEFAULT_MEET_PEOPLE_CONTENT } from "@/components/MeetPeople/constants";

export const DEFAULT_HOME_PAGE_DATA: HomePageData = {
  homePageData: {
    customerStoriesVideo: DEFAULT_CONTENT,
    meetPeople: DEFAULT_MEET_PEOPLE_CONTENT,
    heroVideo: "/assets/videos/hero.mov"
  },
  url: "/",
};
