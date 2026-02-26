import React from "react";
import { Button } from "../ui/button";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  pending?: boolean;
  pendingText?: string;
  normalText?: string;
  type?: "button" | "submit" | "reset";
}

const AuthButton = ({
  onClick,
  disabled,
  className,
  pending,
  pendingText,
  normalText,
  type,
}: ButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${className || ""} py-7 md:py-7 font-heading w-full rounded-md text-base font-medium bg-[#951E95] hover:bg-[#951E95] shadow-lg`}
      >
        {pending
          ? pendingText || "Verifying..."
          : normalText || "Reset Password"}
      </Button>
    </>
  );
};

export default AuthButton;
