import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="padding w-screen h-[60px] bg-[#1f1f1f] px-6 flex justify-between items-center">
        <div className="left flex items-center gap-x-4 py-2">
          <Link to="/">
            <img src={icon} alt="" className="w-[45px] h-[45px]" />
          </Link>
          <Link to="/">
            <h3 className=" text-lg font-semibold text-[#f1f1f1]">
              {" "}
              <span className="text-violet-500">Son's</span> Commerce
            </h3>
          </Link>
        </div>
        <div className="right flex gap-x-4 items-center">
          <Link>
            <p className="text-[15px] text-[gray] hover:text-violet-500">
              soncommerce@example.com
            </p>
          </Link>
          <Link>
            <p className="text-white text-lg font-semibold">
              <FontAwesomeIcon icon={faCartShopping} />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
