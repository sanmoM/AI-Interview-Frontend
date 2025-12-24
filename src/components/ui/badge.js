import { cn } from "@/utils/cn";
import React from "react";

const statusColors = {
  green: "bg-green-100 text-green-600",
  default: "bg-secondary text-primary",
  Completed: "bg-green-600",
};

export default function Badge({ children, className, status = "default" }) {
  return (
    <span
      className={cn(
        "rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary text-nowrap",
        className,
        statusColors[status]
      )}
    >
      {children}
    </span>
  );
}
