import React from 'react'
import logs from '../assets/icons8-disney.png'
import marvel from '../assets/marve.png'
import national from '../assets/nationalgeographical.png'
import pixar from '../assets/pixar.png'
import starwar from '../assets/starwar.png'

import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video6 from '../assets/video6.mp4'

// All production data
let allProduction = [
  {
    name: 'Disney image',
    id: 1,
    video: video1,
    image: logs
  },
  {
    name: 'Pixar',
    video: video2,
    id: 2,
    image: pixar
  },
  {
    name: 'Marvel studio',
    video: video3,
    id: 3,
    image: marvel
  },
  {
    name: 'Star war',
    video: video4,
    id: 4,
    image: starwar
  },
  {
    name: 'National geographical',
    video: video6,
    id: 5,
    image: national
  }
]

function ProductionHouse() {
  return (
    <div className='flex flex-row flex-wrap gap-10 mt-10 justify-center border-2
      border-amber-500 p-5 m-10 rounded-lg'>

      {allProduction.map(elem => (
        <div
          key={elem.id}
          className='relative w-40 h-40 group cursor-pointer 
          border-2 border-gray-600 rounded-lg overflow-hidden'>

          {/* Video underneath (visible only on hover) */}
          <video
            src={elem.video}
            autoPlay
            loop
            muted
            playsInline
            className='absolute top-0 left-0 w-full h-full object-cover z-0 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          />

         
          <img
            src={elem.image}
            alt={elem.name}
            className='absolute top-0 left-0 w-full h-full object-cover z-10 
            transition-all duration-300 group-hover:opacity-0 group-hover:scale-95'
          />

          
          
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
