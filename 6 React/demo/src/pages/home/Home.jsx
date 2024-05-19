import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import MovieCard from '../../components/movie card/MovieCard';
import axios from 'axios';

export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState(null);

    async function getTrendyMovies(){
        // using fetch 
        // const response =await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=ac7e5c509c05c95a09ccc13bb434f9f4');
        // const data = await response.json();

        // using axios   highly recommended!!
        const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ac7e5c509c05c95a09ccc13bb434f9f4');

        setTrendingMovies(data.results);
    }

    useEffect(()=>{
        getTrendyMovies()
    },[]);

    return (
        <>
            {(trendingMovies == null)? 
                <Loading/> : 
                <div className="max-w-screen-xl mx-auto">
                    <div className="container mx-auto flex flex-wrap justify-evenly py-8">
                        {trendingMovies.map((m)=>{
                            return <MovieCard movie={m}/>
                        })}
                    </div>
                </div>
                }
        </>
    )
}
