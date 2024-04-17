import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  // Round the rating to the nearest 0.5
  const roundedRating = Math.round(rating * 2) / 2;

  // Generate an array of stars based on the rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-400" />
      );
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
