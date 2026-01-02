import type {
  ReactNode,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import type { LabelOptionItem } from "../../types";

export type FieldChoiceOption = {
  key: string | number;
  value: string;
  btnTitle: string;
  btnImg?: string;
  btnSubTitle?: string;
  btnList?: string[];
};

export type LabelProps = {
  name: string;
  text?: string;
};

export type TextErrorProps = {
  children?: ReactNode;
};

export type CarouselProps = {
  children: ReactNode;
  show: number;
};

export type InputFieldProps = {
  label: string;
  name: string;
  addressOpts?: string;
  id?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

export type TextAreaProps = {
  label: string;
  name: string;
  id?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

export type DropdownType = "type1" | "type2";

export type DropdownType1Props = {
  label: string;
  name: string;
  dropdownType: "type1";
  optionVals: FieldChoiceOption[];
  small?: boolean | number;
  updateVals?: string[];
  onClickHandler?: () => void;
  disabled?: boolean;
  id?: string;
  // Extra props passed via spread
  rest?: Record<string, unknown>;
};

export type DropdownType2Props = {
  label: string;
  name: string;
  dropdownType: "type2";
  optionVals: LabelOptionItem[];
  disabled?: boolean;
  onClickHandler?: () => void;
  id?: string;
  // Extra props passed via spread
  rest?: Record<string, unknown>;
};

export type DropdownProps = DropdownType1Props | DropdownType2Props;

export type RadioType = "type1" | "type2" | "type3" | "type4";

export type RadioButtonProps = {
  label?: string;
  name: string;
  optionVals: FieldChoiceOption[];
  children?: ReactNode;
  radioType: RadioType;
  onClickHandler?: (val: FieldChoiceOption) => void;
  id?: string;
  rest?: Record<string, unknown>;
};

export type FieldProps =
  | ({ controlType: "input" } & InputFieldProps)
  | ({ controlType: "textarea" } & TextAreaProps)
  | ({ controlType: "dropdown" } & DropdownProps)
  | ({ controlType: "radio" } & RadioButtonProps);
