import React from 'react';
import { MdPeopleAlt } from 'react-icons/md';
function HeaderItem({ Icon, name,Mid }) {
  return (
    <>
    <div className="flex  items-center cursor-pointer gap-3 hover:underline ">
      

      <Icon className=" text-2xl" />
      <h2 className=" md:block text-[15px]">{name}</h2>
      
        
    </div>
     


   

    </>
    
  );
}

export default HeaderItem;
