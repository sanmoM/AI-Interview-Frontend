import { cn } from "@/utils/cn";

export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={cn(
        "w-full py-2 lg:py-2.5 bg-primary hover:bg-primary/90 cursor-pointer text-sm md:text-base 2xl:text-lg text-white rounded-full font-medium transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
