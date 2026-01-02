export type ContactUsOption = {
  develop?: boolean;
  staging?: boolean;
  production?: boolean;
  label: string;
  url: string;
};

export type ContactUs = {
  develop?: boolean;
  staging?: boolean;
  production?: boolean;
  label: string;
  options: ContactUsOption[];
};

export type FooterLink = {
  develop?: boolean;
  staging?: boolean;
  production?: boolean;
  label: string;
  url: string;
};

export type FooterSubGroup = {
  develop?: boolean;
  staging?: boolean;
  production?: boolean;
  label: string;
  links: FooterLink[];
};

export type FooterLinkGroup = {
  group: { develop?: boolean }[];
  subGroup: FooterSubGroup[];
};

export type FooterBrand = {
  logo: string;
  tagLine: string;
};

export type FooterOfficeHours = {
  label: string;
  weekdays: string;
  saturdays: string;
};

export type SocialHandle = {
  icon: string;
  label: string;
  url: string;
};

export type Socials = {
  label: string;
  handles: SocialHandle[];
};

export type FooterContent = {
  brand: FooterBrand;
  copyright: string;
  contactUs: ContactUs;
  linkGroups: FooterLinkGroup[];
  officeHours: FooterOfficeHours;
  policyAndTermsLinks: FooterLink[];
  socials: Socials;
};
