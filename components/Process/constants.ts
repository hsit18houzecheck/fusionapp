import { ProcessContent } from "./types";

export const DEFAULT_PROCESS_CONTENT: ProcessContent = {
  eyebrow: "OUR PROCESS",
  heading: "The Houzecheck Process",
  subheading: "We've made it easy with 3 steps.",
  steps: [
    {
      title: "Book your survey instantly",
      description:
        "Secure your survey now in just a few clicks - confirmation takes seconds, not days.",
    },
    {
      title: "The RICS expert arrives on location",
      description:
        "Your inspection is carried out by an experienced RICS professional you can trust.",
    },
    {
      title: "Survey completion and delivery",
      description:
        "Receive your clear, detailed report quickly, with our team on hand to guide you through the results.",
    },
  ],
  button: {
    label: 'Book a Survey',
    url: '/book'
  }
};

export const DESKTOP_SHAPES = [
  "/assets/images/process-desktop-stage-1.svg",
  "/assets/images/process-desktop-stage-2.svg",
  "/assets/images/process-desktop-stage-3.svg",
];

export const MOBILE_SHAPES = [
  "/assets/images/process-mobile-stage-1.svg",
  "/assets/images/process-mobile-stage-2.svg",
  "/assets/images/process-mobile-stage-3.svg",
];