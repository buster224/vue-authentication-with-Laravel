import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/tailwind.css'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')