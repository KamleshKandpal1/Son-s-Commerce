import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useApi } from "../../Contexts/Contexts"; // Import useApi hook
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function SimilarProduct({ category, id }) {
  const { apiData } = useApi(); // Access apiData from useApi hook
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Filter similar products based on category
    if (apiData) {
      const filteredProducts = apiData.filter(
        (product) => product.category === category && product.id !== id
      );
      setSimilarProducts(filteredProducts);
    }
  }, [apiData, category]);

  return (
    <div>
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts.slice(0, 4).map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            img={item.images[0]}
            id={item.id}
          />
        ))}
      </div>
      <div className="block sm:hidden">
        <Swiper spaceBetween={10} slidesPerView={1}>
          {similarProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
                img={item.images[0]}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
