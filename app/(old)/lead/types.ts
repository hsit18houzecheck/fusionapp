import type { ReactNode } from "react";

export type WithChildren = {
  children?: ReactNode;
};

export type OptionItem = {
  key: string;
  btnTitle: string;
  value: string;
};

export type LabelOptionItem = {
  key: string;
  label: string;
  value: string;
};

export type JobTypeValuationFormVals = {
  val_reason?: string;
  specific_reason?: string;
  val_for_lending?: string;
};

export type JobTypeValuationFieldLabels = {
  val_reason: string;
  specific_reason: string;
  val_for_lending: string;
  requirement_expert_witness: string;
};

export type JobTypeValuationProps = {
  formVals: JobTypeValuationFormVals;
  fieldLabels: JobTypeValuationFieldLabels;
};

export type JobTypeSurveyFormVals = {
  survey_type?: string;
  build_year_l2?: string;
  non_standard_prop?: string;
  had_alter_in_prop?: string;
  had_prop_extented?: string;
  plan_alter_in_prop?: string;
  is_prop_condtn_poor?: string;
};

export type JobTypeSurveyFieldLabels = {
  survey_type: string;
  build_year_l2: string;
  non_standard_prop: string;
  had_alter_in_prop: string;
  had_prop_extented: string;
  plan_alter_in_prop: string;
  is_prop_condtn_poor: string;
};

export type JobTypeSurveyProps = {
  surveyTypeFormVals: JobTypeSurveyFormVals;
  fieldLabels: JobTypeSurveyFieldLabels;
};

export type ContainerProps = WithChildren & {
  backBtnHandler?: () => void;
  goBack?: boolean;
  showBottomTxt?: boolean;
  isLoading?: boolean;
};

export type ButtonType = "defaultFilledBtn" | "defaultOutlineBtn";

export type LeadButtonProps = WithChildren & {
  btnType?: ButtonType;
  submit?: boolean;
  customClass?: string;
  onClickHandler?: () => void;
  loading?: boolean;
  id?: string;
};

export type FormSubmitButtonsProps = {
  backBtnHandler?: () => void;
  goBack?: boolean;
  nocontinue?: boolean;
  continueTxt?: string;
};
