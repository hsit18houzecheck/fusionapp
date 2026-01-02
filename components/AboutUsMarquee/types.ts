export type MarqueeCard = {
  eyebrow?: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  videoFile?: string;
};

export type AboutUsMarqueeContent = {
  row1Cards: MarqueeCard[];
  row2Cards: MarqueeCard[];
};
