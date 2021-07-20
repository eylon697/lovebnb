// import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'

const gOrders = [
    {
        _id: 'o100',
        _hostId: 'u101',
        createdAt: 1626734627736,
        buyer: {
            _id: 'u101',
            fullname: 'User 1',
            imgUrl: 'imgs/user1.jpg',
        },
        totalPrice: 160,
        startDate: 162818371828,
        endDate: 162829321938,
        guests: 2,
        stay: {
            _id: '101',
            name: 'Junior King size suite',
            price: 138.0,
        },
        status: 'pending',
    },
]

// const BASR_URL='/..'TODO: inner url

export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrder,
}
const ORDER_KEY = 'orders'

// async function query(filterBy) {
//     const staysInStorage = await storageService.queryfiltered(ORDER_KEY, filterBy)
//     if (!staysInStorage || !staysInStorage.length) {
//         storageService.postMany(STAY_KEY, gStays)
//         return gStays
//     }
//     return staysInStorage
// }

async function query() {
    const ordersInStorage = await storageService.query(ORDER_KEY)
    if (!ordersInStorage || !ordersInStorage.length) {
        storageService.postMany(ORDER_KEY, gOrders)
        return gOrders
    }
    return ordersInStorage
}


function getById(orderId) {
    // return httpService.get(`${BASE_URL}${orderId}`)
    return storageService.get(ORDER_KEY, orderId)
}

function remove(orderId) {
    // return httpService.delete(`${BASE_URL}${orderId}`)
    return storageService.remove(ORDER_KEY, orderId)

}

function save(order) {
    console.log('from service', order);
    return storageService.post(ORDER_KEY, order);
    // if (order._id) {
    // 	return httpService.put(`${BASE_URL}${order._id}`, order)
    // } else {
    // 	return httpService.post(BASE_URL, order)
    // }
}


function getEmptyOrder() {
    return {
        startDate: '',
        endDate: '',
        total: null,
        guests: null,
    }

}

