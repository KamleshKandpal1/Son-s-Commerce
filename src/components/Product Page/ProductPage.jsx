import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

function ProductPage({ title, description, img, price, rating }) {
  const { id } = useParams();
  const product = {
    title: "title",
    description: "Product Description",
    price: "$100",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
  };

  return (
    <>
      <div className="padding  w-full h-auto py-[4rem] px-[4rem] bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-5xl font-bold ml-8">Products</h2>
          <div className="products flex items-center w-full px-2 mt-6 flex-wrap justify-between">
            <Card {...product} key={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
