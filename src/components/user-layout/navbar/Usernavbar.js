"use client";

import NavLink from "@/components/shared/layout/header/components/nav-link";
import Header from "@/components/shared/layout/header/header";
import { useState } from "react";
import { BsMeta } from "react-icons/bs";
import { FiHome, FiUser } from "react-icons/fi";
import UserSidebar from "./components/sidebar";

const navLinks = [
  {
    name: "Explore",
    href: "/",
    Icon: (
      <BsMeta className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    name: "Home",
    href: "/home",
    Icon: (
      <FiHome className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: (
      <FiUser className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
];

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:py-6 lg:h-full sticky top-0 z-10">
      <Header open={open} setOpen={setOpen}>
        {/* Sidebar Content */}

        {/* NAV LINKS */}
        <ul className="space-y-1  text-gray-500">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink link={link} setOpen={setOpen} />
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
      </Header>
      <UserSidebar navItems={navLinks} />
    </div>
  );
}
