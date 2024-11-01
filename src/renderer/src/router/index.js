import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/index.vue' // 假设你有一个 About 组件

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
