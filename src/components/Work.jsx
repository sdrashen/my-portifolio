import React from 'react'
import WebDevelopment from '../assets/computer.jpg'
import MobileDevelopment from '../assets/mobile.jpg'
import { useTranslation } from 'react-i18next'

const Work = () => {

  const { t } = useTranslation();

  return (
    <div name='projetos' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            {t("projects")}
          </p>
          <p className='py-4'>{t("seeProjects")}</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${WebDevelopment})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              <div className='text-center bg-pink-600 py-6 w-full'>
                <a href="https://github.com/sdrashen/01-fundamentos-reactjs-ts" target='_blank' className='text-2xl font-bold text-white tracking-wider'>
                  <button >
                    React Js
                  </button>
                </a>
              </div>
          </div>
          <div style={{backgroundImage: `url(${MobileDevelopment})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              <div className='text-center bg-pink-600 py-6 w-full'>
                <a href="https://github.com/sdrashen/ignite-react-native" target='_blank' className='text-2xl font-bold text-white tracking-wider'>
                  <button >
                    React Native
                  </button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
