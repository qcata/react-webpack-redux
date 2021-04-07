import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import { getAppBaseUrl } from './configs/environment'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${getAppBaseUrl()}translations?language={{lng}}`,
    },
    lng: 'en',
    fallbackLng: 'en',
  })

export default i18n
