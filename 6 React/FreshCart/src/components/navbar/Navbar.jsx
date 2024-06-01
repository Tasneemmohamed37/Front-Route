import React from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-100 fixed z-50 left-0 right-0 top-0">
                <div className="container flex justify-between items-center py-3 text-gray-600">
                    <div className="flex items-center gap-5">
                        <h1>
                            <Link to="/">
                                <img src={logo} alt="fresh card logo" />
                            </Link>
                        </h1>
                        <ul className="flex gap-3">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="cart"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="products"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="categories"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="brands"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    Brands
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-5">
                        <ul className="flex gap-3 text-black">
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex gap-3">
                            <li>
                                <NavLink
                                    to="auth/login"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    SignIn
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="auth/signUp"
                                    className={({ isActive }) => {
                                        return `relative hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:absolute before:h-[2px] before:bg-mainColor before:-bottom-1 before:left-0 
                                ${isActive
                                                ? "before:w-full font-bold"
                                                : "before:w-0"
                                            }`;
                                    }}
                                >
                                    SignUp
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="logout">
                                    <i className="fa-solid fa-right-from-bracket text-black text-xl"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
