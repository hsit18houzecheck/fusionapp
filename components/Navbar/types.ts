export type NavChild = {
  label: string;
  url: string;
};

export type NavLink = {
  label: string;
  url: string;
  children?: NavChild[];
};

export type Logo = {
  url: string;
};

export type NavigationContent = {
  links: NavLink[];
  logo: Logo;
  logoMobile: Logo;
  partnerLink: {
    label: string;
    url: string;
  };
  contactNumber: string;
};
