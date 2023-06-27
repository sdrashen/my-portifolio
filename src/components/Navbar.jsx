import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons'
import SunIcon from '../assets/SunIcon.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e192f] text-gray-300'>
      <div>
        <img src={SunIcon} alt="Ícone sol" style={{width: '50px'}} />
      </div>
      {/*menu*/}
      <div className='flex '>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburuger*/}
      <div className='hidden'>
        <FaBars />
      </div>
      {/*Mobile menu */}
      <ul className='hidden'>
      <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
      </ul>
      {/*Social icons*/}
    </div>
  )
}

export default Navbar
