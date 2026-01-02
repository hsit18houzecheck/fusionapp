import Banner from "./Banner";
import { DATA } from "./constants";
import Testimonial2 from "./Testimonial2";
import Container from "../Container";
import Stats from "../Stats";
import RICS from "../RICS";
import SurveyorSection from "../SurveyorSection";
import type { LandingProps } from "./types";

const Landing: React.FC<LandingProps> = ({
  type,
  landingPageContent,
  userKey,
  landingPageFormProps,
}) => {
  return (
    <Container landing landingPageContent={landingPageContent}>
      <Banner
        data={DATA[type]}
        userKey={userKey}
        landingPageFormProps={landingPageFormProps}
      />
      <Stats />
      <Testimonial2 />
      <RICS />
      <SurveyorSection landing />
    </Container>
  );
};

export default Landing;
