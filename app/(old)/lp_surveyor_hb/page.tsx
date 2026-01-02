import Landing from "@/components/OldWebsite/Landing";
import { LANDING_TYPE } from "@/components/OldWebsite/Landing/constants";

export const metadata = {
  title: "Homebuyers survey £269 | Surveys in 24 hrs | Houzecheck",
  description:
    "Homebuyers survey by RICS Surveyors. Detailed Level 2 RICS homebuyer report. Surveys in 24 hrs. Low cost & free quote for homebuyer surveys by experienced RICS surveyors",
};
const Book = () => {
  return <Landing type={LANDING_TYPE.SURVEYOR_HB} />;
};

export default Book;
