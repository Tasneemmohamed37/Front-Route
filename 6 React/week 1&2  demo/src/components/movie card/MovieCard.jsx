import React from 'react'

export default function MovieCard({movie}) {

    return (
    <div className="w-1/4 p-4">
        <div className="inner bg-white  shadow-md rounded-md">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt="" className="w-100 "/>
            <div className="p-5">
                <h1 className="text-lg font-bold">{movie.title}</h1>
                <p className="text-gray-500 ">
                    {movie.overview.split(" ").slice(0, 15).join(" ")}...
                </p>
            </div>
        </div>
        </div>
    )
}
