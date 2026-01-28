import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Atlalli',
    access_granted: 'ACCESS GRANTED',
    videos: 'LATEST VIDEOS'
  },
  es: {
    welcome: 'Atlalli',
    access_granted: 'ACCESO CONCEDIDO',
    videos: 'ÚLTIMOS VIDEOS'
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  messages,
})

export default i18n