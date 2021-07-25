const ObjectId = require('mongodb').ObjectId

module.exports = {
    getItemToSave
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