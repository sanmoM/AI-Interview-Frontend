"use client";

export default function Pagination({ currentPage, lastPage, setCurrentPage }) {
  const getPages = () => {
    let start = Math.max(currentPage - 2, 1);
    let end = start + 4;

    if (end > lastPage) {
      end = lastPage;
      start = Math.max(end - 4, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition
            ${
              page === currentPage
                ? "bg-secondary text-primary "
                : "border-blue-300 text-primary hover:bg-secondary/20"
            }`}
        >
          {page}{" "}
        </button>
      ))}{" "}
    </div>
  );
}
