import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center bg-teal-500 text-white py-5">
        <img
          className="w-1/5"
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt="boy smile"
        />
        <h1 className="font-bold text-4xl uppercase">START FRAMEWORK</h1>
        <div className="flex justify-center items-center gap-2">
          <div className="font-bold text-3xl bg-white w-24 h-[3px]"></div>
          <i className="fa-solid fa-star"></i>
          <div className="font-bold text-3xl bg-white w-24 h-[3px]"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
