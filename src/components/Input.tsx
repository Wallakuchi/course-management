import React from "react";
import classNames from "classnames";

export const InputStyleCls =
  "border border-gray-300 rounded py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100";

export function Input({
  className,
  type = "text",
  ...restProps
}: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...restProps}
      className={classNames(InputStyleCls, className)}
      step={type === "number" ? 0.01 : restProps.step}
      type={type}
    />
  );
}
