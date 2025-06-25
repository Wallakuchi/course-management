import React from "react";

export interface IAppHeaderProps {
  heading?: string;
  right?: React.ReactNode;
}

export const AppHeader = ({ heading, right }: IAppHeaderProps) => {
  return (
    <div className="bg-white py-4 md:py-0 px-4 h-auto md:h-[65px] border-b border-gray-200 flex justify-between items-center shrink-0 noprint sticky top-0">
      <div className="flex justify-between items-center w-full h-full flex-wrap  gap-4">
        <h1 className="text-xl capitalize">{heading}</h1>
        {/* <div className="border border-gray-200 rounded-sm px-4 py-1.5 flex items-center justify-center bg-gray-100">
          <input
            type="text"
            name=""
            id=""
            className="outline-none min-w-[300px]"
            placeholder="search here..."
          />
          <button className="cursor-pointer">
            <BiSearch />
          </button>
        </div> */}
        <div className="flex items-center gap-x-4">{right}</div>
      </div>
    </div>
  );
};
