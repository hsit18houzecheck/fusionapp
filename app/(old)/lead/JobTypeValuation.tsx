import Field from "./components/Field";
import { allConstantVals, valuationReasons } from "./constants";
import { generalYesNoAndNotSure, specificReasons } from "./utils";
import type { JobTypeValuationProps } from "./types";

function JobTypeValuation({ formVals, fieldLabels }: JobTypeValuationProps) {
  const {
    help_to_buy,
    shared_ownership,
    market_valuation,
    any_other_reason,
    no,
    i_dont_know,
  } = allConstantVals;

  return (
    <>
      <Field
        id="val_reason"
        controlType="dropdown"
        label={fieldLabels.val_reason}
        name="val_reason"
        optionVals={valuationReasons}
        dropdownType="type1"
        updateVals={["specific_reason"]}
        // onClickHandler={}
      />
      {(formVals.val_reason === help_to_buy.value ||
        formVals.val_reason === shared_ownership.value) && (
        <Field
          id="specific_reason"
          controlType="dropdown"
          label={fieldLabels.specific_reason}
          name="specific_reason"
          optionVals={specificReasons(formVals.val_reason) ?? []}
          dropdownType="type1"
        />
      )}
      {formVals.val_reason === any_other_reason.value && (
        <Field
          id="specific_reason"
          controlType="textarea"
          label={fieldLabels.specific_reason}
          name="specific_reason"
        />
      )}
      {(formVals.val_reason === market_valuation.value ||
        formVals.val_reason === any_other_reason.value) && (
        <Field
          id="val_for_lending"
          controlType="dropdown"
          label={fieldLabels.val_for_lending}
          name="val_for_lending"
          optionVals={generalYesNoAndNotSure}
          dropdownType="type1"
        />
      )}
      {(formVals.val_reason === market_valuation.value ||
        formVals.val_reason === any_other_reason.value) &&
        (formVals.val_for_lending === no.value ||
          formVals.val_for_lending === i_dont_know.value) && (
          <Field
            id="requirement_expert_witness"
            controlType="dropdown"
            label={fieldLabels.requirement_expert_witness}
            name="requirement_expert_witness"
            optionVals={generalYesNoAndNotSure}
            dropdownType="type1"
          />
        )}
    </>
  );
}

export default JobTypeValuation;
