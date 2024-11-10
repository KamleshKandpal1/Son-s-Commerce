import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav>
      <ul className="pagination justify-center p-2">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
          >
            <button
              onClick={() => {
                onPageChange(pageNumber), window.scrollTo(0, 450);
              }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
