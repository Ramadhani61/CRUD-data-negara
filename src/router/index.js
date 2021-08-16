import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import chart from '../views/chart.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chart',
    name: 'chart',
    component:chart
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
