import { cn } from "@/utils/cn";
import React from "react";

export default function ContentWrapper({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "border border-secondary rounded-xl md:rounded-4xl p-4 bg-bg-gray",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
