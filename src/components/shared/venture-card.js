import { cn } from "@/utils/cn";
import React from "react";

export default function VentureCard({ item, className }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-green-400";
      case "CLIENT":
      case "DEMO":
        return "bg-secondary text-primary";
      case "TEMPLATE":
        return "text-text-gray";
      default:
        return "text-text-gray";
    }
  };
  return (
    <div className={cn(" rounded-xl md:rounded-3xl border border-secondary bg-white p-4 xl:p-6", className)}>
      <div className="mb-2 xl:mb-4 flex items-start justify-between">
        <h3 className="text-base md:text-xl xl:text-[22px] font-bold text-gray-900">
          {item.title}
        </h3>
        <span
          className={`ml-2 text-[10px] md:text-sm lg:text-xs xl:text-base whitespace-nowrap rounded-full px-3 py-1 font-medium ${getStatusStyles(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <p className="mb-4 xl:mb-6 leading-relaxed text-text-gray text-sm md:text-base lg:text-lg">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-xs xl:text-sm text-gray-500">
        {Object.values(item.metadata).map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
