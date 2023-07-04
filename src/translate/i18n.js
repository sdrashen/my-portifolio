import i18next from "i18next";
import LanguageDetectorModule from "i18next";
import { messages } from "./languages"

i18next
  .use(LanguageDetectorModule)
  .init({
    debug: false,
    defaultNS: ['translations'],
    fallbacklng: 'pt',
    ns: ['translations'],
    resources: messages
  })

export { i18n }