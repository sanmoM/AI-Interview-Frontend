// import { useState } from "react";

// export default function Pagination({ previous, next }) {
//   const [currentPage, setCurrentPage] = useState(2);

//   const totalPages = 17;
//   // const currentPage = page;
//   const siblingCount = 1;

//   const getPaginationRange = () => {
//     const totalNumbers = siblingCount * 2 + 3;
//     const totalBlocks = totalNumbers + 2;

//     if (totalPages <= totalBlocks) {
//       return Array.from({ length: totalPages }, (_, i) => i + 1);
//     }

//     const leftSibling = Math.max(currentPage - siblingCount, 1);
//     const rightSibling = Math.min(currentPage + siblingCount, totalPages);

//     const showLeftDots = leftSibling > 2;
//     const showRightDots = rightSibling < totalPages - 1;

//     const range = [];

//     if (!showLeftDots && showRightDots) {
//       for (let i = 1; i <= 5; i++) range.push(i);
//       range.push("...");
//       range.push(totalPages);
//     } else if (showLeftDots && !showRightDots) {
//       range.push(1);
//       range.push("...");
//       for (let i = totalPages - 4; i <= totalPages; i++) range.push(i);
//     } else {
//       range.push(1);
//       range.push("...");
//       for (let i = leftSibling; i <= rightSibling; i++) range.push(i);
//       range.push("...");
//       range.push(totalPages);
//     }

//     return range;
//   };
//   return (
//     <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2 xl:py-8">
//       {
//         previous && (
//           previous
//         )
//       }
//       {/* Pages */}
//       {getPaginationRange().map((item, index) =>
//         item === "..." ? (
//           <span
//             key={index}
//             className="hidden sm:flex h-9 cursor-pointer w-9 items-center justify-center text-gray-400"
//           >
//             ...
//           </span>
//         ) : (
//           <button
//             key={item}
//             onClick={() => setCurrentPage(item)}
//             className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full border text-sm font-medium transition cursor-pointer
//           ${currentPage === item
//                 ? "bg-primary text-white border-primary"
//                 : "border-secondary text-text-gray hover:bg-gray-100"
//               }`}
//           >
//             {item}
//           </button>
//         )
//       )}
//       {
//         next && (
//           next
//         )
//       }
//     </div >
//   );
// }

import { cn } from "@/utils/cn";
import { useState } from "react";

const sizeClasses = {
  xs: {
    container:
      "gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2",
    button:
      "h-6 w-6 text-[10px] \
       sm:h-7 sm:w-7 sm:text-[11px] \
       md:h-8 md:w-8 md:text-xs \
       lg:h-9 lg:w-9 lg:text-sm \
       2xl:h-10 2xl:w-10 2xl:text-base",
    dots:
      "h-6 w-6 text-[10px] \
       sm:h-7 sm:w-7 sm:text-[11px] \
       md:h-8 md:w-8 md:text-xs \
       lg:h-9 lg:w-9 lg:text-sm \
       2xl:h-10 2xl:w-10 2xl:text-base",
  },

  sm: {
    container:
      "gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5",
    button:
      "h-7 w-7 text-xs \
       sm:h-8 sm:w-8 sm:text-sm \
       md:h-9 md:w-9 md:text-base \
       lg:h-10 lg:w-10 lg:text-lg \
       2xl:h-11 2xl:w-11 2xl:text-xl",
    dots:
      "h-7 w-7 text-xs \
       sm:h-8 sm:w-8 sm:text-sm \
       md:h-9 md:w-9 md:text-base \
       lg:h-10 lg:w-10 lg:text-lg \
       2xl:h-11 2xl:w-11 2xl:text-xl",
  },

  md: {
    container:
      "gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3",
    button:
      "h-8 w-8 text-sm \
       sm:h-9 sm:w-9 sm:text-base \
       md:h-10 md:w-10 md:text-lg \
       lg:h-11 lg:w-11 lg:text-xl \
       2xl:h-12 2xl:w-12 2xl:text-2xl",
    dots:
      "h-8 w-8 text-sm \
       sm:h-9 sm:w-9 sm:text-base \
       md:h-10 md:w-10 md:text-lg \
       lg:h-11 lg:w-11 lg:text-xl \
       2xl:h-12 2xl:w-12 2xl:text-2xl",
  },

  lg: {
    container:
      "gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5",
    button:
      "h-9 w-9 text-base \
       sm:h-10 sm:w-10 sm:text-lg \
       md:h-11 md:w-11 md:text-xl \
       lg:h-12 lg:w-12 lg:text-2xl \
       2xl:h-14 2xl:w-14 2xl:text-3xl",
    dots:
      "h-9 w-9 text-base \
       sm:h-10 sm:w-10 sm:text-lg \
       md:h-11 md:w-11 md:text-xl \
       lg:h-12 lg:w-12 lg:text-2xl \
       2xl:h-14 2xl:w-14 2xl:text-3xl",
  },

  xl: {
    container:
      "gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4",
    button:
      "h-10 w-10 text-lg \
       sm:h-11 sm:w-11 sm:text-xl \
       md:h-12 md:w-12 md:text-2xl \
       lg:h-14 lg:w-14 lg:text-3xl \
       2xl:h-16 2xl:w-16 2xl:text-4xl",
    dots:
      "h-10 w-10 text-lg \
       sm:h-11 sm:w-11 sm:text-xl \
       md:h-12 md:w-12 md:text-2xl \
       lg:h-14 lg:w-14 lg:text-3xl \
       2xl:h-16 2xl:w-16 2xl:text-4xl",
  },
};


export default function Pagination({
  size = "md",
  previous,
  next,
  containerClassName,
}) {
  const [currentPage, setCurrentPage] = useState(2);

  const totalPages = 17;
  const siblingCount = 1;

  const classes = sizeClasses[size] || sizeClasses.md;

  const getPaginationRange = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(
      currentPage + siblingCount,
      totalPages
    );

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const range = [];

    if (!showLeftDots && showRightDots) {
      for (let i = 1; i <= 5; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    } else if (showLeftDots && !showRightDots) {
      range.push(1);
      range.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++)
        range.push(i);
    } else {
      range.push(1);
      range.push("...");
      for (let i = leftSibling; i <= rightSibling; i++)
        range.push(i);
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className={cn(`flex flex-1 items-center justify-center ${classes.container}`, containerClassName)}>
      {previous}

      {getPaginationRange().map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className={`hidden sm:flex items-center justify-center text-gray-400 ${classes.dots}`}
          >
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`rounded-full border font-medium transition cursor-pointer
              ${classes.button}
              ${currentPage === item
                ? "bg-primary text-white border-primary"
                : "border-secondary text-text-gray hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        )
      )}

      {next}
    </div>
  );
}
