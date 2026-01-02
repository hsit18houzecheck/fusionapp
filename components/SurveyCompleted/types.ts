export type SurveyCompletedContent = {
  title: string;
  count: number;
  description: string;
  mapHeading: {
    heading1: string;
    heading2?: string;
  };
  mapSearchPlaceholder: string;
  mapLayerLabels: {
    today: string;
    coverage: string;
    past: string;
  };
  mapPostcodeInfoBox: {
    heading: string;
    subheading: string;
    description: string;
    availabilityBadge: string;
    ratingBadge: string;
    ctaButton: {
      label: string;
      url: string;
    };
  };
  mapPopup: {
    surveyCompleted: string;
    recentJob: string;
    disclaimer: string;
  };
  mapNotificationBanner: string;
};

export type PostcodeInfo = {
  postcode: string;
  surveyCount: number;
  surveyorCount: number;
  nextAvailableSlot: string;
  rating: number;
};

export type SurveyMapProps = Pick<
  SurveyCompletedContent,
  | "mapHeading"
  | "mapSearchPlaceholder"
  | "mapLayerLabels"
  | "mapPostcodeInfoBox"
  | "mapNotificationBanner"
  | "mapPopup"
> & {
  className?: string;
  center?: [number, number];
  zoom?: number;
  mapStyle?: string;
  role?: string;
  "aria-label"?: string;
};

export type MapLayerToggleProps = Pick<
  SurveyCompletedContent,
  "mapLayerLabels"
> & {
  onToggleChange: (
    layer: "today" | "coverage" | "past",
    enabled: boolean
  ) => void;
  className?: string;
};

export type PostcodeInfoBoxProps = Pick<
  SurveyCompletedContent,
  "mapPostcodeInfoBox"
> &
  PostcodeInfo & {
    rating: number;
    className?: string;
    onClose: () => void;
  };

export type SearchBarProps = Pick<
  SurveyCompletedContent,
  "mapSearchPlaceholder"
> & {
  onSearch: (query: string) => void;
  className?: string;
};
