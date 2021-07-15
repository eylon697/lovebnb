import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home-page.vue'
import stayApp from '@/views/stay-app.vue'
import stayDetails from '@/views/stay-details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   
    component: HomePage
  },
  {
    path: '/stay',
    component: stayApp
  },
  {
    path: '/stay/:stayId',
    component: stayDetails
  },
  
]

const router = new VueRouter({
  routes
})

export default router
