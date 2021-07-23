import Vue from 'vue'
import Vuex from 'vuex'
import { stayStore } from './modules/stay-store.js'
import { orderStore } from './modules/order-store.js'
import { tripStore } from './modules/trip-store.js'
import { userStore } from './modules/user-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stayStore,
    orderStore,
    tripStore,
    userStore

  }
})
