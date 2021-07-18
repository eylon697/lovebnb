import { storageService } from './async-storage.service.js'

const gStays = [{
        _id: "101",
        name: "Ribeira Charming Duplex",
        imgUrls: [{
                url: require(`../assets/img/stays/101/1.png`),
            },
            {
                url: require(`../assets/img/stays/101/2.png`),
            },
            {
                url: require(`../assets/img/stays/101/3.png`),
            },
            {
                url: require(`../assets/img/stays/101/4.png`),
            },
            {
                url: require(`../assets/img/stays/101/5.png`),
            },
        ],
        price: 352.0,
        summary: "Fantastic studio apartment with three bedrooms, located in Manhattan",
        propertyType: "House",
        accommodates: 2,
        guests: 4,
        bedrooms: 3,
        beds: 4,
        bathrooms: 1,
        closedDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "David plicauco", imgUrl: require('../assets/img/user/1.png') },
        loc: {
            country: "New York",
            countryCode: "NY",
            address: "Manhattan, New York",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.95,
        reviews: [{
            id: "asd45",
            txt: "Very helpful hosts. Cooked traditional",
            rate: 4,
            at: 1626430025442,
            by: {
                _id: "u102",
                fullname: "Nir Lee",
                imgUrl: require("../assets/img/user/1.png"),
            },
        }, ],
    },
    {
        _id: "102",
        name: "Lovley place",
        imgUrls: [{
                url: require(`../assets/img/stays/102/1.png`),
            },
            {
                url: require(`../assets/img/stays/102/2.png`),
            },
            {
                url: require(`../assets/img/stays/102/3.png`),
            },
            {
                url: require(`../assets/img/stays/102/4.png`),
            },
            {
                url: require(`../assets/img/stays/102/5.png`),
            },
        ],
        price: 350.0,
        summary: "Fantastic studio apartment with three bedrooms, located in Manhattan",
        propertyType: "House",
        accommodates: 2,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        closedDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: require('../assets/img/user/1.png') },
        loc: {
            country: "New York",
            countryCode: "NY",
            address: "Manhattan, New York",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.95,
        reviews: [{
            id: "asd45",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            at: 1626430025442,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: require("../assets/img/user/1.png"),
            },
        }, ],
    },
    {
        _id: "103",
        name: "Ribeira Charming Duplex",
        imgUrls: [{
                url: require(`../assets/img/stays/103/1.png`),
            },
            {
                url: require(`../assets/img/stays/103/2.png`),
            },
            {
                url: require(`../assets/img/stays/103/3.png`),
            },
            {
                url: require(`../assets/img/stays/103/4.png`),
            },
            {
                url: require(`../assets/img/stays/103/5.png`),
            },
        ],
        price: 350.0,
        summary: "Fantastic studio apartment with three bedrooms, located in Manhattan",
        propertyType: "miki",
        accommodates: 2,
        guests: 4,
        bedrooms: 2,

        beds: 2,
        bathrooms: 1,
        closedDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: require('../assets/img/user/1.png') },
        loc: {
            country: "Israel",
            countryCode: "NY",
            address: "Manhattan, New York",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.95,
        reviews: [{
            id: "asd45",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            at: 1626430025442,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: require("../assets/img/user/1.png"),
            },
        }, ],
    },
]

export const stayService = {
    query,
    getById,
    getCountries
}

const STAY_KEY = 'stays'

async function query(filterBy) {
    const staysInStorage = await storageService.queryfiltered(STAY_KEY, filterBy)
    if (!staysInStorage || !staysInStorage.length) {
        storageService.postMany(STAY_KEY, gStays)
        return gStays
    }
    return staysInStorage
}

async function getById(stayId) {
    return await storageService.get(STAY_KEY, stayId)
}

async function getCountries(filterTxt) {
    return await storageService.get(STAY_KEY, filterTxt)
}