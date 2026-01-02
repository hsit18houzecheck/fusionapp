import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className,
  showLoader,
  label,
  labelClass,
  width = "w-30",
  btnType = "filled",
  borderRadius = "rounded-lg",
  borderColor = "gray-400", // Default border color
  backgroundColor = "primary-old", // Default background color
  rightComponent: RightComponent,
  href,
  ...rest
}) => {
  const buttonStyle =
    btnType === "outline"
      ? `border border-solid border-${borderColor} text-${borderColor} hover:bg-${borderColor}-100`
      : `bg-${backgroundColor} text-white`;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? (
      <Link href={href} {...(rest.id && { id: `${rest.id}-link` })}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <button
        className={cn(
          `p-4 text-center`,
          width,
          borderRadius,
          buttonStyle,
          className
        )}
        disabled={showLoader}
        onClick={onClick}
        type={type}
        {...rest}
        {...(rest.id && { id: `${rest.id}-button` })}
      >
        <div className="flex items-center justify-center pointer-events-none">
          {showLoader && (
            <svg
              className="mr-3 h-5 w-5 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              ></path>
            </svg>
          )}
          <p className={cn(`mb-0`, labelClass)}>{label}</p>
          {RightComponent && <RightComponent />}
        </div>
      </button>
    </Wrapper>
  );
};

export default Button;
