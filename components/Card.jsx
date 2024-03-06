import React from 'react'
import Image from 'next/image';

function Card({icon, name, content}) {
  const bgColor = (name == "Hall da Fama"? "bg-yellow-400":"bg-white");  
  return (
    <div className={`${bgColor} rounded-xl shadow-lg flex items-center flex-col p-8 gap-5`}>
      <Image src={icon} objectFit="cover"/>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card
