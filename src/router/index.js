import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: import('../views/Home.vue')
  },
  {
    path: '/about',
    component: import('../views/About.vue')
  },
  {
    path: '/contact',
    component: import('../views/Contact.vue')
  }, {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router