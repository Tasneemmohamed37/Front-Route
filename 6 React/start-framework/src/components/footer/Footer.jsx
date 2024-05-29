import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white">
        <div className="bg-slate-700 py-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
                  <h6 className="text-2xl font-semibold uppercase">LOCATION</h6>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
              </div>
              <div className="col-span-1">
              <h6 className="text-2xl font-semibold uppercase">AROUND THE WEB</h6>
              <ul className="flex gap-3 justify-center pt-3 text-md">
                <li><i className="fa-brands fa-facebook text-sm p-2 border-2 rounded-full border-white"></i></li>
                <li><i className="fa-brands fa-twitter text-sm p-2 border-2 rounded-full border-white"></i></li>
                <li><i className="fa-brands fa-linkedin-in text-sm p-2 border-2 rounded-full border-white"></i></li>
                <li><i className="fa-solid fa-globe text-sm p-2 border-2 rounded-full border-white"></i></li>
              </ul>
              </div>
              <div className="col-span-1">
              <h6 className="text-2xl font-semibold uppercase">ABOUT FREELANCER</h6>
              <p>Freelance is a free to use, licensed Bootstrap theme <br/> created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-customDarkBlue text-center py-5 text-lg ">
          <p>Copyright © Tasneem Elhussiny 2024</p>
        </div>
      </footer>
    </>
  );
}
