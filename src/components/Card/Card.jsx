import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="box  w-[275px] px-3 pt-3  h-[400px] rounded-xl shadow-2xl my-5 ">
        <div className="box-top h-[250px] rounded-xl relative">
          <img
            className="w-full h-[calc(100%-10px)] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Link>
            <div className="absolute h-[calc(100%-10px)] rounded-xl flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 inset-0">
              <p className=" text-2xl font-bold text-white">View Details</p>
            </div>
          </Link>
        </div>
        <div className="box-bottom flex flex-col gap-y-1">
          <h5 className="text-lg font-bold text-center text-violet-600">
            Nike Shoes
          </h5>
          <p className="text-[12px] font-[600] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            illum nihil culpa odio dolore autem?
          </p>
          {/* ${
          description.length > 20
            ? description.substring(0, 90).concat("...more")
            : description} */}
          <div className=" flex justify-between px-1 font-semibold text-base">
            <div className="flex gap-x-4">
              <p>$500</p>
              <p>
                4.1
                <FontAwesomeIcon
                  icon={faStar}
                  className=" text-yellow-400 text-sm pb-[2px]"
                />
              </p>
            </div>
            <div>
              <Link>
                <p>
                  <FontAwesomeIcon icon={faCartShopping} />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
