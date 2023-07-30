import MainView from '@/views/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { mustBeLogin } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      beforeEnter:[mustBeLogin],
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('../views/mains/HomeView.vue')
        },
        {
          path: '/gps',
          name: 'gps',
          component: () => import('../views/mains/GpsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
