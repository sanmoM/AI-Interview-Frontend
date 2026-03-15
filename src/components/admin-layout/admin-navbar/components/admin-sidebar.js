"use client";

import Avatar from "@/components/ui/avatar";
import LogoutButton from "@/components/ui/buttons/logout-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCaretUpDown } from "react-icons/pi";

export default function AdminSidebar({ navItems, user }) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 2xl:w-72 bg-white border-r border-gray-200 flex-col h-full sticky top-0 px-6 py-6 2xl:py-8 rounded-4xl shadow-[0_4px_25px_0_rgba(23,26,31,0.25)]">
      <div className="flex items-center gap-3 mb-7">
        <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0" />
        <div>
          <h2 className="text-lg 2xl:text-xl font-bold text-text-primary">
            Admin Studio
          </h2>
          <p className="text-sm 2xl:text-[15px] font-medium text-gray-500">
            Profiles engine
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.Icon;
            const isActive = pathname === item.href;

            return (
              <Link
                href={item.href}
                key={item.id}
                // onClick={() => setActiveNav(item.id)}
                className={`w-full flex cursor-pointer items-center gap-3 px-4 py-2.5 rounded-full  transition-all 2xl:text-lg ${
                  isActive
                    ? "bg-primary text-white font-medium"
                    : "text-text-gray"
                }`}
              >
                {Icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      {console.log(user?.type === "venture_admin")}
      {/* User section */}
      <button className="w-full flex items-center gap-3 rounded-lg transition-colors group">
        <Avatar text={user?.type === "venture_admin" ? "VA" : "A"} />
        <div className="flex-1 text-left min-w-0">
          <p className="text-base 2xl:text-lg text-text-primary font-medium truncate">
            {user?.name}
          </p>
          <p className="text-xs 2xl:text-sm text-gray-400">{user?.type}</p>
        </div>
        {/* <PiCaretUpDown className="w-4 h-4 text-text-primary shrink-0 transition-opacity" /> */}
      </button>
      <LogoutButton userType={user?.type} />
    </aside>
  );
}
