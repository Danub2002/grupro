"use client"
import { useState } from "react";

export default function Box({title,topics}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = () => {
      console.log(isOpen)
      setIsOpen(!isOpen);
    }
    return (
      
      <div className="border-solid">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          <button className="text-xl font-bold focus:outline-none" onClick={handleIsOpenChange}>{isOpen? "-" : "+"}</button>
        </div>
        
        
        {isOpen &&
          <ul className="mt-2 flex flex-col gap-5">

           {topics.map((topic,index) => (
             <li key= {index}>{topic}</li>
           ))}
         </ul>
 
        }
       
      </div>
    )
}
