import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav
                className={`py-3 bg-slate-200 shadow fixed z-50 left-0 right-0 top-0  ${styles.nav}`}
            >
                <div className="container flex items-center justify-between">
                    <h1 className="text-lg font-bold ">
                        <Link to="/">React</Link>
                    </h1>
                    <ul className="flex gap-3">
                        <li>
                            <NavLink to="/" className="uppercase">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="trending" className="uppercase">
                                Trending
                            </NavLink>
                        </li>
                        <li>
                            <Link to="login" className="uppercase">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
