"use client"
import axios from "axios";
import React from "react"; 
import { useEffect,useState } from "react";

import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

// const getMoviesData = async ({fetchURL}) => {
//     const res = await fetch(fetchURL);
//     return res.json() ;
// }
const   Row = ({title,fetchURL,rowID}) => {

    const [moviess,setMovies] =  useState([]);
    
 // fetch data in api image movie
    // useEffect(()=>{
    //     axios.get(fetchURL).then((response)=>{
    //         setMovies(response.data.results)
    //     })

    // },[fetchURL])

// const moviess  = await getMoviesData();


useEffect(() => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);



    // slider image 

    const sliderLeft = ( ) =>{
        const slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = ( ) =>{
        const slider = document.getElementById('slider'+rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }


  

    return (
    <   >
    <h1  className="text-white font-bold md:text-xl p-4" >{title}</h1>
    <div className="relative flex items-center group" >
        < MdChevronLeft  onClick={sliderLeft}  className="bg-white text-black  left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40}/>
        <div  id={'slider'+rowID}  className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative' >
            {moviess.map((item,id)=>(
                <Movie key={id} item={item}/>
            )

            )}


        </div>
        <MdChevronRight   onClick={sliderRight} className="bg-white text-black  right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40}/>
    </div>
    </>
    )
}

export default Row;