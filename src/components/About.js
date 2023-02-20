import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-8xl text-3xl mb-4 font-medium text-blue-400">
            Exploration, Entrepreneurship & Education.
          </h1>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 invisible xl:visible">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./portfolio-image-hd.svg"
          />
        </div>
      </div>
    </section>
  );
}
