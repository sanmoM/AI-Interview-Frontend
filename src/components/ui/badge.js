import { cn } from "@/utils/cn";
import React from "react";

const statusColors = {
  green: "bg-green-100 text-green-600",
  default: "bg-secondary text-primary",
  Completed: "bg-green-600",
  blue: "bg-blue-100 text-blue-600",
  gray: "bg-bg-gray text-text-gray",
  red: "bg-red-100 text-red-600",
};

export default function Badge({ children, className, status = "default" }) {
  return (
    <span
      className={cn(
        "rounded-full flex justify-center items-center bg-secondary px-4 py-2 text-sm font-medium text-primary text-nowrap w-fit",
        className,
        statusColors[status]
      )}
    >
      {children}
    </span>
  );
}
