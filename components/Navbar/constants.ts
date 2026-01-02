export const DEFAULT_CONTENT = {
  links: [
    {
      label: "Our Services",
      url: "/services",
      children: [
        { label: "RICS Level 2 Survey", url: "/services/level-2-survey" },
        { label: "RICS Level 3 Survey", url: "/services/level-3-survey" },
        { label: "RICS Valuation", url: "/services/valuation" },
      ],
    },
    {
      label: "About Us",
      url: "/about",
      children: [
        { label: "Our Story", url: "/about/story" },
        { label: "Our Team", url: "/about/team" },
        { label: "Careers", url: "/about/careers" },
      ],
    },
    {
      label: "Understand Your Property",
      url: "/understand-property",
    },
    {
      label: "Help & Support",
      url: "/support",
      children: [
        { label: "FAQs", url: "/support/faqs" },
        { label: "Contact Us", url: "/support/contact" },
        { label: "Resources", url: "/support/resources" },
      ],
    },
  ],
  logo: { url: "/assets/images/hc-logo.webp" },
  logoMobile: { url: "/assets/images/hc-mobile-logo.webp" },
  partnerLink:{
    label: "Become a Partner",
    url: "/",
  },
  contactNumber: "0330 113 1133",
};
