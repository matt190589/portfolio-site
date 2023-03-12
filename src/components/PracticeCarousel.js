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
    <div className="relative container px-5 py-10 mx-auto text-center lg:px-40 h-screen">
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
          style={{ width: "80%", height: "50%" }}
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

//  <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div className="flex flex-col w-full mb-10">
//         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue-400">
//           My Portfolio
//         </h1>
//         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//           Through a combination of team and personal projects, I've developed my
//           Techstack and also built Apps people might find useful.
//         </p>
//       </div>
//       <div className="flex items-center justify-center w-full h-full rounded-2xl duration-500 z-auto">
//         <div className="border-4 border-yellow-200 bg-blue-400 opacity-0 hover:opacity-100 z-30">
//           <h2 className="tracking-widest text-sm title-font font-medium text-yellow-200 mb-1">
//             {slides[currentIndex].subtitle}
//           </h2>
//           <h1 className="title-font text-lg font-medium text-white mb-3">
//             {slides[currentIndex].title}
//           </h1>
//           <p className="leading-relaxed">{slides[currentIndex].description}</p>
//         </div>
//         <img
//           className="inset-0 w-full h-full border border-yellow-200 rounded-md"
//           src={slides[currentIndex].url}
//           style={{ maxWidth: "1000px", maxHeight: "600px" }}
//         />
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
