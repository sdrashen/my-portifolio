import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose  } from 'react-icons/ai'
import SunIcon from '../assets/SunIcon.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e192f] text-gray-300'>
      <div>
        <img src={SunIcon} alt="Ícone sol" style={{width: '50px'}} />
      </div>

      {/*Menu*/}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/*Hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/*Mobile menu */}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0e192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      
      {/*Social icons*/}
      <div className=''></div>
    </div>
  )
}

export default Navbar
