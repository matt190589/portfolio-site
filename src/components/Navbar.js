import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-400 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-yellow-200">
            Matt Doherty
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-yellow-200">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-yellow-200">
            Skills
          </a>
          <a href="#Profile" className="mr-5 text-white hover:text-yellow-200">
            Profile
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
