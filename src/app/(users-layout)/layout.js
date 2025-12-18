import UserSidebar from "@/components/user-layout/navbar/components/sidebar";
import UserNavbar from "@/components/user-layout/navbar/Usernavbar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row py-4 px-4 md:px-6 h-screen overflow-y-auto gap-4 lg:gap-8">
      <UserNavbar />
      <div className="flex-1 bg-white p-4 md:p-8 rounded-2xl lg:rounded-4xl shadow-lg shadow-secondary">
        {children}
      </div>
    </div>
  );
}
