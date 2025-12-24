import { cn } from "@/utils/cn";
import React from "react";

export default function SecondaryWrapper({ className, children }) {
    return (
        <div
            className={cn(
                "bg-white p-4 md:p-8 lg:p-6 2xl:p-8 rounded-2xl xl:rounded-4xl shadow-lg h-full overflow-y-auto",
                className
            )}
        >
            {children}
        </div>
    );
}
