const ObjectId = require('mongodb').ObjectId

module.exports = {
    getItemToSave
}

function getItemToSave(item) {
    const {
        _id,
        name,
        imgUrls,
        price,
        summary,
        propertyType,
        guests,
        bedrooms,
        beds,
        bathrooms,
        closeDates,
        amenities,
        host,
        loc,
        rateAvg,
        reviews,
    } = item

    return {
        _id: ObjectId(_id),
        name,
        imgUrls,
        price,
        summary,
        propertyType,
        guests,
        bedrooms,
        beds,
        bathrooms,
        closeDates,
        amenities,
        host,
        loc,
        rateAvg,
        reviews,
    }
}