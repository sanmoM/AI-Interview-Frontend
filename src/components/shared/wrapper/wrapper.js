import { cn } from "@/utils/cn";
import React from "react";

export default function Wrapper({ className, children }) {
  return (
    <div
      className={cn(
        "bg-white p-4 md:p-8 lg:p-6 2xl:p-8 rounded-2xl xl:rounded-4xl shadow-[0_4px_10px_0_rgba(135,206,235,0.25)] h-full overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
