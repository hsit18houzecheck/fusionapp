import { ColumnType } from "../ComparisonTable/types";

export type RowType = {
  logo?: string;
  name: string;
  admin: string;
  bonus: string;
  community: string;
  flexibility: string;
  freedom: string;
  isBest: boolean;
  marketing: string;
  performance: string;
  support: string;
  tag?: string
};

export type HCComparisonContent = {
  eyebrow?: string;
  title?: string;
  subheading?: string;
  table: {
    columns: ColumnType<RowType>[],
    rows: RowType[]
  };
  ctaBtn: {
    icon: string;
    label: string;
    url: string;
  };
};

export type RowVariant = "best" | "normal";

export type RowItemProps = {
  row: HCComparisonContent["table"]["rows"][0];
  columns: HCComparisonContent["table"]["columns"];
  isLast: boolean;
};
