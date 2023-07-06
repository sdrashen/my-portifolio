import React from 'react';
import { useTranslation } from 'react-i18next'
import br from './assets/br.svg'
import us from './assets/us.svg'
import es from './assets/es.svg'

const languageOptions = [
  {
    name: 'Português',
    value: 'ptBR',
    flag: br
  },

  {
    name: 'English',
    value: 'en',
    flag: us
  },

  {
    name: 'Español',
    value: 'esp',
    flag: es
  }
]

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <div name='language-switcher'  className='flex items-center'>
      {languageOptions.map(languageOption => (
        <button className='flex flex-col items-center ml-4'
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value)
          }}>
          <img src={languageOption.flag} alt={languageOption.name} />
          <span className='text-gray-300 text-sm'>{languageOption.name}</span>
        </button>
      ))}
    </div>
  )
}