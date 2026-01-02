import type { LabelProps } from "./types";

function Label({ name, text }: LabelProps) {
  return (
    <label
      htmlFor={name}
      className="text-primary-lead-old-800 font-semibold text-sm md:text-base"
    >
      {text}
    </label>
  );
}

export default Label;
