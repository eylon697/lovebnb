const ObjectId = require('mongodb').ObjectId

module.exports = {
    getItemToSave,
    buildCriteria,
    isAvailable
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
        created: Date.now(),
        status,
        host,
        loc,
        rateAvg,
        reviews,
    }
}

function buildCriteria(filterBy) {
    var {
        country,
        propertyType,
        guests,
        price,
        city,
        beds,
        bedrooms,
        bathrooms
    } = filterBy

    const criteria = {}
    if (country)
        criteria['loc.country'] = { $regex: country, $options: 'i' }
    if (city)
        criteria['loc.city'] = { $regex: city, $options: 'i' }
    if (propertyType)
        criteria.propertyType = { $eq: propertyType };
    if (guests)
        criteria.guests = { guests: { $lte: guests } };
    if (beds)
        criteria.beds = { beds: { $lte: beds } };
    if (bedrooms)
        criteria.bedrooms = { bedrooms: { $lte: bedrooms } };
    if (bathrooms)
        criteria.bathrooms = { bathrooms: { $lte: bathrooms } };
    if (price && price.length)
        criteria.price = { $gte: price[0], $lte: price[1] };
    console.log(criteria);
    return criteria;
}

function isAvailable(filterDates, closedDates) {
    console.log('filterDates', filterDates);
    console.log('closedDates', closedDates);
    return !filterDates.some(date => {
        return closedDates.some(stayDate => date === stayDate)
    })
}