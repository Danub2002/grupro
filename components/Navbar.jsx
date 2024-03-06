import React from 'react'

function Navbar() {
  return (
    <ul className='flex items-center gap-10'>
      <li className='bg-yellow-400 p-2 mx-w-sm mx-auto rounded font-bold'>Home</li>
      <li>Sobre</li>
      <li>Histórico</li>
      <li>Treinamento</li>
      <li>Contato</li>
    </ul>
  )
}

export default Navbar
