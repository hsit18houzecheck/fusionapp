import { DEFAULT_CONTENT } from "@/components/AboutUsMarquee/constants";
import type { AboutUsPageData } from "./types";
import { DEFAULT_MEET_PEOPLE_CONTENT } from "@/components/MeetPeople/constants";

export const DEFAULT_ABOUTUS_PAGE_DATA: AboutUsPageData = {
  aboutusPageData: {
    meetPeople: DEFAULT_MEET_PEOPLE_CONTENT,
    hero: {
      eyebrow: "ABOUT houzecheck",
      title: "Property surveys, made simple.",
      subtitle:
        "Since 2018, we’ve been building the UK’s most advanced property survey platform - delivering speed, accuracy and confidence at every step.",
      image: "/assets/images/surveyorpghero.webp",
      logoList: [
        { name: "trust pilot", url: "/assets/images/trust-pilot-logo.png" },
        { name: "riscs logo", url: "/assets/images/rics-logo.webp" },
      ],
    },
    redefinePropertySurvey: {
      sectionHeader: {
        eyebrow: { text: "Our vision" },
        title: { text: "Redefining the Property Survey Experience" },
        subheading: { text: "Houzecheck was built to make property surveys transparent, fast, and effortless - removing the uncertainty and delays homebuyers and surveyors once accepted. By combining RICS-qualified expertise with modern technology, we bring confidence and clarity to every property decision." },
      },
      video: {
        backgroundImage: "/assets/images/what-it-means.webp",
      },
    },
    row1Cards: {
      cards: DEFAULT_CONTENT.row1Cards
    },
    row2Cards: {
      cards: DEFAULT_CONTENT.row2Cards
    }
  },
  url: "/about-us",
};
