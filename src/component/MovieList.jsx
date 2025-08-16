
import { useEffect, useState } from "react"
import GlobalApi from "../services/GlobalApi"



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

        
        
      </>)
      }

export default MovieList