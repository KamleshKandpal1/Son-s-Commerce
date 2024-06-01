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
        <div className="w-full h-auto py-8 px-4 sm:px-8 md:px-16 bg-[#F6F4EB]">
          <div className="box">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ml-4 sm:ml-8 capitalize">
              {product.category}
            </h2>
            <div className="products flex flex-col md:flex-col items-center w-full px-2 mt-6">
              <div className="py-8 flex flex-col md:flex-row justify-evenly w-full md:w-full">
                <div className="left w-full md:w-[50%] lg:w-[38%] h-auto pt-5 bg-[#848a8b4b] rounded-lg flex flex-col items-center mb-6 md:mb-0">
                  <div className="displayImg w-[90%] h-[60vw] md:h-[30vw] lg:h-[25vw] mx-auto shadow-lg rounded-3xl my-2">
                    <img
                      className="w-full object-scale-down h-full rounded-3xl"
                      src={displayedImage}
                      alt={product.title}
                    />
                  </div>
                  <div className="slider mt-4 w-full">
                    <Slider
                      images={product.images}
                      onSelectImage={handleImageSelect}
                    />
                  </div>
                </div>
                <div className="right w-full md:w-[50%] lg:w-[55%] h-auto p-4 flex flex-col gap-y-2.5">
                  {product?.title && (
                    <h3 className="text-2xl sm:text-3xl font-bold text-violet-600">
                      {product?.title}
                    </h3>
                  )}
                  {product?.description && (
                    <p className="text-sm sm:text-lg font-semibold">
                      {product?.description}
                    </p>
                  )}
                  {product?.brand && (
                    <p className="text-sm sm:text-lg font-semibold capitalize">
                      Brand: {product?.brand}
                    </p>
                  )}
                  {product?.category && (
                    <p className="text-sm sm:text-lg font-semibold capitalize">
                      Category: {product?.category}
                    </p>
                  )}
                  {product?.rating && (
                    <p className="text-sm sm:text-lg ont-semibold flex gap-x-3 items-center">
                      Rating: {product?.rating}{" "}
                      <Rating rating={product?.rating} />
                    </p>
                  )}
                  {product?.price && (
                    <p className="text-sm sm:text-lg font-semibold">
                      Price: {`$${product?.price}`}
                    </p>
                  )}
                  {product?.discountPercentage && (
                    <p className="text-sm sm:text-lg font-semibold">
                      Discount: {product?.discountPercentage}%
                    </p>
                  )}
                  {product?.stock && (
                    <p className="text-sm sm:text-lg font-semibold">
                      In-Stock: {product?.stock}
                    </p>
                  )}
                  <div className="flex gap-x-3 sm:gap-x-5 items-center mt-4">
                    <Link className="w-[100%]">
                      <div className="h-10 w-full sm:w-40 text-center font-semibold bg-purple-700 text-white hover:text-purple-700 hover:bg-[#4547474d] transition-colors shadow-2xl rounded-md">
                        <p className="pt-2" onClick={() => addToCart(product)}>
                          Add to Cart <FontAwesomeIcon icon={faCartShopping} />
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full mt-8">
                <h2 className="text-center my-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3335]">
                  Similar Products
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
