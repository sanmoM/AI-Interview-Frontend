"use client";

import { cn } from "@/utils/cn";

const sizeClasses = {
  xs: "w-6 h-6 border",
  sm: "w-8 h-8 border",
  md: "w-10 h-10 border-2",
  lg: "w-12 h-12 border-2",
  xl: "w-16 h-16 border-2",
  "2xl": "w-20 h-20 border-2",
};

export default function Avatar({
  size = "md",
  src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  alt = "User avatar",
  className,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "w-full h-full object-cove rounded-full border-gray-200 overflow-hidden flex-shrink-0 bg-gray-100",
        sizeClasses[size] || sizeClasses.md,
        className
      )}
    />
  );
}
