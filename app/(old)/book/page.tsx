import NewBookPage from "../lp_surveyor/variants/VariantA";

export const metadata = {
  title: "Book a Home Buyers Survey or Valuation Online | Houzecheck",
  description:
    "Book a Home Buyers Survey or Valuation with Houzecheck today and discover the information you need to sell or buy with confidence.",
};

const Book = async () => (
  <NewBookPage
    landingPageContent={{
      count_down_timer_text: "Same-Day Quotes End at 5.30pm",
      count_down_timer_till_2_on_sat: true,
      key: "control",
      test_key: "lp-surveyor-landing-page-a-b-test-4",
      left_hero_title: "Get your survey confirmed in minutes.",
      show_clock: true,
      bg_col: "#d8f4ed",
      hero_form_title: "Book your RICS survey now",
      hero_image: "/assets/images/old-website/house-flat-2.webp",
      hero_form_cta_label: "Get my FREE quote",
      header_sticky: true,
      weekday_non_business_hours_show_today: true,
      saturday_non_business_hours_show_weekly: true,
    }}
    formProps={{ submitButtonId: "bookpage-continue-button" }}
  />
);

export default Book;
