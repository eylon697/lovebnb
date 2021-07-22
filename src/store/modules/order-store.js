import { orderService } from '../../services/order.service.js'
// import { userService } from '../../services/user.service.js'

export const orderStore = {

    strict: true,
    state: {
        orders: [],

    },
    getters: {
        orders(state) {
            return state.orders
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(o => o._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        addOrderToUser(state, { user, order }) {
            user.orders.push(order)
        },
    },
    actions: {
        async loadOrders({ commit }) {
            try {
                const orders = await orderService.query()
                commit({ type: 'setOrders', orders })
                return orders
            } catch (err) {
                console.log('Failed to load orders', err)
                throw err
            }
        },
        async saveOrder({ commit }, { order, stay }) {
            console.log('order coming to store', 'order', order, 'stay', stay);
            try {
                // const type = order._id ? 'updateOrder' : 'addOrder'
                // const user = rootGetters.loggedinUser// getter from userStore-TODO:inner rootGetters next to commit ^
                const miniStay = {
                    _id: stay._id,
                    name: stay.name,
                    price: stay.price,
                    country: stay.loc.address,
                }
                order.stay = miniStay
                order.host = stay.host
                const savedOrder = await orderService.save(order)
                console.log(' from store the service return', savedOrder);
                commit('addOrder', { order: savedOrder })

                return savedOrder
            } catch (err) {
                console.log('Failed to save order', err)
                throw err
            }
        }



    }
}