import React, {useEffect,useState} from 'react'
import GlobalApi from '../services/GlobalApi';




 function Slider() {
     const baseUrl = "https://image.tmdb.org/t/p/original"
     
     let[movieList,setMovieList]= useState([])


    useEffect(()=>{
       
        getTrended()

    },[])

    const getTrended = () =>{

        GlobalApi.fecthGlobalApi.then(response => {
            setMovieList(response.data.results)
            
            
        })
    }
     
  return (
      <div className='flex overflow-x-auto w-full px-16 py-4  scrollbar-none class'>

        {movieList.map((elem,index)=> { 
           
           return(
            <img id={index} src={baseUrl + elem.backdrop_path} alt="" className='min-w-full h-[400px] object-cover
            object-left-top m-5 rounded-md  '/>
           )
            
        })}
    </div>
  )
}



export default Slider;