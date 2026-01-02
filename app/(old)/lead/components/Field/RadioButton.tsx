import { Field, ErrorMessage, type FieldProps } from "formik";
import TextError from "./TextError";
import Label from "./Label";
import Carousel from "./Carousel";
import type { RadioButtonProps } from "./types";

function RadioButton({
  label,
  name,
  optionVals,
  children,
  radioType,
  onClickHandler,
  ...rest
}: RadioButtonProps) {
  switch (radioType) {
    case "type1":
      return (
        <div>
          <label
            htmlFor={name}
            className="text-primary-lead-old-800 font-semibold text-sm md:text-base"
          >
            {label}
          </label>
          <Field name={name}>
            {({ form, field }: FieldProps) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <div className="md:flex justify-between mt-4">
                  {optionVals.map((val) => (
                    <div
                      id={name}
                      className={`bg-primary-lead-old-50 mb-3 rounded-xl p-6 mx-2 md:w-[48%] border ${
                        value === val.value
                          ? "border-primary-lead-old-500"
                          : "border-primary-lead-old-100"
                      } hover:drop-shadow relative`}
                      key={val.key}
                      {...field}
                      {...rest}
                      role="button"
                      tabIndex={0}
                      onClick={() => setFieldValue(name, val.value)}
                      onKeyDown={() => setFieldValue(name, val.value)}
                    >
                      {value === val.value && <SelectedTick />}
                      <img
                        className="bg-white p-4 rounded-xl mx-auto w-24 h-auto"
                        src={val.btnImg ?? ""}
                        alt=""
                      />
                      <p className="mt-3 text-primary-lead-old-800 font-semibold text-base text-center">
                        {val.btnTitle}
                      </p>
                      <p className="text-primary-lead-old-800 text-center text-sm mt-2">
                        {val.btnSubTitle}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    case "type2":
      return (
        <div className="mt-8">
          {/* TODO: try to use render props  */}
          <Label name={name} text={label} />
          <Field name={name}>
            {({ form, field }: FieldProps) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <div className="md:flex justify-between mt-4">
                  {optionVals.map((val) => (
                    <div
                      id={name}
                      className={`mb-3 bg-primary-lead-old-50 rounded-xl p-6 md:w-[48%] border ${
                        value === val.value
                          ? "border-primary-lead-old-500"
                          : "border-primary-lead-old-100"
                      } hover:drop-shadow relative`}
                      key={val.key}
                      {...field}
                      {...rest}
                      role="button"
                      tabIndex={0}
                      onClick={() => setFieldValue(name, val.value)}
                      onKeyDown={() => setFieldValue(name, val.value)}
                    >
                      {value === val.value && <SelectedTick />}
                      <img
                        className="bg-white p-4 rounded-xl mx-auto w-full h-auto border border-primary-lead-old-100"
                        src={val.btnImg ?? ""}
                        alt=""
                      />
                      <p className="mt-3 text-primary-lead-old-800 font-semibold text-base">
                        {val.btnTitle}
                      </p>
                      {/* <p className="text-primary-lead-old-800 text-center mt-2">{val.btnSubTitle}</p> */}
                      <ul className="list-['✓'] ml-3 text-primary-lead-old-800 text-sm">
                        {val.btnList?.map((listVal) => (
                          <li
                            key={listVal}
                            className="pl-3 leading-6 md:leading-5 mb-2"
                          >
                            {listVal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    case "type3":
      return (
        <div className="mt-8">
          <Label name={name} text={label} />
          <Field name={name}>
            {({ form, field }: FieldProps) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <div className="flex flex-nowrap mt-4">
                  {optionVals.map((val) => (
                    <div
                      id={name}
                      key={val.key}
                      className={`bg-primary-lead-old-50 rounded-xl p-3 m-2 w-[31%] border-2 ${
                        value === val.value
                          ? "border-primary-lead-old-500"
                          : "border-primary-lead-old-100"
                      } hover:drop-shadow relative`}
                      {...field}
                      {...rest}
                      role="button"
                      tabIndex={0}
                      onClick={() => setFieldValue(name, val.value)}
                      onKeyDown={() => setFieldValue(name, val.value)}
                    >
                      {val.btnTitle}
                    </div>
                  ))}
                </div>
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    case "type4":
      return (
        <div className="mt-3">
          {label && <Label name={name} text={label} />}
          <Field name={name}>
            {({ form, field }: FieldProps) => {
              const { setFieldValue } = form;
              const { value } = field;

              return (
                <Carousel show={5}>
                  {optionVals.map((val) => {
                    const btnTitleArr = val.btnTitle.split(" ");
                    // <div
                    //   id={name}
                    //   key={val.key}
                    //   className={`bg-primary-lead-old-50 rounded-xl p-3 m-2 w-[31%] border-2 ${
                    //     value === val.value ? 'border-primary-lead-old-500' : 'border-primary-lead-old-100'
                    //   } hover:drop-shadow relative`}
                    //   {...field}
                    //   {...rest}
                    //   role="button"
                    //   tabIndex={0}
                    //   onClick={() => setFieldValue(name, val.value)}
                    //   onKeyDown={() => setFieldValue(name, val.value)}>
                    //   {val.btnTitle}
                    // </div>
                    return (
                      <div
                        id={name}
                        key={val.key}
                        className={`bg-primary-lead-old-50 rounded-xl p-3 m-2 border-2 text-center ${
                          value === val.value
                            ? "border-primary-lead-old-500"
                            : "border-primary-lead-old-100"
                        } hover:drop-shadow relative`}
                        {...field}
                        {...rest}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setFieldValue(name, val.value);
                          onClickHandler?.(val);
                        }}
                        onKeyDown={() => setFieldValue(name, val.value)}
                      >
                        <span className="font-bold">{btnTitleArr[0]}</span>
                        <br />
                        {btnTitleArr[1]}
                      </div>
                    );
                  })}
                </Carousel>
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </div>
      );
    default:
      return null;
  }
}

function SelectedTick() {
  return (
    <div className="absolute w-7 h-7 bg-primary-lead-old-500 rounded-full top-2 right-2">
      <div className="font-bold relative text-center top-0.5 text-white">
        &#10003;
      </div>
    </div>
  );
}

export default RadioButton;
