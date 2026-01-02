import { useState } from "react";
import { Field, ErrorMessage, type FieldProps } from "formik";

import TextError from "./TextError";
import Label from "./Label";
import type {
  DropdownProps,
  FieldChoiceOption,
  DropdownType1Props,
} from "./types";
import type { LabelOptionItem } from "../../types";

function Dropdown(props: DropdownProps) {
  const {
    label,
    name,
    optionVals,
    dropdownType,
    disabled,
    onClickHandler,
    ...rest
  } = props;
  // This is for responsive dropdown, when someone selects an option from the given options it sets the value and set displayOption to false
  const [displayOption, setDisplayOption] = useState(false);

  switch (dropdownType) {
    case "type1":
      // Narrow to the type1 variant to access small/updateVals safely
      const p1 = props as DropdownType1Props;
      return (
        <div className="mt-8">
          <Label name={name} text={label} />
          <Field name={name}>
            {({ form, field }: FieldProps) => {
              const { setFieldValue } = form;
              const { value } = field;
              // for responsive  design
              const seletedVal = (optionVals as FieldChoiceOption[]).filter(
                (obj) => obj.value === value
              )[0];
              return (
                <div
                  className={`flex flex-wrap mt-4 rounded-xl ${
                    displayOption && "shadow-lg"
                  } md:shadow-none`}
                >
                  <div
                    className="bg-primary-lead-old-50 rounded-xl p-3 w-full border border-primary-lead-old-100 drop-shadow flex md:hidden justify-between items-center"
                    role="button"
                    tabIndex={0}
                    onClick={() => setDisplayOption(!displayOption)}
                    onKeyDown={() => setDisplayOption(!displayOption)}
                  >
                    <p>{seletedVal?.btnTitle || "Please Select"}</p>
                    <p>&#x25BC;</p>
                  </div>
                  {(optionVals as FieldChoiceOption[]).map((val) => {
                    const onSelectHandler = () => {
                      setFieldValue(name, val.value);
                      setDisplayOption(false);
                      if (p1.updateVals) {
                        p1.updateVals.forEach((fieldName) => {
                          setFieldValue(fieldName, "");
                        });
                      }
                    };
                    return (
                      <div
                        id={name}
                        key={val.key}
                        className={`${
                          displayOption ? "block" : "hidden"
                        } md:block bg-white md:bg-primary-lead-old-50 rounded-xl p-3 md:m-2 w-full ${
                          p1.small ? "md:w-[8%] text-center" : "md:w-[31%]"
                        } md:border-2 ${
                          value === val.value
                            ? "md:border-primary-lead-old-500"
                            : "md:border-primary-lead-old-100"
                        } md:hover:drop-shadow relative`}
                        {...field}
                        {...rest}
                        role="button"
                        tabIndex={0}
                        onClick={onSelectHandler}
                        onKeyDown={onSelectHandler}
                      >
                        {val.btnTitle}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    case "type2":
      return (
        <div className="md:w-1/2 md:pr-4 my-3">
          <Label name={name} text={label} />
          <div
            onClick={onClickHandler}
            role="button"
            tabIndex={0}
            onKeyDown={onClickHandler}
          >
            <Field
              as="select"
              id={name}
              name={name}
              disabled={disabled}
              {...rest}
              className="bg-primary-lead-old-50 rounded-xl p-4 block w-full border border-primary-lead-old-200 outline-primary-lead-old-200 mt-2"
            >
              {(optionVals as LabelOptionItem[])?.map((option) => {
                return (
                  <option key={option.key} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Field>
          </div>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    default:
      return null;
  }
}

export default Dropdown;
