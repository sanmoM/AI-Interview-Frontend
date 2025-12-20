"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function UserSidebar({ navItems }) {
  const pathname = usePathname();
  return (
    <div className="h-full bg-primary text-white lg:w-[80px] xl:w-[100px] 2xl:w-[110px] py-7 lg:rounded-2xl xl:rounded-3xl 2xl:rounded-4xl  flex-col justify-between items-center hidden lg:flex">
      <div className="flex items-center flex-col">
        <div className="bg-white lg:mb-8 2xl:mb-9 lg:w-[60%] flex items-center justify-center aspect-square text-primary rounded-full font-semibold lg:text-base 2xl:text-xl">
          Ai
        </div>
        <div className="space-y-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex flex-col gap-1 aspect-square justify-center  items-center lg:p-1.5 xl:p-2.5 2xl:p-3 lg:rounded-xl xl:rounded-[35%]",
                pathname === item.href && "bg-secondary text-primary"
              )}
            >
              {item.Icon}
              <span className="font-medium lg:text-[10px] xl:text-xs 2xl:text-sm">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center lg:gap-10 2xl:gap-12 mb-4">
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
