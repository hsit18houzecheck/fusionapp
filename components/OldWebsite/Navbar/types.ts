export type NavLink = {
  title: string;
  path: string;
};

export type NavMenuItem = {
  title: string;
  path: string | NavLink[];
};

export type NavDropdownProps = {
  obj: NavMenuItem;
  index: number;
  setActiveIndex: (index: number) => void;
  activeIndex: number | null;
};

export type NavProps = {
  hideLinks?: boolean;
  showOfferMsg?: boolean;
  landingPageContent?: any;
};

export type NavbarProps = {
  hideLinks?: boolean;
  showOfferMsg?: boolean;
  landingPageContent?: any;
};
