import Landing from "@/components/OldWebsite/Landing";
import { LANDING_TYPE } from "@/components/OldWebsite/Landing/constants";

export const metadata = {
  title: "Property Surveyor £269 | Surveys in 24 hrs | Houzecheck",
  description:
    "Local property surveyors near you. Get a detailed property survey from qualified RICS surveyors. Surveys in 24 hrs. Low cost & free quote for RICS property survey by expert independent surveyors.",
};
const Book = () => {
  return <Landing type={LANDING_TYPE.PROPERTYSURVEYOR} />;
};

export default Book;
