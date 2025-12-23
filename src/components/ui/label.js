import { cn } from "@/utils/cn";
import React from "react";

export default function Label({ label, className, children, ...props }) {
  return (
    <label
      className={cn(
        "text-text-primary 2xl:text-xl font-medium flex gap-1",
        className
      )}
    >
      {/* <span>{label}</span>
      {props.required && <span className="text-red-600">*</span>} */}
      {children}
    </label>
  );
}
