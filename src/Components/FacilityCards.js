import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
const FacilityCards = () => {
  return (
    <div className="relative top-5 ml-5 mr-5 flex flex-col md:flex-row md:justify-between md:px-10 text-gera">
      <div className="flex bg-purple-800 gap-4 p-4 border-2 border-white  ">
        <div>
          <IoMdSchool className="text-4xl text-gera " />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Scholarship Facility</h1>
          <p className="text-sm">
            Eimply dummy text printing ypese tting industry.
          </p>
        </div>
      </div>
      <div className="flex bg-purple-800 gap-4 p-4 border-2 border-white  ">
        <div>
          <FaBook className="text-4xl text-gera" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Books & Liberary</h1>
          <p className="text-sm">
            Eimply dummy text printing ypese tting industry.
          </p>
        </div>
      </div>
      <div className="flex bg-purple-800 gap-4 p-4 border-2 border-white ">
        <div>
          <FaChalkboardTeacher className="text-4xl text-gera" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">Certified Teachers</h1>
          <p className="text-sm">
            Eimply dummy text printing ypese tting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacilityCards;
