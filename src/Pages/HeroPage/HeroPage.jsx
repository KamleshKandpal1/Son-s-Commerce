import React from "react";
import { NavLink } from "react-router-dom";
import { useApi } from "../../Contexts/Contexts";
import HeroImage from "../../assets/HeroImage.jpg";

function HeroPage({ setProduct }) {
  const { apiData } = useApi();

  const filterByCategory = (categories) => {
    const filteredProducts = apiData.filter((product) =>
      product.category.includes(categories)
    );
    console.log(filteredProducts);
    setProduct(filteredProducts);
  };

  return (
    <>
      <div className="w-full h-[27rem] relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000b6]"></div>
        <div
          className="h-full w-full bg-cover bg-center rounded-b-md shadow-lg"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="flex items-center justify-center h-full w-full absolute flex-col gap-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#f3eeee] drop-shadow-lg text-center">
              Son's Commerce
            </h1>
            {/* <div className="flex flex-wrap gap-3 justify-center">
              <NavLink
                to="/all"
                onClick={() => filterByCategory("all")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                All
              </NavLink>
              <NavLink
                to="/wardrobe"
                onClick={() => filterByCategory("wardrobe")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Wardrobe
              </NavLink>
              <NavLink
                to="/electronics"
                onClick={() => filterByCategory("electronics")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Electronics
              </NavLink>
              <NavLink
                to="/groceries"
                onClick={() => filterByCategory("groceries")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Groceries
              </NavLink>
              <NavLink
                to="/furnitures"
                onClick={() => filterByCategory("furnitures")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Furnitures
              </NavLink>
              <NavLink
                to="/shoes"
                onClick={() => filterByCategory("shoes")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Shoes
              </NavLink>
              <NavLink
                to="/vehicle"
                onClick={() => filterByCategory("vehicle")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff]"
                      : "text-white bg-transparent"
                  } w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white rounded-full text-sm md:text-[12px] font-bold text-center pt-5 md:pt-9 px-1`
                }
              >
                Vehicle
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
