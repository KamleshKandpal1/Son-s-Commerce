import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useApi } from "../../Contexts/Contexts"; // Import useApi hook

export default function SimilarProduct({ category }) {
  const { apiData } = useApi(); // Access apiData from useApi hook
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Filter similar products based on category
    if (apiData) {
      const filteredProducts = apiData.filter(
        (product) => product.category === category
      );
      setSimilarProducts(filteredProducts);
    }
  }, [apiData, category]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
}
