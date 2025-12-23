"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Header = ({ children, open, setOpen, title = "AI Interview" }) => {
  return (
    <>
      {/* HEADER */}
      <header className=" bg-white lg:hidden px-4 py-3 sticky top-0 z-10">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            onClick={() => setOpen(true)}
            className="text-2xl cursor-pointer text-primary lg:hidden"
          >
            <IoMenu className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
      </header>

      {/* SIDEBAR (md & below) */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-gray-900/50 transition-opacity backdrop-blur-[1px] lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-72 flex-col bg-white p-3 transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex items-center justify-between border-b border-primary pb-6">
          <h2 className="text-lg font-semibold text-primary md:text-xl">
            {title}
          </h2>
          <button onClick={() => setOpen(false)}>
            <MdOutlineClose className="cursor-pointer text-primary w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="flex flex-1 flex-col justify-between">{children}</div>
      </aside>
    </>
  );
};

export default Header;
