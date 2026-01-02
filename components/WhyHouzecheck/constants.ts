import { WhyHouzecheckContent } from "./types";
import {
  MdBolt,
  MdWorkspacePremium,
  MdHandshake,
  MdCurrencyPound,
} from "react-icons/md";

export const DEFAULT_CONTENT: WhyHouzecheckContent = {
  eyebrow: "WE MAKE SURVEYS SIMPLE",
  heading: "Why Houzecheck?",
  features: [
    {
      icon: "speed",
      title: "Speed",
      subtitle: "Fastest reports in the industry",
    },
    {
      icon: "quality",
      title: "Quality",
      subtitle: "RICS-Qualified Surveyors Nationwide",
    },
    {
      icon: "trusted",
      title: "Trusted",
      subtitle: "Trusted by 40,000+ Homebuyers",
    },
    {
      icon: "pricing",
      title: "Transparent Pricing",
      subtitle: "No Hidden Fees",
    },
  ],
  customerStoryEyebrow: "CUSTOMER STORIES",
  customerStoryTitle: "Meet Pete",
  customerStorySubtitle: "First-time homebuyer from Manchester.",
  customerStoryVideo: {
    title: "Watch Video",
    url: "",
  },
  socialsEyebrow: "SOCIALS",
  socialsTitle: "Follow us on Instagram",
  socialsSubtitle: "Check out our latest posts and stories.",
  socialsLink: {
    title: "Follow us on Instagram",
    url: "",
  },
  cardDetails: [
    {
      eyebrows: "OUR SURVEYORS",
      title: "150+ Surveyors ready",
      subtitle: "Expert RICS professionals are ready in [user location].",
      button: {
        label: "Meet your local surveyor",
        iconPosition: "right",
      },
    },
    {
      eyebrows: "SAVE MONEY",
      title: "£xxxxx saved by customer* based on £xxxx price reduction",
      subtitle: "Byline describing how we can save money",
    },
  ],
  quizdetails: [
    {
      eyebrows: "QUICK QUIZ",
      title: "Do I need a survey?",
      subtitle:
        "Take our quiz to find out if you need a survey for your new home.",
      variant: "yellow",
      button: {
        label: "Watch Video",
        iconPosition: "right",
      },
      quiz: {
        doneSlide: {
          primaryBtn: {
            label: "Book a Survey",
            rightIcon: "MdArrowOutward",
            url: "/book",
            variant: "default",
          },
          secondaryBtn: {
            label: "Learn more",
            variant: "ghost",
          },
          subheading:
            "Now you’re in the know, you can make a more informed decision.",
          title: "You’re all done!",
        },
        quiz: {
          eyebrow: "QUICK QUIZ",
          nextBtn: {
            label: "Next",
            rightIcon: "MdArrowForward",
            variant: "default",
          },
          previousBtn: {
            label: "Previous",
            leftIcon: "MdArrowBack",
            variant: "ghost",
          },
          questions: [
            {
              answer: "first_time_buyers",
              options: [
                {
                  label: "First time buyers",
                  value: "first_time_buyers",
                },
                {
                  label: "New builds",
                  value: "new_builds",
                },
              ],
              question: "A RICS Level 2 Survey is good for...",
            },
            {
              answer: "first_time_buyers",
              options: [
                {
                  label: "First time buyers",
                  value: "first_time_buyers",
                },
                {
                  label: "New builds",
                  value: "new_builds",
                },
              ],
              question: "A RICS Level 2 Survey is not good for...",
            },
          ],
          subheading: "Excellent, let’s test you!",
          title: "Do you know what a RICS level 2 survey is?",
        },
      },
    },
    {
      eyebrows: "QUICK QUIZ",
      title: "Find our your survey price",
      subtitle:
        "Take the quiz to see how much your survey or valuation will cost.",
      variant: "dark",
      button: {
        label: "Watch Video",
        iconPosition: "right",
      },
    },
  ],
  surveyComparison: {
    table: {
      rows: [
        {
          id: "provider-1",
          deliveryTime: "5 Days",
          isBest: true,
          name: "Level 2",
          price: "£390",
          service: "RICS Report + HouzeView Report",
          tag: "Best",
        },
        {
          id: "provider-2",
          deliveryTime: "8 Days",
          isBest: false,
          name: "Level 3",
          price: "£500",
          service: "Report only",
          tag: "",
        },
        {
          id: "provider-3",
          deliveryTime: "12 Days",
          isBest: false,
          name: "Valuation",
          price: "£600",
          service: "Report only",
          tag: "",
        },
      ],
      columns: [
        {
          icon: "/assets/images/icons/price-icon.svg",
          value: "price",
          label: "Price",
        },
        {
          icon: "/assets/images/icons/delivery-icon.svg",
          value: "deliveryTime",
          label: "Report Delivery",
        },
        {
          icon: "/assets/images/icons/service-icon.svg",
          value: "service",
          label: "Service",
        },
      ],
    },
  },
};

export const ICON_MAP = {
  speed: MdBolt,
  quality: MdWorkspacePremium,
  trusted: MdHandshake,
  pricing: MdCurrencyPound,
};
