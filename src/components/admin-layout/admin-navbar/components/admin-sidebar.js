"use client";

import Link from "next/link";
import { useState } from "react";
import { GoBriefcase } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { PiCaretUpDown, PiGearFineLight } from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";

export default function AdminSidebar() {
  const [activeNav, setActiveNav] = useState("ventures");

  const navItems = [
    { id: "ventures", label: "Ventures", icon: MdGridView },
    { id: "engine", label: "Engine", icon: PiGearFineLight },
    { id: "faqs", label: "FAQs", icon: TfiHelpAlt },
    { id: "jobs", label: "Jobs", icon: GoBriefcase },
    { id: "calls", label: "Calls", icon: LuPhoneCall },
  ];

  return (
    <aside className="w-64 2xl:w-72 bg-white border-r border-gray-200 flex flex-col h-full sticky top-0 px-6 py-6 2xl:py-8 rounded-4xl shadow-2xl">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0" />
        <div>
          <h2 className="text-lg 2xl:text-xl font-bold text-text-primary">
            Venture Studio
          </h2>
          <p className="text-sm 2xl:text-[15px] font-medium text-gray-500">
            Profiles engine
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <p className="text-xs 2xl:text-sm font-semibold text-gray-500 uppercase tracking-wide px-2 mb-8">
          Workspace
        </p>

        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <Link
                href={"#"}
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex cursor-pointer items-center gap-3 px-4 py-2.5 rounded-full  transition-all 2xl:text-lg ${
                  isActive
                    ? "bg-primary text-white font-medium"
                    : "text-text-gray"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User section */}
      <button className="w-full flex items-center gap-3 px-2 rounded-lg transition-colors group">
        <img
          src="/diverse-group-profile.png"
          alt="User profile"
          className="w-10 h-10 rounded-full bg-gray-200 shrink-0"
        />
        <div className="flex-1 text-left min-w-0">
          <p className="text-lg text-text-primary font-medium truncate">
            Alex Rivera
          </p>
          <p className="text-sm text-gray-500 truncate">Partner • Global</p>
          <p className="text-sm text-gray-400">Ventures</p>
        </div>
        <PiCaretUpDown className="w-4 h-4 text-text-primary shrink-0 transition-opacity" />
      </button>
    </aside>
  );
}
