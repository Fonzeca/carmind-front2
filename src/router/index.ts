import MainView from '@/views/MainView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { mustBeLoggedOut, mustBeLogin } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      component: MainView,
      beforeEnter:[mustBeLogin],
      children:[
        {
          path: 'home',
          name: 'app.home',
          component: () => import('../views/mains/HomeView.vue')
        },
        {
          path: 'gps',
          name: 'app.gps',
          component: () => import('../views/mains/GpsView.vue')
        },
        {
          path: "profile",
          name: "app.profile",
          component: () => import("../views/mains/ProfileView.vue")
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      beforeEnter:[mustBeLoggedOut]
    }
  ]
})

export default router
