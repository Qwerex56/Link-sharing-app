import './index.css'

import { createApp } from 'vue'
import { createPinia } from "pinia"

import App from './App.vue'
import router from "../router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createI18n } from 'vue-i18n'

import iconLib from '@/modules/fontawesome/iconLib'
import brandLib from '@/modules/fontawesome/brandLib'
// import messages from '@/Locales/localesMain'

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

// 2. Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: "ja", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

library.add(...iconLib)
library.add(...brandLib)

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')