import React, { useState, useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";

const Achievements = () => {
  const [counts, setCounts] = useState({
    teachers: 0,
    medals: 0,
    students: 0,
    campuses: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("achievements");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (!hasAnimated && rect.top < window.innerHeight && rect.bottom >= 0) {
          animateCounts();
          setHasAnimated(true);
        }
      }
    };

    const animateCounts = () => {
      const targetCounts = {
        teachers: 50,
        medals: 120,
        students: 1000,
        campuses: 20,
      };
      const duration = 3000; // animation duration in milliseconds
      const interval = 60; // interval for each count update

      Object.keys(targetCounts).forEach((key) => {
        let current = 0;
        const step = Math.ceil(targetCounts[key] / (duration / interval));

        const intervalId = setInterval(() => {
          current += step;
          if (current >= targetCounts[key]) {
            current = targetCounts[key];
            clearInterval(intervalId);
          }
          setCounts((prev) => ({ ...prev, [key]: current }));
        }, interval);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      id="achievements"
      className="w-full bg-purple-600 text-white flex flex-col justify-center items-center mt-5 p-4 md:flex-row md:items-start"
    >
      {/* Left Section */}
      <div className="text-center md:w-1/2">
        <h1 className="text-xl font-bold pt-2 md:pt-1">ACHIEVEMENTS</h1>
        <p className="text-xs p-2 md:p-4">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart like
          mine.
        </p>
        <div className="w-full p-1 md:w-[90%] relative group">
          <img
            src="/slide5.jpg"
            alt="achievements"
            className="object-cover w-full h-44 rounded-sm "
          />
          <div className="absolute inset-0 bg-black  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="container mx-auto md:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gera">
          {/* Card 1 */}
          <div className="border-b border-white shadow-md text-center flex flex-col justify-center items-center p-4 transition-transform duration-1000 ease-in-out hover:scale-110">
            <FaUserGraduate className="text-center text-2xl" />
            <p className="text-2xl font-bold p-5">{counts.teachers}</p>
            <h2 className="text-base font-semibold">Certified Teachers</h2>
          </div>

          {/* Card 2 */}
          <div className="border-b border-white shadow-md text-center flex flex-col justify-center items-center p-4 transition-transform duration-1000 ease-in-out hover:scale-110">
            <FaMedal className="text-center text-2xl" />
            <p className="text-2xl font-bold p-5">{counts.medals}</p>
            <h2 className="text-base font-semibold">Awards Won</h2>
          </div>

          {/* Card 3 */}
          <div className="border-b border-white shadow-md text-center flex flex-col justify-center items-center p-4 transition-transform duration-1000 ease-in-out hover:scale-110">
            <PiStudentBold className="text-center text-2xl" />
            <p className="text-2xl font-bold p-5">{counts.students}</p>
            <h2 className="text-base font-semibold">Students</h2>
          </div>

          {/* Card 4 */}
          <div className="border-b border-white shadow-md text-center flex flex-col justify-center items-center p-4 transition-transform duration-1000 ease-in-out hover:scale-110">
            <BsBuildingsFill className="text-center text-2xl" />
            <p className="text-2xl font-bold p-5">{counts.campuses}</p>
            <h2 className="text-base font-semibold">Student Campuses</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
