import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center bg-teal-500 text-white py-36">
        <h1 className="font-bold text-4xl uppercase">ABOUT COMPONENT</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="font-bold text-3xl bg-white w-24 h-[3px]"></div>
          <i className="fa-solid fa-star"></i>
          <div className="font-bold text-3xl bg-white w-24 h-[3px]"></div>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <div className="container mx-auto flex justify-between items-center gap-10">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
