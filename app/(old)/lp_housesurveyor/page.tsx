import Landing from "@/components/OldWebsite/Landing";
import { LANDING_TYPE } from "@/components/OldWebsite/Landing/constants";

export const metadata = {
  title: "House Surveyors £269 | Home Surveys in 24 hrs | Houzecheck",
  description:
    "Home surveyors approved by RICS. Detailed house survey report. Surveys in 24 hrs. Low cost & free quote for home surveys by expert house surveyors",
};
const Book = () => {
  return <Landing type={LANDING_TYPE.HOUSESURVEYOR} />;
};

export default Book;
