import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
    {/* todo => responsive */}
      <nav className={`bg-slate-700 text-white font-bold uppercase ${styles.nav}`}>
        <div className="max-w-screen-xl mx-auto  py-7 px-3">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-3xl">
              <Link to="/">START FRAMEWORK</Link>
            </h1>
            <div className="links text-lg">
              <ul className="flex gap-5">
                <li>
                  <NavLink to="about" className='p-2 rounded-md'>ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="portfolio" className='p-2 rounded-md'>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="contact" className='p-2 rounded-md'>CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
