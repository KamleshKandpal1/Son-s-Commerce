import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

function All() {
  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/search",
    params: {
      query: "Phone",
      page: "1",
      country: "US",
      category_id: "aps",
    },
    headers: {
      "X-RapidAPI-Key": "67ce80c78dmsh0a71d68130df85cp148b51jsnb0f1c9bfd7bc",
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getProduct(options);
  }, []);
  const getProduct = async (url) => {
    try {
      const response = await axios.request(url);
      const product = response.data.data.products;
      if (Array.isArray(product)) {
        setUserData(product);
      } else {
        console.error("Expected an array of products, but received:", product);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="padding  w-full h-auto py-[4rem] px-[4rem] bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-5xl font-bold ml-8">All Products</h2>
          <div className="products flex  flex-1 items-center w-full px-2 mt-6 flex-wrap gap-x-6 justify-around">
            {userData.map((item) => (
              <Card
                title={item.product_title}
                description={item.sales_volume}
                rating={item.product_star_rating}
                price={item.product_price}
                img={item.product_photo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
