import type { StartReferringInstantlyContent } from "./types";

export const DEFAULT_CONTENT: StartReferringInstantlyContent = {
  heading: "Referrals",
  title: "Start Referring Instantly",
  subtitle: "4 steps is all you need!",
  ctaButton: {
    label: "Request a Partnership Guide",
    href: "/partnership",
  },
  steps: [
    {
      step: "Step 1",
      title: "Get in touch",
      description:
        "Enter your details and we'll send you through our simple onboarding process. No red tape, no delays - just a quick setup to get you started. Or if you prefer, our dedicated support team are available to discuss your needs. Book a call at your convenience here",
      iconPath: "/assets/icons/support-agent.svg",
    },
    {
      step: "Step 2",
      title: "Connect Seamlessly",
      description:
        "Integrate in minutes with our easy API connection or use our portal directly. Either way, your business is instantly connected to Houzecheck.",
      iconPath: "/assets/icons/bolt.svg",
    },
    {
      step: "Step 3",
      title: "Refer with One Click",
      description:
        "Start referring clients straight away through our streamlined system. Fast, simple and designed to fit effortlessly into your existing process.",
      iconPath: "/assets/icons/web-traffic.svg",
    },
    {
      step: "Step 4",
      title: "Earn Automatically",
      description:
        "Every referral is tracked automatically. You'll receive commission without chasing payments - transparent, reliable and hassle-free.",
      iconPath: "/assets/icons/currency-pound.svg",
    },
  ],
  successStories: [
    {
      companyName: "Company Z",
      description:
        "Company Z, a well known property services stakeholder, gave us X leads in the last 12 months, resulting in referral income of Y",
      iconPath: "/assets/icons/handshake.svg",
    },
    {
      companyName: "Company B",
      description:
        "Company B, a start up estate agent will more modest volumes, typically earned £Z per case in the last 3 months",
      iconPath: "/assets/icons/handshake.svg",
    },
    {
      companyName: "Company C",
      description:
        "Company B, a start up estate agent will more modest volumes, typically earned £Z per case in the last 3 months",
      iconPath: "/assets/icons/handshake.svg",
    },
  ],
};

export const StepCardRotations = [
  "rotate-[-5.376deg]",
  "rotate-[2.767deg]",
  "rotate-[0.252deg]",
  "rotate-[9.389deg]",
];

export const successCardRotations = [
  "rotate-[5.38deg]",
  "rotate-[-2.77deg]",
  "rotate-[-0.25deg]",
  "rotate-[-9.39deg]",
];
