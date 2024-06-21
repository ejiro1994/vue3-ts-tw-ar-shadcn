import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/index.css'

import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

import App from './App.vue'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
