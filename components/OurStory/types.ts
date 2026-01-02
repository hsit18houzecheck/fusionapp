export type StoryCard = {
  title: string;
  description: string;
  image: string;
};

export type OurStoryContent = {
  eyebrow?: string;
  title?: string;
  cards: StoryCard[];
};

