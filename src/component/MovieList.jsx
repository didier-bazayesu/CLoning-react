
import { useEffect, useState } from "react"
import GlobalApi from "../services/GlobalApi"



function MovieList(){
    let[movieList,setMovieList] = useState([])


    const Url = "https://image.tmdb.org/t/p/original"
  

    useEffect(()=>{
    
         listMovie()

    },[])

   const listMovie = () =>  {

    GlobalApi.fecthGlobalApi.then(final=>{
        setMovieList(final.data.response)
        
    })
   }
  

    return(<>
    
      <div>
         {movieList.map(elem => {

         return   <img src={url+elem.backdrop_path}alt=""  />
         })}
      </div>
    </>)
}

export default MovieList