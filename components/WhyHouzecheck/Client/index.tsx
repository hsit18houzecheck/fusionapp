import dynamic from "next/dynamic";
import { WhyHouzecheckContent } from "../types";
import FeaturesSection from "./FeaturesSection";

const QuizCardsSection = dynamic(() => import("./QuizCardsSection"));
const SocialsSection = dynamic(() => import("./SocialsSection"));

export type WhyHouzecheckClientProps = WhyHouzecheckContent;

export default function WhyHouzecheckClient({
  eyebrow,
  heading,
  features,
  customerStoryEyebrow,
  customerStoryTitle,
  customerStorySubtitle,
  customerStoryVideo,
  socialsTitle,
  socialsSubtitle,
  socialsLink,
  cardDetails,
  quizdetails,
  surveyComparison,
}: WhyHouzecheckClientProps) {
  return (
    <section>
      {/* Features and Customer Story Section */}
      <FeaturesSection
        eyebrow={eyebrow}
        heading={heading}
        features={features}
        customerStoryEyebrow={customerStoryEyebrow}
        customerStoryTitle={customerStoryTitle}
        customerStorySubtitle={customerStorySubtitle}
        customerStoryVideo={customerStoryVideo}
      />

      {/* Quiz Cards Section */}
      <QuizCardsSection
        quizdetails={quizdetails}
        surveyComparison={surveyComparison}
      />

      {/* Socials and Card Details Section */}
      <SocialsSection
        socialsTitle={socialsTitle}
        socialsSubtitle={socialsSubtitle}
        socialsLink={socialsLink}
        cardDetails={cardDetails}
      />
    </section>
  );
}
