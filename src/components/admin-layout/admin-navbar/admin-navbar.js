import React from "react";
import AdminSidebar from "./components/admin-sidebar";

export default function AdminNavbar() {
  return (
    <div className="lg:h-full sticky top-0 z-10 lg:py-6">
      <AdminSidebar />
    </div>
  );
}
