import type { SurveyorBenefitsContent } from "./types";

export const DEFAULT_CONTENT: SurveyorBenefitsContent = {
  eyebrow: "Jobs",
  title: "Benefits",
  subtitle: "Explore the benefits of working with us",
  cards: [
    {
      roleType: "Full-Time Employee",
      image: "/assets/images/benefits-full-time-employee.png",
      benefits: [
        { title: "Take control of your workload with jobs that fit your schedule" },
        { title: "No chasing clients or payments - we handle it all" },
        { title: "Keep your independence while plugging into our support network" },
        { title: "Boost your visibility without lifting a finger on marketing" },
        { title: "Be part of a trusted community of RICS professionals" },
      ],
    },
    {
      roleType: "Self-Employed",
      image: "/assets/images/benefits-self-employed.png",
      benefits: [
        { title: "Take control of your workload with jobs that fit your schedule" },
        { title: "No chasing clients or payments - we handle it all" },
        { title: "Keep your independence while plugging into our support network" },
        { title: "Boost your visibility without lifting a finger on marketing" },
        { title: "Be part of a trusted community of RICS professionals" },
      ],
    },
    {
      roleType: "Part-Time Surveyor",
      image: "/assets/images/benefits-part-time-surveyor.png",
      benefits: [
        { title: "Take control of your workload with jobs that fit your schedule" },
        { title: "No chasing clients or payments - we handle it all" },
        { title: "Keep your independence while plugging into our support network" },
        { title: "Boost your visibility without lifting a finger on marketing" },
        { title: "Be part of a trusted community of RICS professionals" },
      ],
    },
    {
      roleType: "Retiring Surveyor",
      image: "/assets/images/benefits-retiring-surveyor.png",
      benefits: [
        { title: "Take control of your workload with jobs that fit your schedule" },
        { title: "No chasing clients or payments - we handle it all" },
        { title: "Keep your independence while plugging into our support network" },
        { title: "Boost your visibility without lifting a finger on marketing" },
        { title: "Be part of a trusted community of RICS professionals" },
      ],
    },
  ],
  cta: {
    label: "Sign up now",
    href: "/surveyor/signup",
  },
  benefitsCtaLabel: "Benefits"
};

