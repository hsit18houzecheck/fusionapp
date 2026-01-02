import { ReactNode } from "react";

export type BaseRowType = {
  name: string;
  [key: string]: string | boolean;
};

export type CellRendererProps<R extends BaseRowType> = {
  value: BaseRowType[keyof BaseRowType];
  row: R;
  column: ColumnType<R>;
  rowIndex: number;
  columnIndex: number;
};

export type ColumnType<R extends BaseRowType = BaseRowType> = {
  icon: string;
  label: string;
  value: string;
  renderCell?: (props: CellRendererProps<R>) => ReactNode;
};

export type ComparisonTableProps<R extends BaseRowType> = {
  columns: ColumnType<R>[];
  rows: R[];
  className?: string;
  gridTemplateColumns?: string;
  bestRowClassName?: string;
};

export type RowVariant = "best" | "normal";