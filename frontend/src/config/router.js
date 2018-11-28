import Vue from 'vue'
import Router from 'vue-router'
import MeerIndex from '@/spa/MeerIndex.vue'
import MeerSignin from '@/spa/auth/MeerSignin.vue'
import MeerSignup from '@/spa/auth/MeerSignup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: MeerIndex
    },
    {
      path: '/signin',
      name: 'signin',
      component: MeerSignin
    },
    {
      path: '/signup',
      name: 'signup',
      component: MeerSignup
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
