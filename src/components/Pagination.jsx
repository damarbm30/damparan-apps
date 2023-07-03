import { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  // LENGTH OF PAGINATION
  const [paginationLimit] = useState(5);
  // MAXIMUM PAGE SHOWN ON PAGINATION
  const [maxPagination, setMaxPagination] = useState(5);
  // MINIMUM PAGE SHOWN ON PAGINATION
  const [minPagination, setMinPagination] = useState(1);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);

    if (currentPage + 1 > maxPagination) {
      setMinPagination(minPagination + paginationLimit);
      setMaxPagination(maxPagination + paginationLimit);
    }
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);

    if (currentPage - 1 < minPagination) {
      setMinPagination(minPagination - paginationLimit);
      setMaxPagination(maxPagination - paginationLimit);
    }
  };

  return (
    <div className="flex justify-center">
      {/* LEFT */}
      <button
        className="rounded-l-lg border border-gray-300 px-2 py-2 font-bold leading-tight text-primary active:border-primary active:bg-primary active:text-white disabled:border-inherit disabled:bg-inherit disabled:text-inherit disabled:opacity-50"
        onClick={handlePrev}
        disabled={currentPage <= 1}
      >
        &#x2B05;
      </button>
      {pages.map((page) => {
        return page >= minPagination && page <= maxPagination ? (
          <button
            key={page}
            className={`border px-3 py-2 font-bold leading-tight text-primary ${
              page === currentPage ? "border-primary bg-primary text-white" : "border-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ) : null;
      })}
      {/* right */}
      <button
        className="rounded-r-lg border border-gray-300 px-2 py-2 font-bold leading-tight text-primary active:border-primary active:bg-primary active:text-white disabled:border-inherit disabled:bg-inherit disabled:text-inherit disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage >= pages.length}
      >
        &#x27A1;
      </button>
    </div>
  );
};
export default Pagination;
