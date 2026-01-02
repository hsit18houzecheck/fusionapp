export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessContent = {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: ProcessStep[];
  button: {
    label: string;
    url: string;
  }
};

