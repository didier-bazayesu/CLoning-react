import React from 'react'
import { useRef,useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
function MovieCard({movie}) {


    
       let[movieList,setMovieList]= useState([])
       let elementRef = useRef()
       let windowWidth = window.innerHeight+500
  
       let sliderLeft = (element)=>{
          element.scrollLeft-=windowWidth;
       }
       let sliderRight = (element) => {
           element.scrollLeft += windowWidth;
       }


    const baseUrl = "https://image.tmdb.org/t/p/original"
  return (
   
     <>
     

         {/* <HiChevronLeft className='hidden md:block text-white text-[50px]  mt-[170px] ml-4 absolute'
                  onClick={()=>sliderLeft(elementRef.current)}/> */}

      

          <img src={ baseUrl + movie.poster_path} alt="" 
           className='w-[110px] md:w-[200px] 
            rounded-lg hover:border-[3px] border-grey-400
            hover: scale-110'/>



            {/* <HiChevronRight 
                      className='hidden md:block text-white
                       text-[50px] 
                       mt-[170px] ml-4 absolute right-0 '
                        onClick={() =>
                         sliderRight(elementRef.current)}/> */}



     </>

    
   
  )
}

export default MovieCard