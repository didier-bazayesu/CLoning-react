import React, { useState } from 'react';
import log from '../assets/icons8-disney.png'

import { HiHome, HiStar, HiTv, HiMagnifyingGlass, HiPlayCircle, HiPlus } from 'react-icons/hi2';
import { HiOutlineDotsVertical,HiDotsVertical } from 'react-icons/hi';
import { MdPeopleAlt } from "react-icons/md";




import HeaderItem from './headerItem';

function Home() {

  const[toggle,setoggle] = useState(false)



  const menu = [
    { name: 'Home', icon: HiHome },
    { name: 'Search', icon: HiMagnifyingGlass },
    { name: 'Watch list', icon: HiPlus },
    { name: 'Movies', icon: HiPlayCircle },
    { name: 'Series', icon: HiTv },
  
  ];

  return (
 <div>
    < div className='bg-black flex justify-between' >

        <div  className='flex gap-3'> 

            <img src={log} alt=""  className='bg-black w-[80px]' />

            <div className='flex gap-[40px'>
              <div className="hidden md:flex gap-[40px] p-2  items-center text-white  mt-6 ">
                  {menu.map((elem, index) => (
                  <HeaderItem key={index} Icon={elem.icon} name={elem.name} Mid= {MdPeopleAlt} />
                  ))}

              </div>

                <div className="flex  md:hidden gap-[40px] p-2  items-center text-white  mt-6 ">
                  {menu.map((elem, index) =>index<3&& (
                  <HeaderItem key={index} Icon={elem.icon} name={''} Mid= {MdPeopleAlt} />
                  ))}

                 <div   onClick={()=> setoggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />

                  {toggle ? <div class="absolute pt-3 bg-black border-[1px] p-3 mt-3 border-amber-700"> 
                        {menu.map((elem, index) =>index>2&& (
                      <HeaderItem key={index} Icon={elem.icon} name={elem.name} Mid= {MdPeopleAlt} />
                      ))}
                    </div>   : null }

                    </div>
                
                </div>




            </div>


        </div>


      <MdPeopleAlt className='text-3xl text-yellow-400 mt-3 cursor-pointer'/>
    </div>

   

    </div>

    
  );
}

export default Home;
