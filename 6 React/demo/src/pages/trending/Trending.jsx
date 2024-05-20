import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Trending() {
    return (
        <>
            <div className="container grid grid-cols-12 pt-20 pb-10">
                <Sidebar />
                <Outlet></Outlet>
            </div>
        </>
    )
}
