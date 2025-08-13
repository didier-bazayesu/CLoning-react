
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
       try{
         setMovieList(final.data.results)
       
           console.log(final.data.results)

       }catch(error){
          console.log('the error occured ',error)
       }


        
    })
   }
   

    return(<>
        <h2 className="my-10 text-center
         text-3xl font-bold  cursor-pointer
          hover:text-lg  hover:underline
           hover:text-amber-600">
            NAVIGATE THROUGH THE WORLD OF CINEMA

        </h2>
      
      
      <div className="grid grid-cols-3 m-3 gap-15  ">
        {movieList.slice(10).map(elm=> {
          return (<>
          
               <div className="text-center class2 cursor-pointer">
              <img src={Url + elm.backdrop_path} alt="" className="rounded-md"/>
              <br />
              <p className="">{elm.original_title}</p>
              <p className="">{elm.overview}</p>
               </div>
          </>) 
        })}
      </div>
     
    </>)
}

export default MovieList