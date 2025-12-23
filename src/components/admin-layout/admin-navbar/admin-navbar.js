"use client";

import NavLink from "@/components/shared/layout/header/components/nav-link";
import Header from "@/components/shared/layout/header/header";
import { useState } from "react";
import { GoBriefcase } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { PiGearFineLight } from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import AdminSidebar from "./components/admin-sidebar";

const navItems = [
  {
    id: "ventures",
    name: "Ventures",
    href: "/ventures",
    Icon: (
      <MdGridView className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    id: "engine",
    name: "Engine",
    href: "/engine",
    Icon: (
      <PiGearFineLight className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    id: "faqs",
    name: "FAQs",
    href: "/faqs",
    Icon: (
      <TfiHelpAlt className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    id: "jobs",
    name: "Jobs",
    href: "/jobs",
    Icon: (
      <GoBriefcase className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    id: "calls",
    name: "Calls",
    href: "/calls",
    Icon: (
      <LuPhoneCall className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
];

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:h-full sticky top-0 z-[9999] lg:py-6 w-full lg:w-fit">
      <Header open={open} setOpen={setOpen}>
        <ul className="space-y-1  text-gray-500">
          {navItems.map((link) => (
            <li key={link.id}>
              <NavLink link={link} setOpen={setOpen} />
            </li>
          ))}
        </ul>
      </Header>
      <AdminSidebar navItems={navItems} />
    </div>
  );
}
