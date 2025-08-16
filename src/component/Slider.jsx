import React, {useEffect,useRef,useState} from 'react'
import GlobalApi from '../services/GlobalApi';
import {  HiChevronLeft, HiChevronRight } from "react-icons/hi2";




 function Slider() {
     const baseUrl = "https://image.tmdb.org/t/p/original"
     
     let[movieList,setMovieList]= useState([])
     let elementRef = useRef()
     let windowWidth = window.innerHeight+500

     let sliderLeft = (element)=>{
        element.scrollLeft-=windowWidth;
     }
     let sliderRight = (element) => {
         element.scrollLeft += windowWidth;
     }
    
   
     


    useEffect(()=>{
       
        getTrended()

    },[])

   const getTrended = () => {
     GlobalApi.fetchPopularMovies().then((response) => {
       setMovieList(response.data.results);
     });
   };

     
    //  movieList.forEach(movie => {
    //      console.log(movie.
    //          original_title);
    //  })

  return (

    <div className='flex cursor-pointer '>
        <HiChevronLeft className='hidden md:block text-white text-[50px]  mt-[170px] ml-4 absolute'
         onClick={()=>sliderLeft(elementRef.current)}/>

        <div className='flex overflow-x-auto
           w-full px-16 py-4   
         scroll-smooth scrollbar-none class' 
          ref={elementRef} >

            {movieList.map((elem,index)=> { 
            return(
            
               <>
               <img  src={baseUrl + elem.backdrop_path} 
               alt="" className='w-auto md:min-w-full  md:h-[400px] object-cover
               object-left-top m-5 rounded-md  hover:border-6 hover:border-white 
                hover:transition-all  ease-in'/>
                    {/* <p>{elem.original_title}</p> */}
               
               </>

                
                
            )
                
            })}
        </div>

          <HiChevronRight 
          className='hidden md:block text-white
           text-[50px] 
           mt-[170px] ml-4 absolute right-0 '
            onClick={() =>
             sliderRight(elementRef.current)}/>

    </div>
           
        
  )
}



export default Slider;