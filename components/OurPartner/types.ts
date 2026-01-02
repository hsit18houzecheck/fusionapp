export type PartnerLogo = {
  image: string;
  alt: string;
};

export type OurPartnerContent = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  partners: PartnerLogo[];
  backgroundColor: string;
};

