import React from 'react'
import Navbar from './Navbar'
import logo from "../public/logo.svg"

import Image from 'next/image'
function Header() {
  return (
    <div className='header flex justify-between p-6 border-b-2 border-black-200 pl-12 px-px'>
      <Image src={logo} width={171} height={50} alt ="logo" />
      <Navbar />
    </div>
  )
}

export default Header
