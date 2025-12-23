"use client";

import { useState } from "react";

export default function FilterTabs({ filters }) {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="flex items-center gap-2 flex-1 overflow-x-auto min-w-0 scrollbar-hide">
      {filters.map((filter, idx) => (
        <button
          key={idx}
          onClick={() => setActiveFilter(idx)}
          className={`px-4 py-2 rounded-full text-sm md:text-base cursor-pointer text-nowrap  transition-colors ${
            activeFilter === idx ? "bg-primary text-white" : "text-text-gray"
          }`}
        >
          {filter.label}{" "}
          <span className="ml-2 opacity-70">({filter.count})</span>
        </button>
      ))}
    </div>
  );
}
