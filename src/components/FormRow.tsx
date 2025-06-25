import classNames from "classnames";
import { Input } from "./Input";
import type { FieldErrors } from "react-hook-form";

interface IFormRow extends React.ComponentPropsWithoutRef<"input"> {
  errors?: FieldErrors;
  label: string;
  children?: React.ReactNode;
  wrapperClass?: string;
}

export function FormRow({
  children,
  errors,
  label,
  required,
  wrapperClass,
  ...inputProps
}: IFormRow) {
  return (
    <div className={classNames("flex flex-col", wrapperClass)}>
      <label className="text-xs mb-1">
        {label}
        {required && <span className="text-red-500">* </span>}
      </label>
      {children ?? <Input {...inputProps} />}
      {inputProps.name && errors?.[inputProps.name] && (
        <p className="text-red-500 text-tiny">
          {errors?.[inputProps.name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
