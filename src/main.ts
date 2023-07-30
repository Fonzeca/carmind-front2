import './assets/main.css'

import './index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3TouchEvents from 'vue3-touch-events'

import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3TouchEvents)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBksBzP29Z651LUCwmF0U7bSp7U6Z9IIuI'
    // language: 'de',
  }
})

app.use(router)

app.mount('#app')
