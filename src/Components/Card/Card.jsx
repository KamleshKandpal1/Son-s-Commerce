import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { useCart } from "../../Contexts/Contexts";

const Card = ({ title, description, img, price, rating, id, product }) => {
  const { addToCart } = useCart();
  return (
    <div id={id} className="box w-auto py-3 px-4 shadow-2xl rounded-lg mb-5">
      <div className="box-top h-[250px] rounded-lg flex flex-col gap-y-2 relative">
        <img
          className="w-full h-[calc(100%-20px)] rounded-2xl object-scale-down"
          src={img}
          alt={title}
        />
        <Link
          to={`/product/${id}`}
          onClick={() => {
            scrollTo(0, 0);
          }}
          rel="noreferrer"
        >
          <div class="absolute h-[calc(100%-20px)] rounded-2xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-2xl font-bold">View Details</p>
          </div>
        </Link>
      </div>
      <div className="box-bottom">
        <h5 className="text-base font-bold text-violet-600">
          {title?.length > 15 ? title.substring(0, 20).concat("...") : title}
        </h5>
        {/* <p className="text-sm font-semibold mb-1.5">
          {description?.length > 20
            ? description.substring(0, 50).concat("...")
            : description}
        </p> */}
        <div className=" flex justify-between text-base font-semibold">
          <div className=" flex gap-x-4">
            <p>{`₹${price * 8}`}</p>
            <div>
              <Rating rating={rating} />
            </div>
          </div>

          <button
            className="h-7 w-7 text-center bg-[purple] rounded-lg text-white hover:text-[purple] hover:bg-[#4547474d] transition-colors shadow-2xl flex items-center justify-center"
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
