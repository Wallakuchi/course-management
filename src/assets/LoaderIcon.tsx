import classNames from "classnames";
import type { ISvgIconProps } from "../types";

export function LoaderIcon({
  className,
  fill = "#000000",
  size = 20,
}: ISvgIconProps) {
  return (
    <svg
      className={classNames(["animate-spin", className])}
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={fill}
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
        fill={fill}
      />
      <path
        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        fill={fill}
      />
    </svg>
  );
}
