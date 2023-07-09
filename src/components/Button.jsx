import React from 'react'

import { useTranslation } from 'react-i18next'

const Button = ({onClick}) => {

  const { t } = useTranslation();

  return (
    <button onClick={onClick} className='text-sm text-gray-300 button'>
      {t("buttonToTop")}
    </button>
  )
}

export default Button
