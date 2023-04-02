import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/public/Layout.vue'
import HomeView from '@/views/public/HomeView.vue'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import ResetPassword from '@/components/ResetPassword.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/forgot-password',
          name: 'forgotPassword',
          component: ForgotPassword
        },
        {
          path: '/password-reset/:token',
          name: 'resetPassword',
          component: ResetPassword
        },
      ],
    }
  ]
})

export default router