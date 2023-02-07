import React from "react";

export default function Profile() {
  return (
    <section id="Profile">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-blue-400 mb-12">
          Profile
        </h1>
        <div className="flex flex-wrap m-4">
          <div className="p-4 w-full">
            <div className="h-full bg-blue-400 bg-opacity-1 p-8 rounded">
              <p className="leading-relaxed mb-6 text-white">
                {" "}
                I began my Javascript journey in September 2022 and have been
                building mini-web development projects since. I have over a
                decade of experience in International Education and project
                management on programmes in the UK and overseas. I'm excited to
                learn many new technical skills and m open to new opportunities.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src=""
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Matt is great
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
