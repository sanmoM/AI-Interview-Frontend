"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

// const navLinks = [
//   { name: "Home", href: "/", icon: <IoHomeOutline className="text-xl" /> },
//   {
//     name: "Service",
//     href: "/service",
//     icon: <FaHandHoldingHeart className="text-xl" />,
//   },
//   {
//     name: "Model",
//     href: "/model",
//     icon: <GrRestroomWomen className="text-xl" />,
//   },
//   {
//     name: "Blog",
//     href: "/blog",
//     icon: <LuLayoutTemplate className="text-xl" />,
//   },
// ];

const Header = ({ navLinks }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className=" bg-white lg:hidden p-4 md:p-6 rounded-xl sticky -top-2 shadow-sm shadow-secondary">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            onClick={() => setOpen(true)}
            className="text-2xl cursor-pointer text-primary lg:hidden"
          >
            <CiMenuFries />
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
          "fixed top-0 left-0 z-50 flex h-full w-72 flex-col bg-black p-3 transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-600 pb-6">
          <h2 className="text-lg font-semibold text-primary">EROSAE</h2>
          <button onClick={() => setOpen(false)}>
            <MdOutlineClose className="cursor-pointer text-white" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-1 flex-col justify-between">
          {/* NAV LINKS */}
          <ul className="space-y-1  text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded p-4 py-3",
                    pathname === link.href
                      ? "bg-gray-200 font-semibold text-primary"
                      : "hover:bg-gray-700"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {link.icon} {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* BOTTOM BUTTON */}
          {/* <div className="py-6">
            <Button
              size="lg"
              variant="secondary"
              className="w-full rounded-full"
            >
              Be a Model
            </Button>
          </div> */}
        </div>
      </aside>
    </>
  );
};

export default Header;
