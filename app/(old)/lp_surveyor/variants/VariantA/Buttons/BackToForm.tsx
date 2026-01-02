"use client";

import { cn } from "@/lib/utils";
import { BackToFormProps } from "../../../types";

const BackToForm: React.FC<BackToFormProps> = ({
  children,
  formId = "book-form-containter",
  theme = "light",
  className,
  ...rest
}) => {
  const handleClick = () => {
    const formElement = document.getElementById(formId);
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={cn(
        "border-2 rounded h-[50px] flex justify-center items-center text-base md:text-lg w-full max-w-[440px] mx-auto font-bold",
        {
          "text-secondary-old border-secondary-old": theme === "light",
          "text-white border-white": theme === "dark",
        },
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {children || "Back to form"}
    </button>
  );
};

export default BackToForm;
