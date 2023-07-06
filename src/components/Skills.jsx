import React from 'react'

import ReactIcon from '../assets/react-icon.png'
import StyledComponents from '../assets/styled-components-icon.png'
import Tailwind from '../assets/tailwind_icon.png'
import Typescript from '../assets/typescript-icon.png'
import Expo from '../assets/expo-icon.png'
import NextJS from '../assets/nextjs-icon.png'
import { useTranslation } from 'react-i18next'

const Skills = () => {

  const { t } = useTranslation();

  return (
    <div name='experiência' className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{t("experience")}</p>
          <p className='py-4'>{t("expText")}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactIcon} alt="React Ícone" />
            <p className='my-4'>React JS & Native</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={StyledComponents} alt="Styled Component Ícone" className='w-20 mx-auto'/>
            <p className='my-4'>Styled Components</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Tailwind} alt="Tailwind Ícone" className='w-20 mx-auto'/>
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Typescript} alt="Typescript Ícone" className='w-20 mx-auto'/>
            <p className='my-4'>Typescript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Expo} alt="Expo Ícone" className='w-20 mx-auto'/>
            <p className='my-4'>Expo</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
            <img src={NextJS} alt="Next Js Ícone" className='w-20 h-20 mx-auto'/>
            <p className='my-4'>Next Js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
