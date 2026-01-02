import type { SurveyComparisonContent } from "./types";

export const DEFAULT_SURVEY_COMPARISON_CONTENT: SurveyComparisonContent = {
  eyebrow: "RICS Leveddddl 2 Survey",
  title: "Houzecheck Level 2 Survey Compared",
  comparisonDate: "Compared on 21st September 2025",
  table: {
    columns: [
      {
        label: "",
        value: "name",
        icon: "",
      },
      {
        label: "Price",
        value: "price",
        icon: "/assets/images/icons/price-icon.svg",
      },
      {
        label: "Report Delivery",
        value: "deliveryTime",
        icon: "/assets/images/icons/delivery-icon.svg",
      },
      {
        label: "Service",
        value: "service",
        icon: "/assets/images/icons/service-icon.svg",
      },
    ],
    rows: [
      {
        id: "countrywide",
        name: "Countrywide",
        logo: "/assets/images/surveylogo/countrywide-logo.png",
        price: "£600",
        deliveryTime: "12 Days",
        service: "Report only",
        displayName: "Competitor",
      },
      {
        id: "provider-2",
        name: "Provider 2",
        logo: "/assets/images/surveylogo/logo.png",
        price: "£500",
        deliveryTime: "8 Days",
        service: "Report only",
        displayName: "Competitor",
      },
      {
        id: "landg",
        name: "LandG",
        logo: "/assets/images/surveylogo/landg.png",
        price: "£450",
        deliveryTime: "9 Days",
        service: "Report only",
        displayName: "Competitor",
      },
      {
        id: "provider-4",
        name: "Provider 4",
        logo: "/assets/images/surveylogo/Mask group.png",
        price: "£400",
        deliveryTime: "7 Days",
        service: "Report only",
        displayName: "Competitor",
      },
      {
        id: "houzecheck",
        name: "Houzecheck",
        logo: "/assets/images/hc-logo.webp",
        price: "£390",
        deliveryTime: "5 Days",
        service: "RICS Report + HouzeView Report",
        isBest: true,
        tag: "Best",
      },
    ],
  },

  ctaButton: {
    label: "Book a Level 2 Survey",
    href: "/book/level-2",
  },
};
