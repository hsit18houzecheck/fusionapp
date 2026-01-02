"use client";
import Field from "./components/Field";
import { surveyType } from "./constants";
import type { JobTypeSurveyProps } from "./types";

function JobTypeSurvey({ fieldLabels }: JobTypeSurveyProps) {
  return (
    <>
      <Field
        id="survey_type"
        controlType="radio"
        label={fieldLabels.survey_type}
        name="survey_type"
        optionVals={surveyType}
        radioType="type2"
      />

      {/* {surveyTypeFormVals.survey_type === level2Name.value && (
          <>
            <CautionComponent
              text="Level 2 survey is not suitable for every property, so we just need know a bit more about the
                  property before we can continue."
            />
            <FormControl
              controlType="dropdown"
              label={fieldLabels.build_year_l2}
              name="build_year_l2"
              optionVals={buildYear}
              dropdownType="type1"
            />
  
            <FormControl
              controlType="radio"
              label={fieldLabels.non_standard_prop}
              name="non_standard_prop"
              optionVals={nonStandardPropOptions}
              radioType="type3"
            />
            {surveyTypeFormVals.non_standard_prop === i_dont_know.value && (
              <CautionComponent type="info" text={iDontKnowWaring} />
            )}
            <FormControl
              controlType="radio"
              label={fieldLabels.had_alter_in_prop}
              name="had_alter_in_prop"
              optionVals={generalYesNoAndNotSure}
              radioType="type3"
            />
            {surveyTypeFormVals.had_alter_in_prop === i_dont_know.value && (
              <CautionComponent type="info" text={iDontKnowWaring} />
            )}
            <FormControl
              controlType="radio"
              label={fieldLabels.had_prop_extented}
              name="had_prop_extented"
              optionVals={generalYesNoAndNotSure}
              radioType="type3"
            />
            {surveyTypeFormVals.had_prop_extented === i_dont_know.value && (
              <CautionComponent type="info" text={iDontKnowWaring} />
            )}
            <FormControl
              controlType="radio"
              label={fieldLabels.plan_alter_in_prop}
              name="plan_alter_in_prop"
              optionVals={generalYesNoAndNotSure}
              radioType="type3"
            />
            {surveyTypeFormVals.plan_alter_in_prop === i_dont_know.value && (
              <CautionComponent type="info" text={iDontKnowWaring} />
            )}
            <FormControl
              controlType="radio"
              label={fieldLabels.is_prop_condtn_poor}
              name="is_prop_condtn_poor"
              optionVals={generalYesNoAndNotSure}
              radioType="type3"
            />
            {surveyTypeFormVals.is_prop_condtn_poor === i_dont_know.value && (
              <CautionComponent type="info" text={iDontKnowWaring} />
            )}
          </>
        )} */}
    </>
  );
}

export default JobTypeSurvey;
