import { CommonSectionHeader1Content } from "../CommonSectionHeader1/types";

export type JourneyStep = CommonSectionHeader1Content & {
  icon?: {
    url?: string;
    backgroundColor?: string;
    size?: number;
  };
};

export type JourneyToBeingIndependentContent = {
  sectionHeader: CommonSectionHeader1Content;
  steps: { step: JourneyStep }[];
};
