import { cn } from "@/utils/cn";
import { TbLoader } from "react-icons/tb";

export default function Button({
  children,
  className,
  onClick,
  loading,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={cn(
        "flex items-center gap-2 w-full py-2 lg:py-2.5 disabled:bg-primary/20 disabled:cursor-not-allowed! bg-primary hover:bg-primary/90 cursor-pointer text-sm md:text-base 2xl:text-lg text-white rounded-full font-medium transition-colors text-nowrap justify-center",
        className
      )}
      disabled={disabled}
    >
      {loading ? <TbLoader className="animate-spin text-3xl" /> : children}
    </button>
  );
}
