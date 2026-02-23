import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export default function VentureCard({ item, className }) {
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
      <div className="flex justify-center mt-3">
        <p className="text-sm text-primary">
          {/* <span className="font-bold">Phone:</span> {item?.phone_number} */}
        </p>
        <Link
          className="text-sm text-primary font-bold"
          href={brandingData?.websiteLink || "#"}
        >
          View website
        </Link>
      </div>
    </div>
  );
}
