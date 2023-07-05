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
    <div className='Language-switcher'>
      <span>{t('selectYourLanguage')}</span>

      {languageOptions.map(languageOption => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value)
          }}>
          <img src={languageOption.flag} alt={languageOption.name} />
          <span>{languageOption.name}</span>
        </button>
      ))}
    </div>
  )
}