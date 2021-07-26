import { utilService } from './util.service.js';
import { httpService } from './http.service.js';

const ITEM_KEY = 'stay'

export const stayService = {
    query,
    getOne,
    saveOne,
    removeOne,
    getCountries,
    getMainFilter,
    getEmptyReview,
}

function query(filterBy) {
    return httpService.get(`${ITEM_KEY}`, { filterBy })
}

function getOne(_id) {
    return httpService.get(`${ITEM_KEY}/${_id}`)
}

function saveOne(item) {
    return item._id ?
        httpService.put(`${ITEM_KEY}`, item) :
        httpService.post(`${ITEM_KEY}`, item)
}

function removeOne(_id) {
    return httpService.delete(`${ITEM_KEY}/${_id}`)
}

function getCountries(filterTxt) {
    console.log(filterTxt);
}

function getMainFilter(filterBy) {
    if (filterBy.country) return "country";
    else if (filterBy.propertyType) return "propertyType";
    else if (filterBy.checkIn) return "checkIn";
    else if (filterBy.guests) return "guests";
    return ''
}

function getEmptyReview() {
    return {
        id: utilService.makeId(),
        txt: '',
        rate: null,
        by: { imgUrl: '', fullName: '' },
        at: Date.now()
    }
}