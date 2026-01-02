import axios from "axios";

export type SocialProof = {
  last_24_hours: {
    summary: {
      message: string;
    }[];
    bookings: {
      message: string;
    }[];
  };
  this_week: {
    booking_summary: {
      message: string;
    }[];
  };
};

type SocialProofResponse = {
  result?: {
    social_proof?: SocialProof | null;
  };
};

export const getSocialProof = async (): Promise<SocialProof | null> => {
  try {
    const response = await axios.get<SocialProofResponse>(
      "https://houzecheck.service-now.com/api/houch/persuasion_messaging/social_proof"
    );
    return response.data?.result?.social_proof || null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Failed to fetch social proof: ${error.message}${error.response ? ` (${error.response.status})` : ""}`
      );
    } else {
      console.error("Failed to fetch social proof:", error);
    }
    return null;
  }
};
