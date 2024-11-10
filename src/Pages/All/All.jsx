import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeroPage from "../HeroPage/HeroPage";
import { useApi } from "../../Contexts/Contexts";

function All() {
  const { apiData, loading, error } = useApi();
  const [savedFilter, setSavedFilter] = useState(
    localStorage.getItem("filter") || ""
  );

  useEffect(() => {
    if (savedFilter) {
      localStorage.setItem("filter", savedFilter);
    }
  }, [savedFilter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32 min-h-screen">
        <h1 className="loading loading-spinner loading-lg"></h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filterProducts =
    apiData && Array.isArray(apiData)
      ? savedFilter
        ? apiData.filter((product) => product.category === savedFilter)
        : apiData
      : [];

  return (
    <div>
      <HeroPage setSavedFilter={setSavedFilter} /> {/* Pass setSavedFilter */}
      <div className="w-full h-auto py-16 px-4 sm:px-8 md:px-16 bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize">
            {savedFilter === ""
              ? "All Products"
              : savedFilter || "Category not available"}
          </h2>
          <div className="products sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 mt-6">
            {filterProducts.map((item) => (
              <div key={item.id}>
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                  img={item.images[0]}
                  id={item.id}
                  product={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
