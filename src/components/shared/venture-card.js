import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import Button from "../ui/buttons/button";
import { IoIosArrowForward } from "react-icons/io";

export default function VentureCard({
  item,
  className,
  hasButton = true,
  detailsLink,
}) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 1:
        return "text-green-700 bg-green-200";
      case 0:
        return "text-red-700 bg-red-200";
    }
  };
  const brandingData = JSON.parse(item?.branding_json);
  return (
    <div
      className={cn(
        " rounded-xl md:rounded-3xl border border-secondary bg-white p-4 xl:p-6 flex flex-col h-full",
        className,
      )}
    >
      <div className="flex-1">
        <div className="mb-2 xl:mb-4 flex items-start justify-between">
          <h3 className="text-base md:text-xl xl:text-[22px] font-bold text-gray-900">
            {item?.name}
          </h3>
          <span
            className={`ml-2 text-[10px] md:text-sm lg:text-xs xl:text-base whitespace-nowrap rounded-full px-3 py-1 font-medium ${getStatusStyles(
              item?.status,
            )}`}
          >
            {item?.status === 1 ? "Active" : "Inactive"}
          </span>
        </div>

        <p className=" leading-relaxed text-text-gray text-sm md:text-base lg:text-lg">
          {brandingData?.description}
        </p>
      </div>
      {hasButton && (
        <div className="flex justify-between items-center mt-3">
          <a
            className="text-sm text-primary font-bold"
            href={brandingData?.websiteLink || "#"}
          >
            <Button
              onClick={(e) => e.stopPropagation()}
              className={"py-2! px-6 text-sm! gap-1"}
            >
              <span>Visit website</span>
              <IoIosArrowForward />
            </Button>
          </a>
          <Link
            className="text-sm text-primary font-bold"
            href={detailsLink || "#"}
          >
            <Button
              onClick={(e) => e.stopPropagation()}
              className={
                "py-2! bg-secondary hover:bg-secondary hover:opacity-90 text-primary px-6 text-sm! gap-1"
              }
            >
              <span>Visit Venture</span>
              <IoIosArrowForward />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
