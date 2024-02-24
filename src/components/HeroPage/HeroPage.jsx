import React from "react";
import { NavLink } from "react-router-dom";

function HeroPage() {
  return (
    <>
      <div className="padding w-screen h-[27rem] relative">
        <div className="ovelay absolute top-0 bottom-0 left-0 right-0 bg-[#f7f7f780]"></div>
        <div
          className="box h-full w-full  bg-cover bg-center rounded-b-md shadow-lg opacity-70"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2018/04/20/22/18/factory-3337207_1280.jpg')",
          }}
        >
          <div className="info flex items-center justify-center h-2/3 w-2/3   absolute my-[5.5%] mx-[16%] flex-col gap-y-6">
            <h1 className="text-8xl font-bold text-[#f3eeee] drop-shadow-lg">
              Son's Commerce
            </h1>
            <div className="links flex gap-x-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                All
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                Cloths
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                Electronics
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                Furnitures
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                Shoes
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block ${
                    isActive ? "text-violet-500" : "bg-white"
                  } w-[90px] h-[90px] bg-transparent border-2 border-white rounded-[50%] text-[12px] font-bold text-white text-center pt-9 px-1`
                }
              >
                Others
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
