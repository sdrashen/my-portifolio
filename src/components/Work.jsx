import React from 'react'
import WorkImg from '../assets/laptop-pen.jpeg'
import { AiFillGithub } from 'react-icons/ai'

const Work = () => {
  return (
    <div name='projetos' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projetos
          </p>
          <p className='mt-6'>Esta seção está em fase de desenvolvimento. Logo, você poderá conferir meu portfólio completo.</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${WorkImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Visite meu Github
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/sdrashen" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <AiFillGithub size={60}/>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
