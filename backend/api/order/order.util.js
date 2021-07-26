const ObjectId = require('mongodb').ObjectId

module.exports = {
    getItemToSave,
    getHostMiniOrder,
    getGuestMiniOrder,
}

function getHostMiniOrder(order) {
    order = JSON.parse(JSON.stringify(order))
    delete order.host
    return order
}

function getGuestMiniOrder(order) {
    order = JSON.parse(JSON.stringify(order))
    delete order.guest
    return order
}

function getItemToSave(item) {
    const {
        _id,
        dates,
        guests,
        nightPrice,
        nightsPrice,
        servPrice,
        totalPrice,
        created,
        coinFormater,
        stay,
        host,
        guest,
    } = item

    return {
        _id: ObjectId(_id),
        dates,
        guests,
        nightPrice,
        nightsPrice,
        servPrice,
        totalPrice,
        created: Date.now(),
        coinFormater,
        stay,
        host,
        guest,
    }
}