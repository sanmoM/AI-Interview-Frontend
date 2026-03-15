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
import { useSelector } from "react-redux";

const adminNavItems = [
  {
    id: "ventures",
    name: "Ventures",
    href: "/ventures",
    Icon: (
      <MdGridView className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  // {
  //   id: "engine",
  //   name: "Engine",
  //   href: "/engine",
  //   Icon: (
  //     <PiGearFineLight className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
  //   ),
  // },
  // {
  //   id: "faqs",
  //   name: "FAQs",
  //   href: "/faqs",
  //   Icon: (
  //     <TfiHelpAlt className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
  //   ),
  // },
  // {
  //   id: "calls",
  //   name: "Calls",
  //   href: "/calls",
  //   Icon: (
  //     <LuPhoneCall className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
  //   ),
  // },
];

const ventureNavItems = [
  {
    id: "ventures",
    name: "Ventures Profile",
    href: "/ventures/venture-profile",
    Icon: (
      <MdGridView className="lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-[24px] 2xl:h-[24px]" />
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
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="lg:h-full sticky top-0 z-[9999] lg:py-6 w-full lg:w-fit">
      <Header open={open} setOpen={setOpen}>
        <ul className="space-y-1  text-gray-500">
          {adminNavItems.map((link) => (
            <li key={link.id}>
              <NavLink link={link} setOpen={setOpen} />
            </li>
          ))}
        </ul>
      </Header>
      <AdminSidebar
        navItems={
          user?.type === "venture_admin" ? ventureNavItems : adminNavItems
        }
        // userType={user?.type}
        user={user}
      />
    </div>
  );
}
