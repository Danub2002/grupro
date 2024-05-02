"use client"
import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [open,setOpen] = useState(false);

  const handleMenuChange = () =>{
    setOpen((prev)=> !prev);
  }
  return (
    <>
      <ul className='hidden md:block md:flex items-center gap-10'>
        <li className='bg-yellow-400 p-2 mx-w-sm mx-auto rounded font-bold'>Home</li>
        <li>Sobre</li>
        <li>Histórico</li>
        <li>Treinamento</li>
        <li>Contato</li>
      </ul> 
      
      <div className='-mr-2 flex md:hidden'>
        {open? (
            <div className='md:hidden items-center gap-10' >
              <ul className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'> 
                <li className='bg-yellow-400 p-2 mx-w-sm mx-auto rounded font-bold'>Home</li>
                <li>Sobre</li>
                <li>Histórico</li>
                <li>Treinamento</li>
                <li>Contato</li>
              </ul>
            </div>
          ): null}
        <button type = "button" onClick={handleMenuChange} className='inline-flex items-center justify-center p-2 rounded-md'>
          <span className='sr-only'>Open Main Menu</span>
          {open? <FaTimes />: <FaBars />}
        </button>

      </div>
    </>
  )
}

export default Navbar
