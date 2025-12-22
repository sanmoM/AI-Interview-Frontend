import React from "react";

export default function SettingButton({ children, title, description }) {
  return (
    <div className="">
      <div className="flex items-start justify-between py-2">
        <div>
          <h4 className="md:text-lg font-semibold text-text-primary">
            {title}
          </h4>
          <p className="hidden md:block text-sm md:text-base text-text-gray mt-0.5">
            {description}
          </p>
        </div>
        {children}
      </div>

      <p className="text-sm md:text-base md:hidden text-text-gray mt-0.5">
        {description}
      </p>
    </div>
  );
}
