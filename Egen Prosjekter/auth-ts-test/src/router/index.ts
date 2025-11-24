import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/dashboard', component: () => import('../views/DashboardView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router