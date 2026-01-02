import { CMSKey, getCMSData } from "@/lib/cms";
import { PageMetaData } from "./type";

export async function getPageMetadata(cmsPageKey: CMSKey, urlPath?: string) {
  const pageMetaData = await getCMSData<PageMetaData>(cmsPageKey, {
    userAttributes: { urlPath: urlPath || "" },
    cachebust: true,
    cache: false,
    fields: "data.page",
  });
  return {
    title:
      pageMetaData?.page?.title ||
      "Houzecheck - RICS Surveys & Valuations Made Easy",
    description:
      pageMetaData?.page?.description ||
      "Cheaper and faster way to conduct Homebuyers Survey, Building Surveys and Property Valuations from RICS Chartered Surveyors in England. No Middleman, No Multiple Quotes. Book Survey!",
  };
}
