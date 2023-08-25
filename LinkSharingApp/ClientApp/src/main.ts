import './index.css'

import { createApp } from 'vue'
import { createPinia } from "pinia"

import App from './App.vue'
import router from "../router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import iconLib from '@/modules/fontawesome/iconLib'
import brandLib from '@/modules/fontawesome/brandLib'

library.add(...iconLib)
library.add(...brandLib)

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')