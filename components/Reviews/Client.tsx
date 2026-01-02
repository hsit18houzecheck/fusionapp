import type { NormalizedReview, ReviewsContent } from "./types";
import AnimateOnView from "../ui/animate-on-view";
import dynamic from "next/dynamic";

const Truspilot = dynamic(() => import("../Trustpilot"));
const ReviewsCarousel = dynamic(() =>
  import("./ReviewsCarousel").then((mod) => mod.ReviewsCarousel)
);

type ReviewsClientProps = {
  content: ReviewsContent;
  reviews: NormalizedReview[];
};

const ReviewsClient = ({ content, reviews }: ReviewsClientProps) => {
  if (!reviews?.length) return null;
  return (
    <section className="overflow-hidden relative">
      <div className="overflow-visible md:max-w-[110rem] pb-6 md:pb-10 px-6 md:px-10 mx-auto">
        <div className="overflow-visible w-full bg-primary h-[45rem] md:h-[31.5rem] px-6 md:px-20 mx-auto rounded-3xl relative pt-16 md:pt-20">
          {/* <div className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-background rotate-45"></div> */}
          <div className="flex flex-col md:flex-row md:space-x-12 h-full">
            <div className="space-y-8 mt-0 md:mt-6">
              <AnimateOnView>
                <h2
                  className="font-freight text-2xl md:text-4xl font-medium whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: content.title }}
                />
              </AnimateOnView>
              <AnimateOnView delay={1 * 0.15}>
                <h3
                  className="hidden md:block font-medium text-grey-500 text-base md:text-lg md:whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </AnimateOnView>
              <AnimateOnView delay={1 * 0.15}>
                <h3
                  className="block md:hidden font-medium text-grey-500 text-base md:text-lg md:whitespace-nowrap"
                  dangerouslySetInnerHTML={{
                    __html: content.descriptionMobile,
                  }}
                />
              </AnimateOnView>
              <AnimateOnView delay={2 * 0.15}>
                <div className="w-full">
                  <Truspilot />
                </div>
              </AnimateOnView>
            </div>
          </div>
          <ReviewsCarousel reviews={reviews} lastSlide={content.lastSlide} />
        </div>
      </div>
    </section>
  );
};

export default ReviewsClient;
