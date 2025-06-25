import React from "react";
import classNames from "classnames";
import { LoaderIcon } from "../assets/LoaderIcon";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  disableOnLoading?: boolean;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger";
}

const SIZES = {
  sm: "py-1 px-2 text-xs leading-4",
  md: "py-2 px-4 text-sm leading-5",
  lg: "py-3 px-4 text-base",
};

const COLORS = {
  danger: "bg-red-600 hover:bg-red-800 hover:disabled:bg-red-600 text-white",
  primary:
    "bg-secondary hover:bg-primary hover:disabled:bg-secondary text-white",
  secondary:
    "bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:disabled:bg-white hover:disabled:text-secondary",
};

export function Button({
  className,
  disabled,
  disableOnLoading = false,
  size = "md",
  loading = false,
  variant = "primary",
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      className={classNames(
        "border-0 rounded cursor-pointer disabled:cursor-not-allowed flex items-center gap-x-1 shrink-0 whitespace-nowrap",
        { "opacity-50": disabled },
        COLORS[variant],
        SIZES[size],
        className
      )}
      disabled={(disableOnLoading && loading) || disabled}
      {...props}
    >
      {children}
      {loading && <LoaderIcon size={24} fill="#ffffff" />}
    </button>
  );
}
