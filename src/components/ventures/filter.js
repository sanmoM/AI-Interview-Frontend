"use client";

import { useState } from "react";

export default function FilterTabs({ filters }) {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {filters.map((filter, idx) => (
        <button
          key={idx}
          onClick={() => setActiveFilter(idx)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            activeFilter === idx
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {filter.label}{" "}
          <span className="ml-2 opacity-70">({filter.count})</span>
        </button>
      ))}
    </div>
  );
}
