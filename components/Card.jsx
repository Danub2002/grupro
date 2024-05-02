import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Card({icon, name, content,href}) {
  const bgColor = (name == "Hall da Fama"? "bg-yellow-400":"bg-white"); 
  const linkcolor = (name =="Hall da Fama"? "bg-white" : "bg-yellow-400")
  return (
    <div className={`${bgColor} rounded-xl shadow-lg flex items-center flex-col px-10 py-20 gap-7 max-w-96 text-center`}>
      <Image src={icon} className='object-cover'/>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p>{content}</p>

      <Link href= {href} className=''> Saiba Mais →</Link>
    </div>
  )
}

export default Card
