import React from "react";

export default function StickyHeader({ children }) {
  return (
    <div className=" bg-white sticky top-0 z-50 mb-4 pt-4 lg:pt-6">
      {children}
    </div>
  );
}
