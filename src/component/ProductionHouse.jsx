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
    <div >
      {allProduction.map(element=> {

        return  <div id={element.id} className='w-full'>
               <img src={element.image} alt="" />
           </div>
      })}
    </div>
  )
}

export default ProductionHouse