import { cn } from "@/utils/cn";
import { IoSearchOutline } from "react-icons/io5";

export default function Searchbox({
  inputClassName,
  setSearchQuery,
  searchQuery,
  containerClassName,
  iconClassName,
  placeholder="Type to search",
}) {
  return (
    <div className={cn("relative ", containerClassName)}>
      <IoSearchOutline
        className={cn(
          "absolute left-4 top-1/2 w-5 h-5 md:h-6 md:w-6 -translate-y-1/2 text-gray-400",
          iconClassName
        )}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={cn(
          "w-full rounded-full border border-secondary py-2.5 lg:py-2 xl:py-3 pl-10 md:pl-12 pr-4  placeholder:font-medium placeholder:text-text-gray focus:border-gray-400 focus:outline-none text-sm md:text-base",
          inputClassName
        )}
      />
    </div>
  );
}
