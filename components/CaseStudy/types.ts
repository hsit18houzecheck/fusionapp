export type CaseStudyContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type CaseStudyField = {
  title: string;
  subtitle: string;
  icon: string;
};

export type CaseStudy = {
  title: string;
  row1: CaseStudyField[];
  row2: CaseStudyField;
  row3: CaseStudyField;
  row4: CaseStudyField;
};

export type CaseStudyCarouselData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  slides: CaseStudy[];
};

export type CaseStudyProps = {
  content: CaseStudyContent;
  caseStudies: CaseStudy[];
};

export type CaseStudyClientProps = CaseStudyProps;

export type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export interface ExpandableSectionProps {
  icon: string;
  title: string;
  subtitle: string;
  isExpanded: boolean;
  onToggle: () => void;
  variant?: "default" | "highlight";
  sectionLabel?: string;
}
