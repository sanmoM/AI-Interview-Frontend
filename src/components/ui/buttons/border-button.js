import { cn } from "@/utils/cn";

export default function BorderButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={cn(
        "w-full py-2 lg:py-2.5 border border-secondary cursor-pointer text-sm md:text-base 2xl:text-lg text-text-primary rounded-full font-medium transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
