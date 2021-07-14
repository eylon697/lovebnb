import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/home-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  
]

const router = new VueRouter({
  routes
})

export default router
