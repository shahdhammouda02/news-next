import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  className,
  children,
  type = "button",
  disabled = false
}: ButtonProps) => {
  return (
    <div className="w-full">
      <button
        className={`font-bold px-5 py-3 me-2 mb-2 mt-2 focus:outline-none ${className}`}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;