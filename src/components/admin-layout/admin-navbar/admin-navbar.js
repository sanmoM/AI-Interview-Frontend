"use client";

import { GoBriefcase } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { PiGearFineLight } from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import AdminSidebar from "./components/admin-sidebar";

const navItems = [
  { id: "ventures", label: "Ventures", icon: MdGridView },
  { id: "engine", label: "Engine", icon: PiGearFineLight },
  { id: "faqs", label: "FAQs", icon: TfiHelpAlt },
  { id: "jobs", label: "Jobs", icon: GoBriefcase },
  { id: "calls", label: "Calls", icon: LuPhoneCall },
];

export default function AdminNavbar() {
  return (
    <div className="lg:h-full sticky top-0 z-10 lg:py-6 w-fit">
      <AdminSidebar navItems={navItems} />
    </div>
  );
}
