import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-blue-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 h-screen flex-col  justify-center items-center">
        <div className="flex flex-wrap m-4 justify-center max-w-full">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center h-64 md:h-full md:w-full border-yellow-200"
                  src={project.image}
                />
                <div className="px-4 py-10 relative z-10 w-full h-full border-4 border-yellow-200 bg-blue-400 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-200 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
