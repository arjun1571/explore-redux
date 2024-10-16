import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  handler?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, handler }) => {
  return (
    <button className={`${className ? className : "px-3 py-2 bg-red-500 rounded shadow text-white"}`} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
