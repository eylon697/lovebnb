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
        price: 350.0,
        summary: "Fantastic studio apartment with three bedrooms, located in Manhattan",
        propertyType: "House",
        accommodates: 2,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1,
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
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
                imgUrl: require("@/assets/img/app-header/user.png"),
            },
        }, ],
    },
    {
        _id: "102",
        name: "Ribeira Charming Duplex",
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
        baths: 1,
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
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
                imgUrl: require("@/assets/img/app-header/user.png"),
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
        propertyType: "House",
        accommodates: 2,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1,
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
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
                imgUrl: require("@/assets/img/app-header/user.png"),
            },
        }, ],
    },
]

export const stayService = {
    query
}

const STAY_KEY = 'stays'

async function query() {
    const staysInStorage = await storageService.query(STAY_KEY)
    if (!staysInStorage || !staysInStorage.length) {
        storageService.postMany(STAY_KEY, gStays)
        return gStays
    }
    return staysInStorage
}