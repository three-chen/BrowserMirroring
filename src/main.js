import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'
import { createApp } from 'vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
