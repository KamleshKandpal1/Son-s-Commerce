import React from "react";
import { NavLink } from "react-router-dom";
import { useApi } from "../../Contexts/Contexts";
import HeroImage from "../../assets/HeroImage.jpg";

function HeroPage(setProduct) {
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
      <div className="padding w-full h-[27rem] relative">
        <div className="ovelay absolute top-0 bottom-0 left-0 right-0 bg-[#000000b6]"></div>
        <div
          className="box h-full w-full bg-cover bg-center rounded-b-md shadow-lg opacity-70"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="info flex items-center justify-center h-2/3 w-2/3   absolute my-[5.5%] mx-[16%] flex-col gap-y-6">
            <h1 className="text-8xl font-bold text-[#f3eeee] drop-shadow-lg">
              Son's Commerce
            </h1>
            {/* <div className="links flex gap-x-5">
              <NavLink
                onClick={() => filterByCategory("laptops")}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                All
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                Wardrobe
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                Electronics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                Groceries
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                Furnitures
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
                }
              >
                Shoes
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-violet-800 bg-[#fff] "
                      : "text-white bg-transparent"
                  } w-[90px] h-[90px]  border-2 border-white rounded-[50%] text-[12px] font-bold  text-center pt-9 px-1`
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
