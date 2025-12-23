import { cn } from "@/utils/cn";
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

export default function TextInput({
  placeholder,
  label,
  type = "text",
  size = "md",
  error,
  containerClassName,
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
            "text-text-primary 2xl:text-xl font-medium flex gap-1",
            sizeClasses[size]?.descriptionClass
          )}
        >
          {description}
        </p>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "py-2.5 px-4 2xl:px-5 bg-bg-gray rounded-full font-normal border border-secondary text-sm lg:text-base 2xl:text-lg placeholder:text-text-gray focus:outline-none focus:ring-0",
          sizeClasses[size]?.inputClass
        )}
        {...props}
      />
      {error && (
        <span className={cn("text-red-600", sizeClasses[size]?.inputClass)}>
          {error}
        </span>
      )}
    </div>
  );
}
