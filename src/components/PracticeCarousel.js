import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { projects } from "../data";

function PracticeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative container px-5 py-10 mx-auto lg:px-40">
      <div className="relative flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100 z-30 object-cover">
          <div
            className="bg-blue-400 bg-transparent p-4 rounded-lg text-white"
            style={{ width: "100%", height: "100%" }}
          >
            <h2 className="text-sm font-medium mb-1">
              {projects[currentIndex].subtitle}
            </h2>
            <h1 className="text-lg font-medium mb-2">
              {projects[currentIndex].title}
            </h1>
            <p className="text-sm">{projects[currentIndex].description}</p>
          </div>
        </div>
        <img
          className="flex items-center justify-center border border-yellow-200 rounded-m object-contain"
          src={projects[currentIndex].url}
          style={{ width: "80%" }}
        />
      </div>
      <div className="flex top-4 justify-center py-2">
        {projects.map((project, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeCarousel;

//Add a ref
{
  /* <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4"> */
}
