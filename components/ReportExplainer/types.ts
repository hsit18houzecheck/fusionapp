export type ReportTab = {
  label: string;
  iconUrl?: string;
  image: string;
  mobileImage?: string;
  title: string;
  description: string; // Description text
};

export type ReportExplainerContent = {
  eyebrow?: string;
  title: string;
  description: string;
  tabs: ReportTab[];
};


