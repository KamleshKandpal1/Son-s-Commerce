import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="padding w-full h-[60px] bg-[#1f1f1f] py-1.5 text-center">
        <p className="text-[#817c7c] text-lg">
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 All Right
          Reserved{" "}
          <Link to="/">
            {" "}
            <span className="text-violet-500">Kamlesh</span>
          </Link>
        </p>
        <p className="text-[#817c7c] text-sm">
          Design Inspired by{" "}
          <Link to="https://yard-sale-store.vercel.app/#anchor-categories-menu">
            <span className="hover:text-violet-500">Yard Sale</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Footer;
