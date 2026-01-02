import { CMS_KEYS, getCMSData } from "@/lib/cms";
import ReviewsClient from "./Client";
import { DEFAULT_CONTENT, DEFAULT_REVIEWS, REVIEW_SOURCES } from "./constants";
import { normalizeTrustPilotReviews } from "./utils";
import { ReviewsContent, TPReview } from "./types";
import { fetchReviewsCached } from "@/lib/actions/reviews";

type ReviewsProps = {
  source?: (typeof REVIEW_SOURCES)[keyof typeof REVIEW_SOURCES];
};

export default async function Reviews({
  source = REVIEW_SOURCES.TRUST_PILOT,
}: ReviewsProps) {
  const cmsPromise = getCMSData<ReviewsContent>(
    CMS_KEYS.TRUSTPILOT_REVIEWS_CONTENT, { cachebust: true, cache: false }
  );
  const reviewsPromise = fetchReviewsCached(1);

  const [cmsResult, reviewsResult] = await Promise.allSettled([
    cmsPromise,
    reviewsPromise,
  ]);

  let content = DEFAULT_CONTENT as ReviewsContent;
  if (cmsResult.status === "fulfilled" && cmsResult.value) {
    content = cmsResult.value;
  } else if (cmsResult.status === "rejected") {
    console.error(
      "Failed to fetch trustpilot reviews content from cms:",
      cmsResult.reason
    );
  }

  let reviews: ReturnType<typeof normalizeTrustPilotReviews> = [];
  if (source === REVIEW_SOURCES.TRUST_PILOT) {
    const tpReviews: TPReview[] =
      reviewsResult.status === "fulfilled" && reviewsResult.value
        ? (reviewsResult.value?.reviews ?? [])
        : DEFAULT_REVIEWS;

    reviews = normalizeTrustPilotReviews(tpReviews);

    if (reviewsResult.status === "rejected") {
      console.error(
        "Failed to fetch trustpilot reviews from API:",
        reviewsResult.reason
      );
    }
  }

  return <ReviewsClient content={content} reviews={reviews.slice(0, 8)} />;
}
