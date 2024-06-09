import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import AdminDoorsView from '../views/AdminDoorsView.vue'
import AdminSettingsView from '../views/AdminSettingsView.vue'
import Logout from '../components/auth/Logout.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserView
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {
          path: '',
          name: 'admin',
          component: AdminDoorsView
        },
        {
          path: 'doors',
          name: 'doors',
          component: AdminDoorsView
        },
        {
          path: 'settings',
          name: 'settings',
          component: AdminSettingsView
        },
        {
          path: 'logout',
          name: 'logout',
          component: Logout
        }
      ]
    }
  ]
})

export default router
