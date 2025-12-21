import React from "react";

export default function TextInput({
  placeholder,
  label,
  type = "text",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-text-primary 2xl:text-xl">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="py-2.5 px-4 2xl:px-5 bg-bg-gray rounded-full border border-secondary text-sm lg:text-base 2xl:text-lg placeholder:text-text-gray font-medium"
        {...props}
      />
    </div>
  );
}
