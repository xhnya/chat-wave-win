import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 不需要指定 .js 或 .ts

createApp(App)
  .use(router) // 使用路由
  .mount('#app')
