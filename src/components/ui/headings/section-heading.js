import { cn } from "@/utils/cn";
import React from "react";

export default function SectionHeading({ children, className }) {
  return <h1 className={cn("text-3xl font-bold text-text-primary", className)}>{children}</h1>;
}
