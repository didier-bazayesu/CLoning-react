import React from 'react'

function MovieCard({movie}) {
    const baseUrl = "https://image.tmdb.org/t/p/original"
  return (
   
     <>
          <img src={ baseUrl + movie.poster_path} alt="" 
           className='w-[110px] md:w-[200px] 
            rounded-lg hover:border-[3px] border-grey-400
            hover: scale-110'/>
     </>

    
   
  )
}

export default MovieCard