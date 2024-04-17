import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeroPage from "../HeroPage/HeroPage";
import { useApi } from "../../Contexts/Contexts";

function Shoes() {
  const { apiData, loading, error, fetchData } = useApi();
  const [womenShoeData, setWomenShoeData] = useState([]);
  const [menShoeData, setMenShoeData] = useState([]);

  useEffect(() => {
    fetchData("womens-shoes");
    fetchData("mens-shoes");
  }, [fetchData]);

  useEffect(() => {
    if (apiData["womens-shoes"]) {
      setWomenShoeData(apiData["womens-shoes"]);
    }
    if (apiData["mens-shoes"]) {
      setMenShoeData(apiData["mens-shoes"]);
    }
  }, [apiData]);

  if (loading)
    return (
      <div className="flex items-center justify-center py-[15.2rem]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (error)
    return (
      <div className="text-xl font-semibold text-center">Error: {error}</div>
    );
  return (
    <>
      <HeroPage />
      <div className="padding  w-full h-auto py-[4rem] px-[4rem] bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-5xl font-bold ml-8">Shoes</h2>
          <div className="products flex flex-1 items-center w-full px-2 mt-6 flex-wrap gap-x-4 justify-around">
            {menShoeData.map((item) => (
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
            {womenShoeData.map((item) => (
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
      </div>
    </>
  );
}

export default Shoes;
