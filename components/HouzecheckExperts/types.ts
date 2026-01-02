export type TeamMember = {
  name: string;
  title: string;
  image?: string;
  eyebrow?: string;
};

export type TeamType = {
  teamName: string;
  teamMembers: TeamMember[];
};

export type HouzecheckExpertsContent = {
  eyebrow?: string;
  title?: string;
  teamTypes: TeamType[];
};

