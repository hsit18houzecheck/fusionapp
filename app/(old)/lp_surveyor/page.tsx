import VariantA from "./variants/VariantA";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { COOKIE_KEYS } from "@/common/constants";

export const metadata = {
  title: "RICS® Surveyors £269 | Surveys in 24 hrs | Houzecheck",
  description:
    "We are surveyors approved by RICS. Detailed RICS survey report. Surveys in 24 hrs. Low cost & free quote for surveys & valuations in UK",
};

const Book = async () => {
  const cookieStore = await cookies();
  const userKey = cookieStore.get(COOKIE_KEYS.USER_KEY)?.value || uuidv4();

  const landingPageContent = {
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
  };

  return (
    <div className="!font-mont">
      {/* <ClientDataLayerPusher
        eventDatas={[
          {
            event: "ld_experiment_viewed",
            experiment_name: landingPageContent.test_key,
            variant: landingPageContent.key,
          },
        ]}
      /> */}
      {/* <ClientCookieSetter
        cookieKey={COOKIE_KEYS.USER_KEY}
        cookieVal={userKey}
      /> */}
      <VariantA userKey={userKey} landingPageContent={landingPageContent} />
    </div>
  );
};

export default Book;
