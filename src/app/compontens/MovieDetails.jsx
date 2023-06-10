'use client';
import React from 'react'
import Navbar from './Navbar'
import requests from "../../utils/requests"

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'




const MovieDetails = () => {
 
  
  

  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]
 
  // useEffect(() => {
  //   axios.get(requests.requestPopular).then((response) => {
  //     setMovies(response.data.results);
  //   });
  // }, []);

  useEffect(() => {
    fetch(requests.requestPopular)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  const truncateString = (str,num) =>{
    if(str?.length > num) {
      return str.slice(0,num) + '...'
    }else{
      return str
    }
  }






  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh] justify-center lg:pb-12">
          <div className="absolute top-0 left-0 -z-10 h-screen w-screen">

            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="object-cover"
              alt={movie?.title}
            />



          </div>
          <div className='absolute w-full top-[30%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div  className='my-4' >
              <button        
               className='  border-2 bg-gray-300 text-black border-gray-300 py-2 px-5  '>
                Play
              </button>
              <button className='   border-2 text-white border-gray-300 py-2 px-5 ml-4  '>
                Watch Later
              </button>

            </div>
            <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200' >
            { truncateString(movie?.overview,150) }

          </p>

         

          </div>
         
        </div>

        </div>
        {/* hna */}
  
      

    

    </>
  )
}

export default MovieDetails;