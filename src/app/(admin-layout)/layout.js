import AdminNavbar from "@/components/admin-layout/admin-navbar/admin-navbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
      <AdminNavbar />
      <div className="flex-1 m-4 lg:m-0">
        <div className="lg:pl-6 lg:py-6 xl:pl-8 xl:py-6 xl:pr-0 h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
