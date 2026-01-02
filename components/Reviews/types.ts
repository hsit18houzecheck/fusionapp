export type TPReview = {
  id: string;
  text: string;
  rating: number;
  title?: string | null;
  labels?: {
    verification?: {
      isVerified?: boolean;
    };
  };
  dates?: {
    experiencedDate?: string | null;
    publishedDate?: string | null;
  };
  consumer?: {
    displayName?: string;
    numberOfReviews?: number;
    countryCode?: string | null;
    imageUrl?: string | null;
  };
};

export type NormalizedReview = {
  id: string;
  name: string;
  initials: string;
  imageUrl: string;
  countryCode: string | null;
  reviewCount: number;
  rating: number;
  title: string;
  text: string;
  publishedDate: string | null;
};

export type Button = {
  label: string;
  url: string;
};

export type LastSlide = {
  title: string;
  description: string;
  primaryBtn: Button;
  secondaryBtn: Button;
};

export type ReviewsContent = {
  title: string;
  description: string;
  descriptionMobile: string;
  lastSlide: LastSlide;
};
