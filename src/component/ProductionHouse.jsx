import React from 'react'
 import { useState } from 'react'
import logs from '../assets/icons8-disney.png'
import marvel from '../assets/marve.png'
import national from '../assets/nationalgeographical.png'
import pixar from '../assets/pixar.png'
import starwar from '../assets/starwar.png'
import { all } from 'axios'





let allProduction = [

  {name : 'Disney image ',
    id: 1,
    video : '',
    image : logs
  },
    {
        name: 'Pixar ',
        video: '',
        id:2,
        image: pixar
    },
    {
        name: 'Marvel studio ',
        video: '',
        id:3,
        image: marvel
    },
    {
        name: 'Star war ',
        video: '',
        id:4,
        image:starwar 
    },
    {
        name: 'National geographical ',
        video: '',
        id: 5,
        image: national
    }



]

function ProductionHouse() {
  return (
    <>
 
    <div className='flex flex-row gap-10  mt-10  justify-center border-[2px]
     border-amber-500 p-5 m-10 rounded-lg'>
      {allProduction.map(elem => {

      return  <div className='border-[2px] border-gray-600 rounded-lg cursor-pointer hover:transition-all ease-in'>
          <img src={elem.image} className='w-40 bg-green-50'  />
          <p className='text-center'>{elem.name}</p>
        </div>
      })}
    </div>
    
    
    </>
  )
}

export default ProductionHouse