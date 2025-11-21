import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniapluginPersistedstate)

createApp(app).use(pinia).mount('#app')
