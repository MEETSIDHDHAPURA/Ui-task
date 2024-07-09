import { useState } from "react";
import Button from "../CommonComponents/Button"


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
      <Button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`px-3 py-1 border rounded-full ${
          page === 1
            ? "bg-gray-200 bg-zinc"
            : "bg-white bg-zinc hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-left dark:text-white"></i>
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-3 py-1 border dark:border-secondary rounded-full ${
            page === index + 1
              ? "bg-blue-500 text-white dark:border-none"
              : "bg-white bg-zinc dark:text-white  hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        disabled={page === totalPages}
        className={`px-3 py-1 border rounded-full ${
          page === totalPages
            ? "bg-gray-200 bg-zinc"
            : "bg-white bg-zinc hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-right dark:text-white"></i>
      </Button>
    </div>
  );
};

export default Pagination;
