import { cn } from "@/utils/cn";
import React from "react";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn(
        "bg-white p-4 md:p-8 lg:p-6 xl:p-8 rounded-2xl xl:rounded-4xl shadow-lg shadow-secondary h-full overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
