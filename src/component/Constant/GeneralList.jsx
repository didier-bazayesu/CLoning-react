import React from 'react'
import MovieList from '../MovieList'

function GeneralList() {


  let store = [

{id: 1 , name : 'Action' },
{id:2 ,name : 'Adventure'},
{id:3 , name :'Animation'},
{id:4 , name : 'Codmedy'},
{id:5 , name : 'Romancy '},
{id: 34, name :"Music"}


  ]
  return (
    <div className=''>
     {store.map((element,index) => 

      index <4&& (<div id={element.id} className='p-8 px-8 md:px-16' >
           <h2 className='text-white text-[20px] font-bold'> {element.name}</h2>
           <MovieList genreId = {element.id}/>
      </div>)
     )}

   
    </div>
  )
}

export default GeneralList