"use server";

import { unstable_cache } from "next/cache";

const RAPIDAPI_HOST = "unofficial-trust-pilot.p.rapidapi.com";
const BASE_URL = `https://${RAPIDAPI_HOST}/business-units/v2/get-reviews`;
const BUSINESS_NAME = "houzecheck.com";

// Cache TTL: 12 hours (twice a day)
const REVALIDATE_SECONDS = 60 * 60 * 12; // 43200

async function fetchReviews(page: number = 1) {
  const apiKey = process.env.RAPIDAPI_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing RapidAPI key. Set RAPIDAPI_KEY in your environment."
    );
  }

  const url = new URL(BASE_URL);
  url.searchParams.set("identifyingName", BUSINESS_NAME);
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "x-rapidapi-host": RAPIDAPI_HOST,
      "x-rapidapi-key": apiKey,
    },
    // We control caching via unstable_cache, so avoid fetch-layer caching
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RapidAPI fetch failed (${res.status}): ${text}`);
  }

  return res.json();
}

// Cached fetch function for houzecheck.com reviews
export const fetchReviewsCached = unstable_cache(
  fetchReviews,
  ["trustpilot-reviews", BUSINESS_NAME],
  { revalidate: REVALIDATE_SECONDS }
);
