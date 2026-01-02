import type { ButtonHTMLAttributes, ComponentType, ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  showLoader?: boolean;
  label?: ReactNode;
  labelClass?: string;
  width?: string;
  btnType?: "filled" | "outline";
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  rightComponent?: ComponentType<any>;
  href?: string;
};

export type ContainerProps = {
  children?: ReactNode;
  landing?: boolean;
  landingPageContent?: any;
};

export type PhoneWrapperProps = {
  children?: ReactNode;
  landingPageContent?: any;
};

export type StatsProps = {
  children?: ReactNode;
  bgDark?: boolean;
};

export type SurveyorSectionProps = {
  landing?: boolean;
  href?: string;
};

export type PropViewProps = {
  img: string | StaticImageData;
  txt: string;
  title: string;
  list: string[];
};

export type ListViewProps = {
  img: string | StaticImageData;
  txt: string;
  highlightTxt?: string;
  boldTxt?: string;
};
