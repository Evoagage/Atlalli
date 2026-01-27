import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Atlalli',
    access_granted: 'ACCESS GRANTED'
  },
  es: {
    welcome: 'Atlalli',
    access_granted: 'ACCESO CONCEDIDO'
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  messages,
})

export default i18n