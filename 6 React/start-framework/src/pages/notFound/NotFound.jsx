import React from 'react'
import notfound from '../../imgs/notFound.jpg'


export default function NotFound() {
    return (
        <img src={notfound} alt="not found" className='w-full h-screen object-cover' />
    )
}
