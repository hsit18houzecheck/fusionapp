export type FooterProps = {
  hideLinks?: boolean;
  landingPageContent?: any;
  theme?: "dark" | "light";
};

export type FooterColumnContentItem = {
  label: string;
  url: string;
};

export type FooterColumn = {
  title: string;
  content: FooterColumnContentItem[];
};

