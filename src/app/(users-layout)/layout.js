import UserNavbar from "@/components/user-layout/navbar/Usernavbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row  h-screen overflow-y-auto px-6">
      <UserNavbar />
      <div className="flex-1 m-4 lg:m-0 h-full overflow-x-hidden">
        <div className="p-6 lg:px-8 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
