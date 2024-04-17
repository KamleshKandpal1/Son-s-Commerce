import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../../Components/Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Slider from "../../Components/Slider/Slider";
import SimilarProuct from "../../Components/SimilarProduct/SimilarProuct";
import { useCart } from "../../Contexts/Contexts";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        if (response.data.images && response.data.images.length > 0) {
          setDisplayedImage(response.data.images[0]);
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);
  const handleImageSelect = (image) => {
    setDisplayedImage(image);
  };
  if (!product) {
    return (
      <div className="flex items-center justify-center py-[15.2rem]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      {product && (
        <div className="padding  w-full h-auto py-[2rem] px-[4rem] bg-[#F6F4EB]">
          <div className="box">
            <h2 className="text-5xl font-bold ml-8 capitalize">
              {product.category}
            </h2>
            <div className="products flex items-center w-full px-2 mt-6 flex-wrap justify-between">
              {/* Render product data only if it's not null */}
              <div className="  py-8 flex justify-evenly">
                <div className="left w-[38%] h-auto pt-5 bg-[#848a8b4b] rounded-lg flex flex-col items-center">
                  <div className="displayImg w-[90%] h-[70%] mx-auto shadow-lg rounded-3xl">
                    <img
                      className="object-cover w-full h-full rounded-3xl"
                      src={displayedImage}
                      alt={product.title}
                    />
                  </div>
                  <div slider>
                    <Slider
                      images={product.images}
                      onSelectImage={handleImageSelect}
                    />
                  </div>
                </div>
                <div className="right w-[55%] h-auto p-4 flex flex-col gap-y-2.5">
                  <h3 className="text-3xl font-bold text-violet-600">
                    {product.title}
                  </h3>
                  <p className="text-lg font-semibold">{product.description}</p>
                  <p className="text-lg font-semibold capitalize">
                    Brand: {product.brand}
                  </p>
                  <p className="text-lg font-semibold capitalize">
                    Category: {product.category}
                  </p>

                  <p className="text-lg font-semibold flex gap-x-3">
                    Rating: {product.rating} <Rating rating={product.rating} />
                  </p>
                  <p className="text-lg font-semibold">
                    Price: {`₹${product.price}`}
                  </p>
                  <p className="text-lg font-semibold">
                    Discount: {product.discountPercentage}%
                  </p>
                  <p className="text-lg font-semibold">
                    In-Stock: {product.stock}
                  </p>
                  <div className="flex gap-x-5 items-center">
                    <div className="right">
                      <Link>
                        <div className="h-8 w-40 text-center font-semibold bg-[purple] text-white hover:text-[purple] hover:bg-[#4547474d] transition-colors shadow-2xl rounded-md">
                          <p
                            className="pt-1 "
                            onClick={() => addToCart(product)}
                          >
                            Add to Cart{" "}
                            <FontAwesomeIcon icon={faCartShopping} />
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around w-full flex-col">
                <h2 className="text-center my-4 text-[3rem] font-bold text-[#2C3335]">
                  Similar Product
                </h2>
                <SimilarProuct category={product.category} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
