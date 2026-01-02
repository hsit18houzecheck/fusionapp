export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string; // Background image path
  price: string; // e.g. "from £489"
  highlights?: { title: string }[];
  badge?: string; // e.g. "Most popular"
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type ServicesContent = {
  heading: string;
  title: string;
  subtitle?: string;
  lastcard: {
    title: string;
    subtitle?: string;
    cta: { label: string; href: string };
  };
  serviceitems: ServiceItem[];
};
