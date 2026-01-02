// CMS types for FAQ component - matches Builder.io structure
export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  eyebrow: string;
  title: string;
  description: string; // HTML string with links
  faq: FAQItem[]; // Note: lowercase 'faq' from CMS
};
