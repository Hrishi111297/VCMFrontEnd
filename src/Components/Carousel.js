import React, { useState } from "react";

const cards = [
  {
    id: 1,
    imgSrc: "https://demo.smart-school.in/uploads/gallery/media/courseimg3.jpg",
    title: "Card 1",
    description: "This is the description for card 1.",
  },
  {
    id: 2,
    imgSrc: "https://demo.smart-school.in/uploads/gallery/media/courseimg3.jpg",
    title: "Card 2",
    description: "This is the description for card 2.",
  },
  {
    id: 3,
    imgSrc: "https://demo.smart-school.in/uploads/gallery/media/courseimg3.jpg",
    title: "Card 3",
    description: "This is the description for card 3.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="flex items-center justify-center py-8 mt-24">
      <div className="relative w-80 sm:w-96">
        {/* Carousel Cards */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-none w-full p-4 bg-white shadow-lg rounded-lg"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md">
                Apply
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
