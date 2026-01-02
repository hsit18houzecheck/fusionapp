import type { NavMenuItem } from "./types";

export const NAV_MENU: NavMenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "Services",
    path: [
      { title: "Homebuyer Survey", path: "/rics-home-buyer-survey" },
      { title: "Building Survey", path: "/rics-level-3-survey" },
      { title: "Property Valuation", path: "/rics-valuation" },
    ],
  },
  {
    title: "RICS Surveyors",
    path: [
      { title: "Book a Surveyor", path: "/book" },
      { title: "Surveying Coverage", path: "/surveyor" },
      { title: "Join as a Surveyor", path: "/surveyor" },
      { title: "Surveyor Login", path: "http://app.houzecheck.com" },
    ],
  },

  {
    title: "Partners",
    path: [
      {
        title: "Become a Partner",
        path: "/partner",
      },
    ],
  },
  {
    title: "Blogs",
    path: "/blog",
  },
  // {
  //   title: "Earn £50",
  //   path: "/refer-and-earn",
  // },
  {
    title: "About",
    path: [
      { title: "About Us", path: "/about-us" },
      { title: "Contact", path: "/about-us#contact" },
      // { title: "Careers", path: "/careers" },
      { title: "Terms", path: "/terms" },
    ],
  },
];
