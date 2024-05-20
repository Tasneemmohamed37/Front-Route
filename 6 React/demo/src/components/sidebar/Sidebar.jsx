import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <aside className="col-span-3 bg-red-400">
                <ul>
                    <li>
                        <Link to="movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="people">People</Link>
                    </li>
                    <li>
                        <Link to="tv">Tv</Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}
