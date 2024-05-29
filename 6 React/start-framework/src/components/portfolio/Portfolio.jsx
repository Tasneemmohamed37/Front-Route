import React from "react";
import port1 from "../../imgs/port1.png";
import port2 from "../../imgs/port2.png";
import port3 from "../../imgs/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto text-slate-700 py-10">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-4xl uppercase">PORTFOLIO COMPONENT</h1>
          <div className="flex justify-center items-center gap-2">
            <div className="font-bold text-3xl bg-slate-700 w-24 h-[3px]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="font-bold text-3xl bg-slate-700 w-24 h-[3px]"></div>
          </div>
          <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port1} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port2} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port3} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port1} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port2} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
            <div className="col-span-1 rounded-lg relative overflow-hidden group transition-all duration-400">
              <img src={port3} alt="home img" className="w-full rounded-lg" />
              <div className="flex justify-center items-center text-white rounded-lg bg-teal-500 opacity-0 absolute inset-0 group-hover:opacity-90">
                <i className="fa fa-plus text-9xl font-bold"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
