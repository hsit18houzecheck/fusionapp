import { getInitials } from "@/lib/utils";
import { NormalizedReview, TPReview } from "./types";
import dayjs from "dayjs";

export function normalizeTrustPilotReviews(
  reviews: TPReview[]
): NormalizedReview[] {
  return (reviews || [])
    .filter((r) => r?.rating === 5)
    .map((r): NormalizedReview => {
      const displayName = r?.consumer?.displayName;
      const name = displayName ? displayName : "Customer";

      const publishedDate = r?.dates?.publishedDate
        ? dayjs(r.dates.publishedDate).toISOString()
        : null;

      const rating = Math.max(0, Math.min(5, r?.rating));

      return {
        id: r?.id,
        name,
        initials: getInitials(displayName || name),
        imageUrl: r?.consumer?.imageUrl ?? "",
        countryCode: r?.consumer?.countryCode ?? null,
        reviewCount: r?.consumer?.numberOfReviews || 0,
        rating,
        title: r?.title || "",
        text: r?.text,
        publishedDate,
      };
    });
}
