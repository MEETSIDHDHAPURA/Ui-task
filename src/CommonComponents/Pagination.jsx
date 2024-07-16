import { useState } from "react";
import Button from "../CommonComponents/Button"


const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // this is the Pagination store the value 
  const [page, setPage] = useState(currentPage);

  // handlePrevious is use to go to PreviousPage
  const handlePrevious = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  // handleNext is use to go nextPage
  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  // handlePageClick is use to go particularPage Number 
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    onPageChange(pageNumber);
  };

  // it is use to don't Show the Pagination
  if (totalPages === 0) {
    return null;
  }

  return (
    <div className="pagination flex justify-center space-x-3">
      {/* Common Button for PreviousPage*/}
      <Button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`px-2 py-2 border-secondary rounded-full ${
          page === 1
            ? "bg-gray-200 dark:bg-zinc"
            : "bg-white dark:bg-zinc hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-left dark:text-white"></i>
      </Button>

      {/* Common Button for Page Number*/}
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-3 py-1 border-secondary ${
            page === index + 1
              ? "bg-blue-500 text-white dark:border-none"
              : "bg-white dark:bg-zinc dark:text-white  hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </Button>
      ))}

      {/* Common Button NextPage*/}
      <Button
        onClick={handleNext}
        disabled={page === totalPages}
        className={`px-3 py-1 border-secondary ${
          page === totalPages
            ? "bg-gray-200 dark:bg-zinc"
            : "bg-white dark:bg-zinc hover:bg-gray-100"
        }`}
      >
        <i className="fa-solid fa-chevron-right dark:text-white"></i>
      </Button>
    </div>
  );
};

export default Pagination;
