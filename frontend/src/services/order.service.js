import { httpService } from './http.service.js'




export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrder,
    checkAvailability,
    placeOrder
}
const BASE_URL = 'order/'

// async function query(filterBy) { TODO:REMOVE!!
//     const staysInStorage = await storageService.queryfiltered(ORDER_KEY, filterBy)
//     if (!staysInStorage || !staysInStorage.length) {
//         storageService.postMany(STAY_KEY, gStays)
//         return gStays
//     }
//     return staysInStorage
// }

// async function query() {  TODO:REMOVE!!
//     const ordersInStorage = await storageService.query(ORDER_KEY)
//     if (!ordersInStorage || !ordersInStorage.length) {
//         storageService.postMany(ORDER_KEY, gOrders)
//         return gOrders
//     }
//     return ordersInStorage
// }

async function query() {
	return await httpService.get(BASE_URL)
}


function getById(orderId) {
    return httpService.get(`${BASE_URL}${orderId}`)
}

function remove(orderId) {
    return httpService.delete(`${BASE_URL}${orderId}`)
}

function save(order) {
    console.log(order,'from order service');
    return httpService.post(BASE_URL, order)
}

function getEmptyOrder() {
    return {
        dates: [],
        guests: 1,
        status: 'edit'
    }
}

function checkAvailability() {
    // return Promise.reject()
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(new Error)
            }, 2000)
        })
        // console.log('order service - checkAvailability');
}

function placeOrder() {
    console.log('order service - placeOrder');
}

// var order = {
//     _id: ''
//     dates,
//     guests,
//     nightPrice: this.stay.price,
//     nightsPrice,
//     servPrice,
//     totalPrice,
//     created: 0123456789123,
//     coinFormater,
//     stay: {
//         _id: this.stay._id,
//         name: this.stay.name,
//         imgUrl: this.stay.imgUrls[0],
//     },
//     host: {
//         _id: this.stay.host._id,
//         fullName: this.stay.host.fullName,
//         imgUrl: this.stay.host.imgUrl,
//     },
//     guest: {
//         _id: "1",
//         fullName: "Muki Kuki",
//         imgUrl: this.stay.host.imgUrl,
//     },
// };