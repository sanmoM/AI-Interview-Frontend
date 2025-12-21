import { cn } from "@/utils/cn";
import React from "react";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
