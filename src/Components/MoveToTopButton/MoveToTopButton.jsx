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
    // add scroll
    window.addEventListener("scroll", handleScroll);
    // remove scroll
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
      className={`fixed bottom-10 right-10 z-20 flex items-center gap-x-2 bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded-full ${
        showButton ? "block" : "hidden"
      }`}
    >
      Move to Top <FontAwesomeIcon icon={faArrowCircleUp} />
    </button>
  );
};

export default MoveToTopButton;
