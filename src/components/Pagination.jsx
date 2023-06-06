const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  return (
    <div className="flex justify-center">
      {/* left */}
      <button
        className="rounded-l-lg border border-gray-300 px-2 py-2 font-bold leading-tight text-primary active:border-primary active:bg-primary active:text-white disabled:border-inherit disabled:bg-inherit disabled:text-inherit disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage <= 1}
      >
        &#x2B05;
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={`border px-3 py-2 font-bold leading-tight text-primary ${
              page === currentPage ? "border-primary bg-primary text-white" : "border-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {/* right */}
      <button
        className="rounded-r-lg border border-gray-300 px-2 py-2 font-bold leading-tight text-primary active:border-primary active:bg-primary active:text-white disabled:border-inherit disabled:bg-inherit disabled:text-inherit disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= pages.length}
      >
        &#x27A1;
      </button>
    </div>
  );
};
export default Pagination;
