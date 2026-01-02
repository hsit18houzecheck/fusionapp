import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Navbar from "./Navbar";
import LiveStatus from "./LiveStatus";
import { getTimer } from "./Hero/utils";
import { VariantAProps } from "../../types";

const VariantA: React.FC<VariantAProps> = ({
  userKey,
  landingPageContent,
  formProps,
}) => {
  const timerProps = getTimer(
    landingPageContent?.count_down_timer_till_2_on_sat
  );

  return (
    <>
      <Navbar landingPageContent={landingPageContent} />
      <LiveStatus landingPageContent={landingPageContent} {...timerProps} />
      <Hero
        userKey={userKey}
        landingPageContent={landingPageContent}
        formProps={formProps}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 landingPageContent={landingPageContent} />
      <Section6 />
      <Section7 landingPageContent={landingPageContent} />
    </>
  );
};

export default VariantA;
