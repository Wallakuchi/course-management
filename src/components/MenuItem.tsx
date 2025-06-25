import { useState, type MouseEvent } from "react";
import classNames from "classnames";
import { NavLink, type To } from "react-router-dom";
import { Menu } from "./Menu";
import { IoCaretUpCircleOutline } from "react-icons/io5";

export interface IMenuItem {
  icon: React.ReactNode;
  label: string;
  to?: To;
  children?: IMenuItem[];
  showMenuItem: boolean;
}

export function MenuItem({
  children,
  label,
  icon,
  to,
  showMenuItem,
}: IMenuItem) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent) => {
    if (children && children.length) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const Component = (
    <div
      className={`flex items-center gap-2 ${classNames(
        children && children.length && "cursor-pointer"
      )} `}
      onClick={handleClick}
    >
      {icon}
      <div className="flex items-center">
        {label}
        {children && children.length && (
          <span className="ml-2 cursor-pointer">
            <IoCaretUpCircleOutline
              size={20}
              className={classNames(
                "transition-all",
                isOpen ? "rotate-0" : "rotate-180"
              )}
            />
          </span>
        )}
      </div>
    </div>
  );
  return (
    showMenuItem && (
      <li className="p-2 hover:bg-[#8f92a6] rounded-md">
        {to ? <NavLink to={to}>{Component}</NavLink> : Component}

        {children && children.length && (
          <Menu
            items={children}
            style={{ height: isOpen ? children.length * 40 : 0 }}
            className={"pl-6 overflow-y-hidden transition-all duration-300 h-0"}
          />
        )}
      </li>
    )
  );
}
