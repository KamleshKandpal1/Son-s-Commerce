import React from "react";
import Card from "../Card/Card";

function Shoes() {
  return (
    <>
      <div className="padding  w-full h-auto py-[4rem] px-[4rem] bg-[#d8d4c071]">
        <div className="box ">
          <h2 className="text-5xl font-bold pl-4">Shoes</h2>
          <div className="h-auto w-[100%] flex flex-wrap justify-between">
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
            {<Card />}
          </div>
          s
        </div>
      </div>
    </>
  );
}

export default Shoes;
