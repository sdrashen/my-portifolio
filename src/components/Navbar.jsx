import React from 'react'
import { FaBars, FaTimes } from 'react-icons'
import SunIcon from '../assets/SunIcon.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e192f] text-gray-300'>
      <div>
        <img src={SunIcon} alt="Ícone sol" style={{width: '50px'}} />
      </div>
      /*menu*/
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
