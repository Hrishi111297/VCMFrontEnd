import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const cards = [
  {
    id: 1,
    imgSrc: "/c1.jpg",
  },
  {
    id: 2,
    imgSrc: "/c2.jpg",
  },
  {
    id: 3,
    imgSrc: "/c3.jpg",
  },
];
const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" mb-10 ">
      <div className=" mt-10 flex  flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-bold ">OUR MAIN COURSES</h2>
          <p className="text-xs">
            Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed
            nec molestie justo.
          </p>
        </div>
      </div>

      <div className="w-full h-96 mt-5 flex justify-center items-center md:flex-row">
        <button
          onClick={() => {
            setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
          }}
          className="absolute  left-4 md:left-1/3 bg-gera p-2 rounded-full w-7 h-7"
        >
          <MdKeyboardArrowLeft className="text-sm" />
        </button>

        <div
          key={cards[`${currentIndex}`].id}
          className="w-[90%] md:w-1/3 h-full bg-white pl-1  shadow-lg "
        >
          <div className="w-full">
            <img
              src={cards[`${currentIndex}`].imgSrc}
              alt={cards.id}
              className="object-cover  w-full  h-52 p-2"
            />
          </div>
          <div className="  w-full  text-xs p-1">
            <p className="pt-2">Science</p>
            <h1 className="text-base font-semibold">Electrical Engineering</h1>
            <p className="p-2">
              All over the world, human beings create an immense and
              ever-increasing volume of data, with new kinds of data
              regularly...
            </p>
          </div>
          <button className="bg-purple-600 text-lg  mt-1 text-white flex justify-center items-center border rounded-md   w-32 h-10">
            Apply Now
          </button>
        </div>

        <button
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % cards.length);
          }}
          className="absolute right-4 md:right-1/3 bg-gera p-2 rounded-full w-7 h-7"
        >
          <MdKeyboardArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Courses;
