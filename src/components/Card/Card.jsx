import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="box w-[280px] h-[400px] py-3 px-4 shadow-2xl mb-6 rounded-lg">
        <div className="box-top h-[250px] rounded-lg flex flex-col gap-y-2 relative">
          <img
            className="w-full h-[calc(100%-20px)] rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <Link>
            <div class="absolute h-[calc(100%-20px)] rounded-2xl inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p class="text-white text-2xl font-bold">View Details</p>
            </div>
          </Link>
        </div>
        <div className="box-bottom">
          <h5 className="text-lg font-bold text-violet-600">Loreal</h5>
          <p className="text-sm font-semibold mb-1.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            officia.
          </p>
          <div className=" flex justify-between text-base font-semibold">
            <div className=" flex gap-x-4">
              <p>$450</p>
              <p>
                4.1
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 text-xs pl-1 pb-[2px]"
                />
              </p>
            </div>
            <Link>
              <div className="h-7 w-7 text-center bg-[purple] rounded-[50%] text-white hover:text-[purple] hover:bg-white transition-colors shadow-2xl">
                <p className="pt-1 ">
                  <FontAwesomeIcon icon={faCartShopping} />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
