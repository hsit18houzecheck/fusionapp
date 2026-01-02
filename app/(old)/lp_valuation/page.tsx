import Landing from "@/components/OldWebsite/Landing";
import { LANDING_TYPE } from "@/components/OldWebsite/Landing/constants";

export const metadata = {
  title: "Book a Home Buyers Survey or Valuation Online | Houzecheck",
  description:
    "Book a Home Buyers Survey or Valuation with Houzecheck today and discover the information you need to sell or buy with confidence.",
};
const Book = () => {
  return <Landing type={LANDING_TYPE.VALUATION} />;
};

export default Book;
