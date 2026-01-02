export type ClassNames = {
  title?: string;
  subtitle?: string;
};

export type Feature = {
  title: {
    value: string;
    textColor: string;
  };
  subtitle: {
    value: string;
    textColor: string;
  };
  backgroundImage: string;
  contentPosition: "top" | "center" | "bottom";
  classNames?: ClassNames;
};

export type FeatureCards = {
  eyebrow: string;
  title: string;
  subtitle: string;
  perks: Feature[];
};

export type FeatureCardsProps = FeatureCards;

export type FeatureCardProps = Feature;

export type FeatureCardsSectionContent = {
  sectionHeader: {
    eyebrow?: {
      text: string;
      color?: string;
      variant?: string;
    };
    title?: {
      text: string;
      color?: string;
      size?: string;
    };
    subheading?: {
      text: string;
      color?: string;
      size?: string;
    };
  };
  features: Feature[];
  classNames?: ClassNames;
};
