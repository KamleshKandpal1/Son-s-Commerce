import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const MoveToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleMoveToTop}
      className={`fixed bottom-4 right-4 md:bottom-10 md:right-10 z-20 flex items-center gap-x-2 bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Move to Top"
    >
      <span className="hidden sm:inline">Move to Top</span>
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </button>
  );
};

export default MoveToTopButton;
