import type { BannerContent } from "./types";

export const DEFAULT_CONTENT: BannerContent = {
  backgroundImage: "/assets/images/offer-section.webp",
  eyebrow: {
    text: "OFFERS",
    color: "text-peach-500",
  },
  title: {
    text: "December Offer",
    size: "lg",
    color: "text-yellow-100",
  },
  subtitle: {
    text: "Don't let hidden issues haunt your home.\\nBook your survey between December 27th – 30th and save 25%.",
    color: "text-white",
  },
  button: {
    label: "Click for offer",
    url: "/offers/december",
    backgroundColor: "bg-yellow-500",
    textColor: "text-yellow-900",
  },
  extraText: {
    text: "*Disclaimer lives here",
    color: "text-white",
  },
};
