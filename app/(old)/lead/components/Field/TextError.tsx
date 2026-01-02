import type { FC, ReactNode } from "react";

const TextError: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="text-red-500">{children}</div>;
};

export default TextError;
