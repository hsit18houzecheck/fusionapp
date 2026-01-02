export type SectionTextProp = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export type SectionHeaderProps = {
  contentCenter?: boolean;
  duration?: number;
  eyebrow?: SectionTextProp | string;
  title?: SectionTextProp | string;
  subtitle?: SectionTextProp | string;
  headingClassName?: string;
  headerComponent?: React.ReactNode;
};

export type SectionWrapperProps = {
  center?: boolean;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  id?: string;
} & SectionHeaderProps;
