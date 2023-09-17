import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/init.scss'
import "vue-awesome-paginate/dist/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)

router.isReady().then(() => {
  app.mount('#app')
})

import 'bootstrap/dist/js/bootstrap.js'
