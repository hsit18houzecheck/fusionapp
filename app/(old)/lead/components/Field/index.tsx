import Input from "./Input";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";
import type {
  FieldProps,
  InputFieldProps,
  TextAreaProps,
  DropdownProps,
  RadioButtonProps,
} from "./types";

function Field(props: FieldProps) {
  switch (props.controlType) {
    case "input": {
      const { controlType, ...rest } = props as {
        controlType: "input";
      } & InputFieldProps;
      return <Input {...rest} />;
    }
    case "textarea": {
      const { controlType, ...rest } = props as {
        controlType: "textarea";
      } & TextAreaProps;
      return <TextArea {...rest} />;
    }
    case "dropdown": {
      const { controlType, ...rest } = props as {
        controlType: "dropdown";
      } & DropdownProps;
      return <Dropdown {...rest} />;
    }
    case "radio": {
      const { controlType, ...rest } = props as {
        controlType: "radio";
      } & RadioButtonProps;
      return <RadioButton {...rest} />;
    }
    default:
      return null;
  }
}

export default Field;
