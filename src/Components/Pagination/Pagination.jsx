import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  // Generate an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
          >
            <button onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
