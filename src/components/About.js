import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-400">
            Hi, I'm Matt.
            <br className="hidden lg:inline-block" /> Exploration,
            Entrepreneurship & Education.
          </h1>
          <p className="mb-8 leading-relaxed">
            I began my Javascript journey in September 2022 and have been
            building mini-web development since. I have over a decade of
            experience in International Education and project management on
            education programmes in the UK and overseas. I'm excited to learn
            many new technical skills and excited for a new challenge.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-blue-400 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-blue-400 bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 rounded text-lg"
            >
              Explore my projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
