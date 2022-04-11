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
       component: () => import('../pages/home.vue')
     },
     {
      path: '/design',
      name: 'design',
      component: () => import('../pages/design.vue')
    },
  ]
})

export default router
