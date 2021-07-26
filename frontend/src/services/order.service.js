import { httpService } from './http.service.js'

export const orderService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrder,
    checkAvailability,
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

function save(order, stay, guest) {
    return order._id ?
        httpService.put(`${ITEM_KEY}/`, order) :
        httpService.post(`${ITEM_KEY}/`, _getFullOrder(order, stay, guest))
}

function getEmptyOrder() {
    return {
        dates: [],
        guests: 1,
        status: 'edit'
    }
}

function checkAvailability(dates, stayId) {
    const params = { dates, stayId }
    return httpService.get(`${ITEM_KEY}/availability`, params)
}

function _getFullOrder(order, stay, guest) {
    const { _id, name, imgUrls, price, loc } = stay
    order.stay = {
        _id,
        name,
        imgUrl: imgUrls[0],
        nightPrice: price,
        city: loc.city
    }
    const { host } = stay
    order.host = {
        _id: host._id,
        fullName: host.fullמame,
        imgUrl: host.imgUrl,
    }
    order.guest = {
        _id: guest._id,
        fullName: guest.fullמame,
        imgUrl: guest.imgUrl,
    }
    order.status = 'pending'
    return order
}
// var order = {
//     _id: ''
//     dates,
//     guests,
//     nightPrice: 1,
//     servPrice,
//     created: 0123456789123,
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