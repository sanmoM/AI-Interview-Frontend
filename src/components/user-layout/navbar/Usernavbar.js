import Header from "@/components/shared/layout/header";
import { BsMeta } from "react-icons/bs";
import { FiHome, FiUser } from "react-icons/fi";
import UserSidebar from "./components/sidebar";

const navLinks = [
  {
    name: "Home",
    href: "/",
    Icon: (
      <FiHome className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    name: "Explore",
    href: "/explore",
    Icon: (
      <BsMeta className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: (
      <FiUser className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />
    ),
  },
];

export default function UserNavbar() {
  return (
    <>
      <Header navLinks={navLinks} />
      <UserSidebar navItems={navLinks} />
    </>
  );
}
