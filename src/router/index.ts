import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
     {
       path: '/',
       name: 'home',
       component: () => import('../views/pages/Home.vue')
     },
     {
      path: '/design',
      name: 'design',
      component: () => import('../views/pages/Design.vue')
    },
    {
      path: '/web-ux',
      name: 'web-ux',
      component: () => import('../views/pages/WebUx.vue')
    },
  ]
})

export default router
