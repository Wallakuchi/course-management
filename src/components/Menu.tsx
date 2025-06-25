import classNames from "classnames";
import type { IClassName } from "../types";
import { MenuItem, type IMenuItem } from "./MenuItem";
import type { CSSProperties } from "react";

interface IMenu extends IClassName {
  items: IMenuItem[];
  style?: CSSProperties;
}

export function Menu({ className, items, style }: IMenu) {
  return (
    <ul
      className={classNames("px-2 mt-4 flex flex-col gap-y-2", className)}
      style={style}
    >
      {items.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </ul>
  );
}
