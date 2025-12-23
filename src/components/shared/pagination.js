import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(2);

  const totalPages = 17;
  // const currentPage = page;
  const siblingCount = 1;

  const getPaginationRange = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

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
      for (let i = totalPages - 4; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      range.push("...");
      for (let i = leftSibling; i <= rightSibling; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };
  return (
    <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2 xl:py-8">
      {/* Pages */}
      {getPaginationRange().map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="hidden sm:flex h-9 cursor-pointer w-9 items-center justify-center text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full border text-sm font-medium transition cursor-pointer
          ${
            currentPage === item
              ? "bg-primary text-white border-primary"
              : "border-secondary text-text-gray hover:bg-gray-100"
          }`}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
}
