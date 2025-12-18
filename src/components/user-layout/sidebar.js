"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMeta } from "react-icons/bs";
import { FiHome, FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const navItems = [
  {
    name: "Home",
    href: "/",
    Icon: <FiHome className="lg:w-[18px] lg:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />,
  },
  {
    name: "Explore",
    href: "/explore",
    Icon: <BsMeta className="lg:w-[18px] lg:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />,
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: <FiUser className="lg:w-[18px] lg:h-[18px] 2xl:w-[24px] 2xl:h-[24px]" />,
  },
];

export default function UserSidebar() {
  const pathname = usePathname();
  return (
    <div className="bg-primary text-white lg:w-[100px] 2xl:w-[110px] py-7 rounded-4xl flex flex-col justify-between items-center">
      <div className="flex items-center flex-col">
        <div className="bg-white lg:mb-8 2xl:mb-10 lg:w-[45%] 2xl:w-[40%] flex items-center justify-center aspect-square text-primary rounded-full font-semibold">
          Ai
        </div>
        <div className="space-y-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex flex-col gap-1 aspect-square justify-center  items-center  lg:p-2.5 2xl:p-3 rounded-[35%]",
                pathname === item.href && "bg-secondary text-primary"
              )}
            >
              {item.Icon}
              <span className="font-medium lg:text-xs 2xl:text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center lg:gap-10 2xl:gap-14 mb-4">
        <IoMdNotificationsOutline size={30} />
        <Image
          src={"/images/user-avatar.png"}
          height={100}
          width={100}
          alt="user avatar"
          className="w-12 h-12 rounded-full overflow-hidden"
        />
      </div>
    </div>
  );
}
