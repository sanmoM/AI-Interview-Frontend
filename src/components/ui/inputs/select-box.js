import { cn } from "@/utils/cn";
import { FiChevronDown } from "react-icons/fi";
import Label from "../label";

const sizeClasses = {
  xs: {
    inputClass: "text-[10px] placeholder:text-[10px]",
    labelClass: "text-[10px]",
  },
  sm: {
    inputClass: "text-xs md:text-sm 2xl:text-base",
    labelClass: "text-xs md:text-sm 2xl:text-base",
    descriptionClass: "text-[10px] md:text-xs 2xl:text-sm",
  },
  md: {
    inputClass: "text-sm md:text-base 2xl:text-lg",
    labelClass: "text-sm md:text-base 2xl:text-lg",
    descriptionClass: "text-[10px] md:text-xs 2xl:text-sm",
  },
  lg: {
    inputClass: "text-base",
    labelClass: "text-base",
  },
  xl: {
    inputClass: "text-xl",
    labelClass: "text-xl",
  },
  "2xl": {
    inputClass: "text-2xl",
    labelClass: "text-2xl",
  },
};

export default function SelectBox({
  placeholder = "Select option",
  label,
  size = "md",
  error,
  containerClassName,
  options,
  description,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>
      {label && (
        <Label className={sizeClasses[size]?.labelClass}>
          <span>{label}</span>
          {props.required && <span className="text-red-600">*</span>}
        </Label>
      )}
      {description && (
        <p
          className={cn(
            "text-text-gray 2xl:text-xl font-medium flex gap-1 text-xs mb-1",
            sizeClasses[size]?.descriptionClass
          )}
        >
          {description}
        </p>
      )}
      <div className="relative">
        <select
          className={cn(
            "w-full py-2.5 px-4 2xl:px-5 bg-bg-gray rounded-full font-normal border border-secondary  text-text-gray focus:outline-none focus:ring-0 appearance-none cursor-pointer pr-12",
            sizeClasses[size]?.inputClass
          )}
          {...props}
        >
          <option value="" disabled className="">
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      {error && (
        <span className={cn("text-red-600", sizeClasses[size]?.inputClass)}>
          {error}
        </span>
      )}
    </div>
  );
}
