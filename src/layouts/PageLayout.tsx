import classNames from "classnames";
import type { IChildren, IClassName } from "../types";
import { AppHeader, type IAppHeaderProps } from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

interface IPageLayout
  extends IChildren,
    IClassName,
    Omit<IAppHeaderProps, "right"> {
  headerRight?: React.ReactNode;
  loading?: boolean;
  noPadding?: boolean;
  noRounded?: boolean;
}

export function PageLayout({
  children,
  className,
  headerRight,
  loading,
  noPadding,
  noRounded,
  ...restAppHeaderProps
}: IPageLayout) {
  const myDivRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (myDivRef.current) {
      myDivRef.current.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-full w-full">
      <AppHeader {...restAppHeaderProps} right={headerRight} />
      <div ref={myDivRef} className="flex-grow overflow-y-auto p-4">
        <div
          className={classNames(
            "shadow-md print:shadow-none bg-white w-full",
            { "rounded-md": !noRounded, "p-6": !noPadding },
            className
          )}
        >
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              Loading...
            </div>
          ) : (
            children
          )}
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
