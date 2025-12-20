import UserNavbar from "@/components/user-layout/navbar/Usernavbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:p-6 h-screen overflow-y-auto lg:gap-6 xl:gap-8">
      <UserNavbar />
      <div className="flex-1 m-6 lg:m-0 h-full">{children}</div>
    </div>
  );
}
