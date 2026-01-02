import ContactUsClient from "./Client";
import { getCMSData, CMS_KEYS } from "@/lib/cms";
import { ContactUsContent } from "./types";
import { DEFAULT_CONTENT } from "./constants";

export default async function ContactUs() {
  let content = DEFAULT_CONTENT as ContactUsContent;

  try {
    const cmsData = await getCMSData<ContactUsContent>(
      CMS_KEYS.CONTACT_US_CONTENT, { cachebust: true, cache: false }
    );

    if (cmsData) {
      content = cmsData;
    }
  } catch (error) {
    console.error("Failed to fetch contact us content from cms:", error);
  }

  return (
    <ContactUsClient
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      formFields={content.formFields}
      submitButtonLabel={content.submitButtonLabel}
      successMessage={content.successMessage}
      errorMessage={content.errorMessage}
    />
  );
}


