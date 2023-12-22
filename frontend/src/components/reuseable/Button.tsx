// Button.tsx

import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline"; // Define variant prop with allowed values
  colors?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  size = "medium",
  colors = "primary",
}) => {
  let sizeClassName = "";
  let variantClassName = "";

  switch (size) {
    case "small":
      sizeClassName = "text-sm";
      break;
    case "large":
      sizeClassName = "text-lg";
      break;
    default:
      sizeClassName = "text-base";
  }

  switch (colors) {
    case "primary":
      // animated gradient bg
      variantClassName =
        "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 hover:duration-500 duration-300";
      break;
    default:
      variantClassName = "bg-gray-500 hover:bg-gray-600 duration-300";
  }

  return (
    <button
      onClick={onClick}
      className={`text-white font-bold py-2 px-4 rounded ${colors} ${sizeClassName} ${variantClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
