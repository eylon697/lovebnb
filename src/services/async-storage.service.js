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
    const filtered = _filter(entities, filterBy)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filtered)
        }, delay)
    })
}

function _getFilterDates(checkIn, checkOut) {
    if (checkIn && checkOut) return _getDates(checkIn, checkOut)
    if (!checkIn && !checkOut) return []
    else if (checkIn) return [new Date(checkIn)]
    else return [new Date(checkOut)]
}

function _isEmpty(filterDates, stayClosedDates) {
    return filterDates.every(date => {
        return stayClosedDates.every(stayDate => {
            date !== stayDate
        })
    })
}

function _filter(stays, filterBy) {
    var { country, propertyType, guests, checkIn, checkOut, minPrice, maxPrice, beds, bedrooms, bathrooms } = filterBy
    return stays.filter(stay => {
        var filterDates = _getFilterDates(checkIn, checkOut)
        if (
            (country && stay.loc.country !== country) ||
            (propertyType && stay.propertyType !== propertyType) ||
            (guests && stay.guests < guests) ||
            (stay.closedDates && filterDates && !_isEmpty(filterDates, stay.closedDates)) ||
            (beds <= stay.price) ||
            (bedrooms <= stay.bedrooms) ||
            (bathrooms <= stay.bathrooms) ||
            (minPrice <= stay.price && maxPrice >= stay.price)

        )
            return false
        return true
    })

}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function _getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = new Date(startDate)
    stopDate = new Date(stopDate)
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
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