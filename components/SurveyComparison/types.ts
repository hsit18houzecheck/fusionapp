import { ColumnType } from "../ComparisonTable/types";

export type RowType = {
  id: string;
  name: string;
  logo?: string;
  price: string;
  deliveryTime: string;
  service: string;
  displayName?: string;
  isBest?: boolean;
  tag?: string;
};

export type TableHeaderColumn = {
  label: string;
  key: string;
  iconUrl: string;
  mobileWidth?: string;
};

export type SurveyComparisonContent = {
  eyebrow?: string;
  title?: string;
  comparisonDate?: string;
  table: {
    columns: ColumnType[],
    rows: RowType[]
  };
  ctaButton?: {
    label: string;
    href: string;
  };
};
