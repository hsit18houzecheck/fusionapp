import { allConstantVals } from "./constants";
import { OptionItem } from "./types";

const specificReasonsHTB: OptionItem[] = [
  {
    key: "key1",
    btnTitle: allConstantVals.redeeming_loan.label,
    value: allConstantVals.redeeming_loan.value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals.re_mortgaging.label,
    value: allConstantVals.re_mortgaging.value,
  },
];
const specificReasonsSO: OptionItem[] = [
  {
    key: "key1",
    btnTitle: allConstantVals.selling.label,
    value: allConstantVals.selling.value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals.staircasing.label,
    value: allConstantVals.staircasing.value,
  },
  {
    key: "key3",
    btnTitle: allConstantVals.re_mortgaging.label,
    value: allConstantVals.re_mortgaging.value,
  },
];

export function specificReasons(valReason: string): OptionItem[] | null {
  const { help_to_buy, shared_ownership } = allConstantVals;
  if (valReason === help_to_buy.value) {
    return specificReasonsHTB;
  }
  if (valReason === shared_ownership.value) {
    return specificReasonsSO;
  }
  return null;
}

export const generalYesNoAndNotSure: OptionItem[] = [
  {
    key: "key1",
    btnTitle: allConstantVals.yes.label,
    value: allConstantVals.yes.value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals.no.label,
    value: allConstantVals.no.value,
  },
  {
    key: "key3",
    btnTitle: allConstantVals.i_dont_know.label,
    value: allConstantVals.i_dont_know.value,
  },
];
