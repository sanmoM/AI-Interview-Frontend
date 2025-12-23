import { cn } from "@/utils/cn";
import React from "react";

export default function SubHeading({ children, className }) {
  return <p className={cn("text-text-gray mt-1", className)}>{children}</p>;
}
