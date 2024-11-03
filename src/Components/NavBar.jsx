import React, { useState } from 'react'
import { BsGithub, BsLinkedin,  BsMenuButton, BsX } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { HiMenu } from 'react-icons/hi';
const NavBar = () => {
const[isOpen,setIsOpen]=useState(false);
  const menuOpen=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-12 py-6 text-white backdrop-blur-md md:justify-evenly'>
      <a href='#home' className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>Sreenand</a>
      <ul className='hidden md:flex gap-10'>
           <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Home</li>
           </a>
           <a href='#tech' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Tech</li>
           </a>
           <a href='#project' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Projects</li>
           </a>
           <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Contact</li>
           </a>
      </ul>
      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:red-500 hover:opacity-100'>
            <a href='https://www.linkedin.com/in/sreenand-s-9b2716292/'><BsLinkedin/></a>
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:red-500 hover:opacity-100'>
        <a href='https://github.com/Sreenand76'><BsGithub/></a>
        </li>
        
        </ul>
    
    {isOpen ? (
      <BsX className='block md:hidden text-4xl' onClick={menuOpen} size={24} />
    ):(
      <HiMenu className='block md:hidden text-4xl' onClick={menuOpen} size={24} />
    )}
    {isOpen && (
      <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray bg-black/70 p-12 ${isOpen ? "block" :"hidden"}`}>
         <ul className='flex flex-col gap-8'>
           <a href='#home' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Home</li>
           </a>
           <a href='#tech' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Tech</li>
           </a>
           <a href='#project' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Projects</li>
           </a>
           <a href='#contact' className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
            <li>Contact</li>
           </a>
      </ul>
      <ul className='flex flex-wrap gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:red-500 hover:opacity-100'>
        <a href='https://www.linkedin.com/in/sreenand-s-9b2716292/'><BsLinkedin/></a>
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:red-500 hover:opacity-100'>
           <a href='https://github.com/Sreenand76'><BsGithub/></a>
        </li>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:red-500 hover:opacity-100'>
           
        </li>
        </ul>

      </div>
    )
    }
    </nav>
  )
}

export default NavBar
