import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home-page.vue'
import stayApp from '@/views/stay-app.vue'
import stayDetails from '@/views/stay-details.vue'
import stayReviews from '@/views/stay-reviews.vue'
import trips from '@/views/trips.vue'
import deshboard from '@/views/deshboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/stay',
        name: 'stayApp',
        component: stayApp
    },
    {
        path: '/stay/:stayId/reviews',
        name: 'stayReviews',
        component: stayReviews
    },
    {
        path: '/stay/:stayId',
        name: 'stayDetails',
        component: stayDetails
    },
    {
        path: '/trips/:userId',
        name: 'trips',
        component: trips,
      },
    {
        path: '/deshboard/:userId',
        name: 'deshboard',
        component: deshboard,
      },

]

const router = new VueRouter({
    routes
})

export default router