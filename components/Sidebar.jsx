"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/logo.svg"
export default function Sidebar() {
	
	const training_sections = ["Treinamento Básico","Treinamento Intermediário", "Treinamento Avançado"]

	
	return (
		<div className='flex flex-col h-screen border-solid border-l border-r px-10 py-10 items-center gap-5'>
			<Image src={logo} width={171} height={50} alt ="logo" />

			<select id="select" className="text-gray-900 text-sm font-bold text-base bg-white rounded-lg block w-full p-2.5 ">
				{training_sections.map((training_section,id) => <option key = {id} value={training_section}>{training_section}</option>)}
			</select>
			
		</div>
	)
}
