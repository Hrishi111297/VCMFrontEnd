import React from "react";
import Accordion from "./Accordian";

const About = () => {
  return (
    <div className="relative top-5 p-4 text-green-950  pb-10">
      <div className=" flex  flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-bold ">Shree Vidya classes</h2>
          <p className="text-xs">
            Tmply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been theindustry's standard dummy text ever since the
            1500s, when an unknown printer took.
          </p>
        </div>
        <div className="p-2 mt-5">
          <img src="/m1.jpg" alt="abt" />
        </div>
      </div>

      <div className=" mt-5  flex  flex-col justify-center items-center text-green-950    pb-32">
        <div className="text-center">
          <h2 className="text-xl font-bold ">ABOUT US</h2>
          <p className="text-xs">
            Fusce sem dolor, interdum in fficitur at, faucibus nec lorem. Sed
            nec molestie justo.
          </p>
        </div>
      </div>
      <div className="  mt-10 flex flex-col justify-center items-center h-96 gap-2 md:flex-row ">
        <div className="relative rounded-sm  md:w-1/2">
          {/* Image container with the hover effect */}
          <img
            className="w-full h-full object-cover rounded-sm"
            src="/slide8.jpg"
            alt="abt"
          />
          {/* Black overlay with opacity on hover */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out rounded-sm"></div>
        </div>

        <div className="text-center h-30">
          <h2 className="text-xl font-bold ">WELCOME TO Shree Vidya classes</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default About;
