import { utilService } from "./util.service.js"

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    queryfiltered
}

function query(entityType, delay = 500) {
    const entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

async function queryfiltered(entityType, filterBy, delay = 500) {
    const entities = JSON.parse(localStorage.getItem(entityType)) || []
    const filtered = _filter(entities, utilService.convertFilter(filterBy))
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filtered)
        }, delay)
    })
}

function _filter(stays, filterBy) {
    var { country, propertyType, guests, dates, price, city, beds, bedrooms, bathrooms } = filterBy
    return stays.filter(stay => {
        return !(
            (country && !new RegExp(country, 'i').test(stay.loc.country)) ||
            (city && !new RegExp(city, 'i').test(stay.loc.city)) ||
            (propertyType && stay.propertyType !== propertyType) ||
            (guests && stay.guests < guests) ||
            (beds && beds > stay.beds) ||
            (bedrooms && bedrooms > stay.bedrooms) ||
            (bathrooms && bathrooms > stay.bathrooms) ||
            (price[0] && price[0] > stay.price) ||
            (price[1] && price[1] < stay.price) ||
            (dates && dates.length && stay.closeDates && stay.closeDates.length && !_isAvailable(dates, stay.closeDates))
        )
    })
}

function _isAvailable(filterDates, stayClosedDates) {
    const res = filterDates.every(date => {
        return stayClosedDates.every(stayDate => {
            date === stayDate
        })
    })
    return res
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            entities.push(...newEntities);
            _save(entityType, entities)
            return entities;
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}