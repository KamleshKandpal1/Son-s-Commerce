import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create context for cart
export const CartContext = createContext();

// Create context for API data
export const ApiContext = createContext();

// Cart and API provider component
export const CartApiProvider = ({ children }) => {
  // State for cart items
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // Function to add item to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  // Function to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to get total price of items in cart
  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };

  // useEffect to update local storage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // State for API data
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  // Function to fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://dummyjson.com/products?limit=100";
        if (filter) {
          url += `&category=${filter}`;
        }
        const response = await axios.get(url);
        setApiData(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]); // Re-run fetch when `filter` changes

  // Context value for cart
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  };

  // Context value for API
  const apiContextValue = {
    apiData,
    loading,
    error,
    filter,
    setFilter,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <ApiContext.Provider value={apiContextValue}>
        {children}
      </ApiContext.Provider>
    </CartContext.Provider>
  );
};

// Custom hooks for easy context access
export const useCart = () => useContext(CartContext);
export const useApi = () => useContext(ApiContext);
