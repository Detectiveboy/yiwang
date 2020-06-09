import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'order',
        component: () => import('../components/Order.vue')
      },
      {
        path: 'user',
        component: () => import('../components/User.vue')
      },
      {
        path: 'shop',
        component: () => import('../components/Shop.vue')
      },
      {
        path: 'news',
        component: () => import('../components/News.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
