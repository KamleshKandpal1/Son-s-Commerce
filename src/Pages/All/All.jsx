import React from "react";
import Card from "../../Components/Card/Card";
import HeroPage from "../HeroPage/HeroPage";
import { useApi } from "../../Contexts/Contexts"; // Import the useApi hook

function All() {
  // Access the API data using the useApi hook
  const { apiData, loading, error } = useApi();

  // Check if data is loading or if there's an error
  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <HeroPage apiData={apiData} />
      <div className="w-full h-auto py-16 px-4 sm:px-8 md:px-16 bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ml-4 sm:ml-8">
            Products
          </h2>
          <div className="products flex flex-1 items-center w-full mt-6 flex-wrap gap-4 justify-around">
            {apiData.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
