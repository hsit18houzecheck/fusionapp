import { ErrorMessage, Field } from "formik";

import Label from "./Label";
import TextError from "./TextError";
import type { TextAreaProps } from "./types";

function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div className="md:pr-4 my-3">
      <Label name={name} text={label} />
      <Field
        as="textarea"
        className="bg-primary-lead-old-50 block w-full p-3 border border-primary-lead-old-200 outline-primary-lead-old-200 rounded-xl mt-2"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default TextArea;
