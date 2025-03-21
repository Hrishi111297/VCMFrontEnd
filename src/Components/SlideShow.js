import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const images = [
  "/slide1.jpg",
  "/slide3.jpg",
  "/slide2.jpg",
  "/slide4.jpg",
  "/slide5.jpg",
  "/slide6.jpg",
  "/slide7.jpg",
  "/slide8.jpg",
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center bg-slate-500 w-full h-40 sm:h-60 md:h-80 lg:h-96 xl:h-[32rem]">
      <button
        onClick={() => {
          setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-4 bg-lime-400 p-2 rounded-full w-7 h-7"
      >
        <MdKeyboardArrowLeft className="text-sm" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }}
        className="absolute right-4 bg-lime-400 p-2 rounded-full w-7 h-7"
      >
        <MdKeyboardArrowRight className="text-sm" />
      </button>
    </div>
  );
};

export default SlideShow;
