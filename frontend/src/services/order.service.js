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
const ITEM_KEY = 'order'

async function query(filterBy) {
    return await httpService.get(`${ITEM_KEY}/`, filterBy)
}

function getById(_id) {
    return httpService.get(`${ITEM_KEY}/${_id}`)
}

function remove(_id) {
    return httpService.delete(`${ITEM_KEY}/${_id}`)
}

function save(item) {
    return item._id ?
        httpService.put(`${ITEM_KEY}/`, { item, status }) :
        httpService.post(`${ITEM_KEY}/`, { item, status })
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