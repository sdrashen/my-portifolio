import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin } from 'react-icons/ai'
// import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import SunIcon from '../assets/SunIcon.png'
import { Link } from 'react-scroll'
import { LanguageSwitcher } from './LanguageSwitcher/index'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e192f] text-gray-300'>
      <div className='flex items-center justify-center'>
        <img src={SunIcon} alt="Ícone sol" style={{width: '50px'}} />
        <p className='text-xs ml-2'>English version coming soon!</p>
      </div>

      {/*Menu*/}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='sobre' smooth={true} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to='experiência' smooth={true} duration={500}>
              Experiência
            </Link>
          </li>
          <li>
            <Link to='projetos' smooth={true} duration={500}>
              Projetos
            </Link>
          </li>
        </ul>

      {/*Hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/*Mobile menu */}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 h-screen w-full bg-[#0e192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Sobre</li>
        <li className='py-6 text-4xl'>Experiência</li>
        <li className='py-6 text-4xl'>Projetos</li>
      </ul>
      
      {/*Social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/sabrinadrashen/' target='-blank'>
              Linkedin <AiFillLinkedin size={40}/>
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Github <AiFillGithub size={40}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Email <HiOutlineMail size={40}/>
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.canva.com/design/DAEKHPisvYQ/sJAlSVLk5EHW7d4LeUuVrQ/view?mode=prototype' target='_blank'>
              Currículo <BsFillPersonLinesFill size={40}/>
            </a>
          </li>
        </ul>
      </div>
      <LanguageSwitcher />
    </div>
  )
}

export default Navbar
