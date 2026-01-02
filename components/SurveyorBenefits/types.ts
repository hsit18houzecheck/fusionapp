export type BenefitCard = {
  roleType: string;
  image: string;
  benefits: { title: string }[];
};

export type SurveyorBenefitsContent = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards: BenefitCard[];
  cta: {
    label: string;
    href: string;
  };
  benefitsCtaLabel: string;
};

export type BenefitCardComponentProps = {
  card: BenefitCard;
  id: number;
  isActive: boolean;
  onToggle: (index: number | null) => void;
  benefitsCtaLabel: string;
};