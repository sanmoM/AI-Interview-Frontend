import { useState } from "react";

export default function Switch({ defaultChecked = true, label, color }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const colors = {
    blue: "bg-blue-600",
    green: "bg-emerald-500",
    purple: "bg-indigo-600",
  };
  return (
    <div className="flex items-center justify-between">
      {label && <span className="text-slate-700 font-medium">{label}</span>}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div
          className={`w-14 h-7 bg-secondary peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-[140%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 ease-out ${
            isChecked ? colors[color] : ""
          }`}
        ></div>
      </label>
    </div>
  );
}
