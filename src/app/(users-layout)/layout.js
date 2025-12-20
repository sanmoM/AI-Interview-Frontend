import UserNavbar from "@/components/user-layout/navbar/Usernavbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row  h-screen overflow-y-auto lg:px-6">
      <UserNavbar />
      <div className="flex-1 m-4 lg:m-0 h-full overflow-x-hidden">
        <div className="lg:pl-6 lg:py-6 xl:pl-8 xl:py-6 xl:pr-0 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
