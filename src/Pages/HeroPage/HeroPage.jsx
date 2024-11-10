import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext, useApi } from "../../Contexts/Contexts";
import HeroImage from "../../assets/HeroImage.jpg";

function HeroPage({ setSavedFilter }) {
  const { apiData } = useApi();
  const { setFilter } = useContext(ApiContext);

  // Map and transform the categories
  const Category = apiData.map((product) => product.category);

  // Remove duplicates and add "All"
  let uniqueCategories = [...new Set(Category)];
  uniqueCategories = ["All", ...uniqueCategories];

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
            <div className="flex gap-4 px-5 w-full overflow-scroll">
              {uniqueCategories.map((categ, index) => (
                <NavLink
                  key={index}
                  to={categ === "All" ? "/" : `/${categ}`}
                  onClick={() => {
                    setFilter(categ === "All" ? "" : categ);
                    setSavedFilter(categ === "All" ? "" : categ); // Update savedFilter
                  }}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "text-violet-800 bg-[#fff]"
                        : "text-white bg-transparent"
                    } min-w-[80px] min-h-[80px] md:min-w-[90px] md:w-[90px] md:h-[90px] md:min-h-[90px] border-2 border-white rounded-full text-[10px] md:text-xs font-bold px-1 capitalize flex justify-center items-center text-center w-[80px] h-[80px]`
                  }
                >
                  {categ}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
