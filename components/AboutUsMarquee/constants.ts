import type { AboutUsMarqueeContent } from "./types";

export const DEFAULT_CONTENT: AboutUsMarqueeContent = {
  row1Cards: [
    {
      eyebrow: "THE BEGINNING",
      title: "It started with a question:",
      description:
        "Why is getting a survey so difficult and stressful? The process of securing a survey felt outdated, confusing, and unpredictable. We knew there had to be a better way.",
      backgroundColor: "#FDEECA",
    },
    {
      eyebrow: "THE MISSION",
      title: "We rebuilt the survey experience.",
      description:
        "Smart technology, real-time tracking, real-time trackers, and faster turnarounds - all designed to remove stress and uncertainty.",
      backgroundColor: "#1F1801",
    },
    {
      eyebrow: "THE INNOVATION",
      title: "Getting a survey shouldn't be difficult.",
      description:
        "Our mission is to make property surveys clearer, faster, and more human. A place where homebuyers get answers, not anxiety - and surveyors get the tools and support they deserve.",
      backgroundColor: "#FDEECA",
    },
  ],
  row2Cards: [
    {
      backgroundImage: "/assets/images/about-us-building.webp",
      videoFile: "/assets/images/about-us-building.webp",
    },
    {
      eyebrow: "THE TRUST",
      title: "People are noticing.",
      description:
        "Thousands trust Houzecheck. Backed by expert RICS surveyors and consistently high-verified reviews.",
      backgroundColor: "#FDEECA",
    },
    {
      eyebrow: "THE IMPACT",
      title: "A better way to get a survey.",
      description:
        "Quicker reports. Clearer advice. Less stress. More confidence. Houzecheck is raising the standard for the entire industry.",
      backgroundColor: "#1F1801",
    },
  ],
};
