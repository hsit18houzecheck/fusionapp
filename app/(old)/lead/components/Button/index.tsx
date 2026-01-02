import type { LeadButtonProps, ButtonType } from "../../types";

function Button({
  btnType = "defaultFilledBtn",
  submit = false,
  children,
  customClass = "",
  onClickHandler,
  loading,
  id,
}: LeadButtonProps) {
  const btnTypeClass: Record<ButtonType, string> = {
    defaultFilledBtn: "bg-primary-lead-old-600 text-white py-4 px-8 rounded-xl",
    defaultOutlineBtn:
      "bg-transparent text-primary-lead-old-600 border border-primary-lead-old-600 py-4 px-8 rounded-xl",
  };
  return (
    <button
      className={`${btnTypeClass[btnType]} ${customClass} ${
        loading ? "bg-secondary-lead-old-400" : ""
      }`}
      type={submit ? "submit" : "button"}
      onClick={onClickHandler}
      disabled={loading}
      {...(id && { id: `${id}-button` })}
    >
      {children}
    </button>
  );
}

export default Button;
