import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Contexts/Contexts";
import Rating from "../../Components/Rating/Rating";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useCart();

  if (cartItems.length < 1) {
    return (
      <div className="flex justify-center items-center my-40">
        <span className="text-2xl font-bold text-gray-500">
          Your cart is empty.
        </span>
      </div>
    );
  }
  // Calculate the total quantity and total price
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-8 p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:text-3xl text-2xl font-bold text-gray-700">
          Cart Items
        </h3>
        <button
          className="bg-red-600 text-white px-3 rounded-md shadow hover:bg-red-700 transition md:text-sm sm:p-3 p-1 font-semibold text-sm"
          onClick={clearCart}
        >
          Clear Cart <FontAwesomeIcon icon={faDumpster} className="ml-2" />
        </button>
      </div>
      <table className="w-full table-auto border-collapse bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left text-gray-700 font-semibold hidden sm:block">
              Image
            </th>
            <th className="sm:p-3 p-1 text-left text-gray-700 font-semibold text-xs sm:text-sm">
              Title
            </th>
            <th className="sm:p-3 p-1 text-left text-gray-700 font-semibold text-xs sm:text-sm">
              Price
            </th>
            <th className="sm:p-3 p-1 text-left text-gray-700 font-semibold text-xs sm:text-sm">
              Rating
            </th>
            <th className="sm:p-3 p-1 text-left text-gray-700 font-semibold text-xs sm:text-sm">
              Quantity
            </th>
            {/* <th className="p-3 text-left text-gray-700 font-semibold">
              Actions
            </th> */}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 border-b">
              <td className="sm:p-3 p-1 hidden sm:block">
                {item.images && (
                  <img
                    className="h-16 w-16 object-cover rounded"
                    src={item.images[0]}
                    alt={item.title}
                  />
                )}
              </td>
              <td className="sm:p-3 p-1 text-xs md:text-sm text-gray-800">
                {item.title}
              </td>
              <td className="sm:p-3 p-1 text-xs md:text-sm text-green-600 font-bold">
                ${item.price}
              </td>
              <td className="sm:p-3 p-1 text-[10px] md:text-sm text-yellow-500">
                <Rating rating={item.rating} />
              </td>
              <td className="sm:p-3 p-1 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition"
                    onClick={() => removeFromCart(item)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="font-semibold text-xs">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition"
                    onClick={() => addToCart(item)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </td>
              {/* <td className="p-3">
                <button
                  className="px-3 py-1 text-xs md:text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className=" bg-slate-400 w-full flex border justify-end
      overflow-x-scroll
      "
      >
        <div className="flex items-center">
          <p
            colSpan="4"
            className="md:text-sm sm:p-3 p-2 text-left text-gray-700 font-semibold text-xs sm:text-sm"
          >
            Total Quantity:
          </p>
          <p className="md:text-sm sm:p-3 p-2 text-left font-semibold text-xs sm:text-sm text-white">
            {totalQuantity}
          </p>
        </div>
        <div className="flex items-center">
          <p
            colSpan="4"
            className="md:text-sm sm:p-3 p-2 text-left text-gray-700 font-semibold text-xs sm:text-sm"
          >
            Total Amount:
          </p>
          <p className="md:text-sm sm:p-3 p-2 text-left font-semibold text-xs sm:text-sm text-white">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
