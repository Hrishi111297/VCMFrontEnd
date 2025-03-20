import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const staffs = [
  {
    id: 1,
    imgSrc: "/s1.jpg",
    name: "Lisa",
  },
  {
    id: 2,
    imgSrc: "/s2.jpg",
    name: "Flavia",
  },
  {
    id: 3,
    imgSrc: "/s3.jpg",
    name: "Carolina",
  },
  {
    id: 3,
    imgSrc: "/s4.jpg",
    name: "Brenda",
  },
];
const Staff = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" mb-10 ">
      <div className=" mt-20 flex  flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-bold ">OUR EXPERIENCED STAFFS</h2>
          <p className="text-xs">
            Considering desire as primary motivation for the generation of
            narratives is a useful concept.
          </p>
        </div>
      </div>

      <div className="w-full text-green-950 mt-5 flex justify-center items-center md:flex-row ">
        <button
          onClick={() => {
            setCurrentIndex((currentIndex - 1 + staffs.length) % staffs.length);
          }}
          className="absolute  left-4 md:left-1/3 bg-lime-400 p-2 rounded-full w-7 h-7"
        >
          <MdKeyboardArrowLeft className="text-sm" />
        </button>

        <div
          key={staffs[`${currentIndex}`].id}
          className="w-[90%] md:w-1/3 h-full bg-white pl-1   "
        >
          <div className="w-full">
            <img
              src={staffs[`${currentIndex}`].imgSrc}
              alt={staffs.id}
              className="object-cover  w-full h-64 p-2 rounded-full"
            />
          </div>
          <div className="w-full">
            <h1 className="text-center text-xl text-green-950 font-semibold">
              {staffs[`${currentIndex}`].name}
            </h1>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % staffs.length);
          }}
          className="absolute right-4 md:right-1/3 bg-lime-400 p-2 rounded-full w-7 h-7"
        >
          <MdKeyboardArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Staff;
