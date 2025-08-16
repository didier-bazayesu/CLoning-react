
import { useEffect, useState } from "react"
import GlobalApi from "../services/GlobalApi"
import MovieCard from "./MovieCard"



function MovieList({ genreId }){
    let[movieList,setMovieList] = useState([])


    const Url = "https://image.tmdb.org/t/p/original"
  

    useEffect(()=>{
    
      getMovieBySpecificId()

    },[])

   
     const getMovieBySpecificId = () => {
       GlobalApi.getMovieByGenId(genreId).then((resp) => {
         setMovieList(resp.data.results);
         console.log(resp.data.results)
       });


     }

    return(<>

          <div className="flex gap-12 overflow-x-auto scroll-auto
           scrollbar-none">
            {movieList.map((elem,index)=>{
              return <MovieCard movie= {elem} />
            })}
          </div>
        
      </>)
      }

export default MovieList