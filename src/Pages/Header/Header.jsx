import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Contexts";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 0.7) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // add Scroll
    window.addEventListener("scroll", handleScroll);
    // remove Scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-[60px] bg-[#1f1f1f] px-4 sm:px-6 flex justify-between items-center
                      ${isSticky ? "sticky top-0 z-10 bg-[#1f1f1fe7]" : ""}`}
      >
        <div className="left flex items-center gap-x-2 sm:gap-x-4 py-2">
          <Link to="/">
            <img
              src={icon}
              alt=""
              className="w-[35px] sm:w-[45px] h-[35px] sm:h-[45px]"
            />
          </Link>
          <Link to="/">
            <h3 className="text-base sm:text-lg font-semibold text-[#f1f1f1]">
              <span className="text-violet-500">Son&apos;s</span> {""}
              Commerce
            </h3>
          </Link>
        </div>
        <div className="right flex gap-x-2 sm:gap-x-4 items-center">
          <Link to="/contact">
            <p className="hidden sm:block text-[13px] sm:text-[15px] text-[gray] hover:text-violet-500">
              soncommerce@example.com
            </p>
          </Link>
          <Link to="/cart">
            <p className="text-white text-lg font-semibold relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <span
                className={`absolute top-[-10px] right-[-15px] text-center text-base text-white font-semibold bg-violet-400 h-[20px] w-[20px] rounded-[50%] flex items-center justify-center ${
                  cartItems.length > 0 ? "block" : "hidden"
                }`}
              >
                {cartItems.length}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
