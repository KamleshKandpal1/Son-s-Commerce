import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { useCart } from "../../Contexts/Contexts";
import Rating from "../../Components/Rating/Rating";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useCart();

  if (cartItems.length < 1) {
    return (
      <div className="flex justify-center items-center my-40">
        <span className="text-xl">Empty Cart...</span>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto my-6 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <div className="cartBox w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl ml-4 font-semibold text-[#4C4B4B]">
              Cart Items
            </h3>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="box flex w-full p-4 h-auto flex-col gap-y-2"
              >
                <div className="box-info flex flex-col md:flex-row p-2 items-center gap-x-3 rounded-lg shadow-2xl bg-[#a3aab4a8]">
                  <div className="w-full md:w-1/3 rounded-lg">
                    <img
                      className="w-full rounded-lg"
                      src={item.images[0]}
                      alt={item.title}
                    />
                  </div>
                  <div className="details flex flex-col w-full md:w-2/5 px-1 mt-2 md:mt-0">
                    <span className="text-lg font-semibold text-violet-500 capitalize">
                      {item.title}
                    </span>
                    <span className="text-[13px] font-normal text-[#2B2B52]">
                      {item.description}
                    </span>
                    <span className="text-[18px] font-semibold text-[#26ae60]">
                      ₹{item.price}
                    </span>
                    <span className="text-[16px] font-normal text-[#F3B63A]">
                      <Rating rating={item.rating} />
                    </span>
                  </div>
                  <div className="functions flex flex-col gap-y-6 items-center mt-4 md:mt-0">
                    <div className="left flex items-center">
                      <button
                        className="h-8 w-8 text-center bg-[#817c7c] text-white rounded-md"
                        onClick={() => removeFromCart(item)}
                      >
                        <p className="text-base">
                          <FontAwesomeIcon icon={faMinus} />
                        </p>
                      </button>
                      <span className="mx-2 border border-[#99AAAB] h-8 w-12 text-center pt-1">
                        {item.quantity}
                      </span>
                      <button
                        className="h-8 w-8 text-center bg-[#817c7c] text-white rounded-md"
                        onClick={() => addToCart(item)}
                      >
                        <p className="text-base">
                          <FontAwesomeIcon icon={faPlus} />
                        </p>
                      </button>
                    </div>
                    <div className="remove">
                      <button
                        className="text-white bg-[#dd2b2b] px-4 py-1 rounded-lg cursor-pointer hover:text-[#dd2b2b] hover:bg-white text-lg"
                        onClick={() => clearCart(item)}
                      >
                        Remove <FontAwesomeIcon icon={faDumpster} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkOutBox w-full md:w-1/3 mt-6 md:mt-0 md:ml-10 bg-[#08051a59] py-4 px-2 rounded-lg">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-white">
              Checkout
            </h1>
            {cartItems.map((item) => (
              <div key={item.id} className="tops flex py-2">
                <div className="card flex flex-row w-full justify-around m-auto items-center bg-[#dfe1e496] rounded-lg py-3">
                  <p className="text-sm font-semibold capitalize">
                    {item.title}
                  </p>
                  <div className="price">
                    <p className="text-sm font-semibold">₹{item.price}</p>
                    <p className="text-sm font-semibold">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="total w-full m-auto mt-4">
              <div className="price flex py-2 px-3 justify-between items-center">
                <p className="text-sm font-semibold">Total</p>
                <p className="text-sm font-semibold">₹{getCartTotal()}</p>
                <button className="text-sm font-semibold bg-[#26ae60] text-white px-5 py-2 rounded-md hover:text-[#26ae60] hover:bg-white transition-all">
                  Pay <FontAwesomeIcon icon={faPaypal} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
