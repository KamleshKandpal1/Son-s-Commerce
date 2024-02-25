import React from "react";
import Card from "../Card/Card";

function Electronics() {
  return (
    <>
      <div className="padding  w-full h-auto py-[4rem] px-[4rem] bg-[#F6F4EB]">
        <div className="box">
          <h2 className="text-5xl font-bold ml-8">Electronics</h2>
          <div className="products flex items-center w-full px-2 mt-6 flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Electronics;
