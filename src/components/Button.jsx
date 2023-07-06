import React from 'react'



const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='text-sm text-gray-300 button'>
      Voltar ao topo
    </button>
  )
}

export default Button
