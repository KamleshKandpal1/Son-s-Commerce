import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Card = ({ title, description, img, price, rating, id }) => {
  return (
    <div id={id} className="box w-auto py-3 px-4 shadow-2xl rounded-lg">
      <div className="box-top h-[250px] rounded-lg flex flex-col gap-y-2 relative">
        <img
          className="w-full h-[calc(100%-20px)] rounded-2xl object-scale-down"
          src={img}
          alt={title}
        />
        <Link to={`/product/${id}`} target="_blank" rel="noreferrer">
          <div class="absolute h-[calc(100%-20px)] rounded-2xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-2xl font-bold">View Details</p>
          </div>
        </Link>
      </div>
      <div className="box-bottom">
        <h5 className="text-base font-bold text-violet-600">
          {title?.length > 15 ? title.substring(0, 20).concat("...") : title}
        </h5>
        <p className="text-sm font-semibold mb-1.5">
          {description?.length > 20
            ? description.substring(0, 50).concat("...")
            : description}
        </p>
        <div className=" flex justify-between text-base font-semibold">
          <div className=" flex gap-x-4">
            <p>{`₹${price}`}</p>
            <p>
              <Rating rating={rating} />
            </p>
          </div>

          {/* <div className="h-7 w-7 text-center bg-[purple] rounded-[50%] text-white hover:text-[purple] hover:bg-white transition-colors shadow-2xl">
            <button className="pt-1 ">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
