import Button from "@/components/ui/buttons/button";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function RoleCard({ item, className }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
        return "text-green-400";
      case "client":
      case "demo":
        return "bg-secondary text-primary";
      case "template":
        return "text-text-gray";
      default:
        return "text-text-gray";
    }
  };
  return (
    <div
      className={cn(
        " rounded-xl md:rounded-3xl border border-secondary bg-white p-4 xl:p-6 h-full flex flex-col",
        className,
      )}
    >
      <div className="mb-2 xl:mb-4 flex items-start justify-between">
        <h3 className="text-base md:text-xl xl:text-[22px] font-bold text-gray-900">
          {item?.name}
        </h3>
        <span
          className={`ml-2 text-[10px] md:text-sm lg:text-xs xl:text-base whitespace-nowrap rounded-full px-3 py-1 font-medium ${getStatusStyles(
            item?.status,
          )}`}
        >
          {item?.status}
        </span>
      </div>

      <p className=" leading-relaxed text-text-gray text-sm md:text-base lg:text-lg flex-1">
        {item?.description}
      </p>
      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-primary">
          <span className="font-bold">Phone:</span> {item?.phone_number}
        </p>
        <Link href={"/chat/" + item?.id}>
          <Button
            onClick={(e) => e.stopPropagation()}
            className={"py-2! w-fit px-6 text-sm! gap-1"}
          >
            <span>Chat</span>
            <IoIosArrowForward />
          </Button>
        </Link>
      </div>
    </div>
  );
}
