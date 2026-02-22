"use client";

export default function Pagination({ currentPage, lastPage, setCurrentPage }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition
              ${
                page === currentPage
                  ? "bg-blue-900 text-white border-blue-900"
                  : "border-blue-300 text-blue-600 hover:bg-blue-100"
              }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
