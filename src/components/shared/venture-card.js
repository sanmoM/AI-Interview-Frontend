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
            {item?.status}
          </span>
        </div>

        <p className=" leading-relaxed text-text-gray text-sm md:text-base lg:text-lg">
          {brandingData?.description}
        </p>
      </div>
      {hasButton && (
        <div className="flex justify-between items-center mt-3">
          <Link
            className="text-sm text-primary font-bold"
            href={brandingData?.websiteLink || "#"}
          >
            <Button className={"py-2! px-6 text-sm! gap-1"}>
              <span>View website</span>
              <IoIosArrowForward />
            </Button>
          </Link>
          <Link
            className="text-sm text-primary font-bold"
            href={detailsLink || "#"}
          >
            <Button
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
