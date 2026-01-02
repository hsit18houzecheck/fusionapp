import { Field, ErrorMessage, type FieldProps } from "formik";

import TextError from "./TextError";
import Label from "./Label";
import type { InputFieldProps } from "./types";

function Input({ label, name, addressOpts, ...rest }: InputFieldProps) {
  return (
    <div className="md:w-1/2 md:pr-4 my-3">
      <Label name={name} text={label} />
      {addressOpts ? (
        <Field name={name}>
          {({ form, field }: FieldProps) => {
            const { setFieldValue } = form;
            return (
              <input
                className="bg-primary-lead-old-50 block w-full p-3 border border-primary-lead-old-200 outline-primary-lead-old-200 rounded-xl mt-2"
                id={name}
                {...field}
                {...rest}
                onChange={(e) => {
                  setFieldValue(name, e.target.value);
                  setFieldValue(addressOpts, "");
                }}
              />
            );
          }}
        </Field>
      ) : (
        <Field
          className="bg-primary-lead-old-50 block w-full p-3 border border-primary-lead-old-200 outline-primary-lead-old-200 rounded-xl mt-2"
          id={name}
          name={name}
          {...rest}
        />
      )}
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
