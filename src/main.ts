import './assets/main.css'

import './index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3TouchEvents from 'vue3-touch-events'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3TouchEvents)
app.use(router)

app.mount('#app')
