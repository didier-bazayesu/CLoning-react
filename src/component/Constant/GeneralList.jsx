import React from 'react'
import MovieList from '../MovieList'

function GeneralList() {

let store = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 10749, name: "Romance" },
  { id: 10402, name: "Music" }
];

  return (
    <div className=''>
     {store.map((element,index) => 

      index <4&& (<div id={element.id} className='p-8 px-8 md:px-16' >
           <h2 className='text-white text-[20px] font-bold mb-5' > {element.name} </h2>
           <MovieList genreId = {element.id}/>
      </div>)
     )}

   
    </div>
  )
}

export default GeneralList