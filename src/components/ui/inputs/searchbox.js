// import { cn } from "@/utils/cn";
// import { IoSearchOutline } from "react-icons/io5";

// export default function Searchbox({
//   inputClassName,
//   setSearchQuery,
//   searchQuery,
//   containerClassName,
//   iconClassName,
//   placeholder="Type to search",
// }) {
//   return (
//     <div className={cn("relative ", containerClassName)}>
//       <IoSearchOutline
//         className={cn(
//           "absolute left-4 top-1/2 w-5 h-5 md:h-6 md:w-6 -translate-y-1/2 text-gray-400",
//           iconClassName
//         )}
//       />
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className={cn(
//           "w-full rounded-full border border-secondary py-2.5 lg:py-2 xl:py-3 pl-10 md:pl-12 pr-4  placeholder:font-medium placeholder:text-text-gray focus:border-gray-400 focus:outline-none text-sm md:text-base",
//           inputClassName
//         )}
//       />
//     </div>
//   );
// }

import { cn } from "@/utils/cn";
import { IoSearchOutline } from "react-icons/io5";

const sizeClasses = {
  xs: {
    input: "py-1.5 pl-8 pr-3 text-[10px] placeholder:text-[10px]",
    icon: "left-2 w-3.5 h-3.5",
  },
  sm: {
    input: "py-2 pl-9 pr-3 text-xs md:text-sm",
    icon: "left-3 w-4 h-4",
  },
  md: {
    input: "py-2.5 lg:py-2 xl:py-3 pl-10 md:pl-12 pr-4 text-sm md:text-base",
    icon: "left-4 w-5 h-5 md:w-6 md:h-6",
  },
  lg: {
    input: "py-3 pl-12 pr-5 text-base",
    icon: "left-4 w-6 h-6",
  },
  xl: {
    input: "py-3.5 pl-14 pr-6 text-lg",
    icon: "left-5 w-7 h-7",
  },
};

export default function Searchbox({
  size = "md",
  inputClassName,
  setSearchQuery,
  searchQuery,
  containerClassName,
  iconClassName,
  placeholder = "Type to search",
}) {
  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={cn("relative", containerClassName)}>
      <IoSearchOutline
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-gray-400",
          currentSize.icon,
          iconClassName,
        )}
      />

      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={cn(
          "w-full rounded-full border border-secondary placeholder:font-medium placeholder:text-text-gray focus:outline-none",
          currentSize.input,
          inputClassName,
        )}
      />
    </div>
  );
}
