import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function NoData() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 text-gray-400 text-sm font-medium min-h-[300px]">
        <IoSearchOutline className="w-7 h-7" />
        <p>No results found</p>
      </div>
    </div>
  );
}
