import React, { useState } from "react";
// import defaultImage from "../../assets/Default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images, onSelectImage }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevSlider = () => {
    const newIndex = (currIndex - 1 + images.length) % images.length;
    setCurrIndex(newIndex);
  };

  const nextSlider = () => {
    const newIndex = (currIndex + 1) % images.length;
    setCurrIndex(newIndex);
  };

  const handleImageClick = (index) => {
    setCurrIndex(index);
    if (onSelectImage) {
      onSelectImage(images[index]);
    }
  };

  const renderImages = () => {
    let renderedImages = [];
    for (let i = 0; i < images.length; i++) {
      const index = (currIndex + i) % images.length;
      renderedImages.push(
        <div key={i} className={`slider-slide ${i < 3 ? "" : "hidden"}`}>
          <img
            className="slider-image rounded-xl object-contian h-full w-[100%] bg-slate-400"
            src={images[index] || defaultImage}
            alt={images[index] ? `Slide ${index + 1}` : defaultImage}
            onClick={() => handleImageClick(index)}
          />
        </div>
      );
    }
    return renderedImages;
  };

  return (
    <>
      {images.length > 1 && (
        <div className="slider h-[130px] w-full  mt-5 flex py-4 px-1 items-center">
          <button onClick={prevSlider}>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="text-3xl text-violet-400"
            />
          </button>
          <div className="slider w-full h-full flex gap-x-3 mx-3 justify-around">
            {renderImages()}
          </div>
          <button onClick={nextSlider}>
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="text-3xl text-violet-400"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Slider;
