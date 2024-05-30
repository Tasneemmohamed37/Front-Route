import React from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-100 fixed left-0 right-0 top-0">
                <div className="container flex justify-between items-center py-3 text-gray-600">
                <div className="flex items-center gap-5">
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="fresh card logo" />
                        </Link>
                    </h1>
                    <ul className="flex gap-3">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="cart">Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to="products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="categories">Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to="brands">Brands</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <ul className="flex gap-3 text-black">
                        <li>
                            <a href="">
                                <i className="fa-brands fa-instagram" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-brands fa-facebook" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-brands fa-tiktok" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i className="fa-brands fa-linkedin" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i className="fa-brands fa-twitter" ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <i className="fa-brands fa-youtube" ></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex gap-3">
                        <li>
                            <NavLink to='login'>SignIn</NavLink>
                        </li>
                        <li>
                            <NavLink to='signUp'>SignUp</NavLink>
                        </li>
                        <li>
                            <NavLink to='logout'><i className="fa-solid fa-right-from-bracket text-black text-xl"></i></NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}
