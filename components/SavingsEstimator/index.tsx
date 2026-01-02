import { getCMSData, CMS_KEYS } from "@/lib/cms";
import {
  SavingsEstimatorContent,
  SavingsEstimatorTopDefectsData,
} from "./types";
import { DEFAULT_CONTENT, DEFAULT_TOP_DEFECTS_DATA } from "./constant";
import { apiClientSSR } from "@/lib/apiClient";
import dynamic from "next/dynamic";

const SavingsEstimatorClient = dynamic(() => import("./Client"));

export default async function SavingsEstimator() {
  let content = DEFAULT_CONTENT as SavingsEstimatorContent;
  let topDefectsData =
    DEFAULT_TOP_DEFECTS_DATA as SavingsEstimatorTopDefectsData;

  try {
    const [cmsResult, topDefectsResult] = await Promise.allSettled([
      getCMSData<SavingsEstimatorContent>(CMS_KEYS.SAVINGS_ESTIMATOR_CONTENT, {
        cachebust: true,
        cache: false,
      }),
      apiClientSSR("api/v1/estimator/top-defects"),
    ]);

    const cmsData =
      cmsResult.status === "fulfilled" ? cmsResult.value : undefined;
    const topDefectsDataServer =
      topDefectsResult.status === "fulfilled"
        ? topDefectsResult.value
        : undefined;

    if (cmsData) {
      content = cmsData;
    }

    if (topDefectsDataServer?.data) {
      topDefectsData = topDefectsDataServer.data;
    }
  } catch (e) {
    console.error("Failed to fetch footer content from cms:", e);
  }

  return (
    <SavingsEstimatorClient {...content} topDefectsData={topDefectsData} />
  );
}
