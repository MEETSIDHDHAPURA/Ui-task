import { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [page, setPage] = useState(currentPage);

  const handlePrevious = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    onPageChange(pageNumber);
  };

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className="pagination flex justify-center space-x-3">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`px-3 py-1 border rounded-full ${
          page === 1
            ? "bg-gray-200 dark:bg-zinc-800"
            : "bg-white dark:bg-zinc-800 hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-left dark:text-white"></i>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-3 py-1 border dark:border-gray-400 rounded-full ${
            page === index + 1
              ? "bg-blue-500 text-white dark:border-none"
              : "bg-white dark:bg-zinc-800 dark:text-white  hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={`px-3 py-1 border rounded-full ${
          page === totalPages
            ? "bg-gray-200 dark:bg-zinc-800"
            : "bg-white dark:bg-zinc-800 hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-right dark:text-white"></i>
      </button>
    </div>
  );
};

export default Pagination;
