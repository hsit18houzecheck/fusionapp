import type { SurveyCompletedContent } from "./types"

export const DEFAULT_CONTENT: SurveyCompletedContent = {
  title: "And Another One.",
  count: 41366,
  description: "Surveys completed since 2018.",
  mapHeading: {
    heading1: "Houzecheck past surveys",
    heading2: " - National coverage",
  },
  mapSearchPlaceholder: "Enter property postcode to view survey coverage",
  mapLayerLabels: {
    today: "Surveys happening today",
    coverage: "Survey area coverage",
    past: "Past Surveys",
  },
  mapPostcodeInfoBox: {
    heading: "We've completed {surveyCount} surveys in {postcode}",
    subheading: "This area is covered by {surveyorCount} experienced surveyors.",
    description: "John, one of our surveyors, is FRICS qualified - the highest professional qualification a surveyor can achieve.",
    availabilityBadge: "Next available survey slot: {nextAvailableSlot}",
    ratingBadge: "{rating}-star rated in your area",
    ctaButton: {
      label: "Book your Survey today",
      url: "/",
    },
  },
  mapPopup: {
    surveyCompleted: "{count} survey completed",
    recentJob: "Recent Job:",
    disclaimer: "Disclaimer: For privacy reasons, the exact address is hidden.",
  },
  mapNotificationBanner: "MOST REPORTS DELIVERED IN 5 WORKING DAY",
}

