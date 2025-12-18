import UserSidebar from "@/components/user-layout/sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex py-4 px-6 h-screen overflow-y-auto gap-8">
      <UserSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
