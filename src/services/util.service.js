export const utilService = {
    objToUrl,
    getformatDate,
    toShortFormat,
    convertFilter,
    getTitle,
    makeId
}

function objToUrl(obj) {
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + obj[key];
    }
    return str
}

function getformatDate(mDate) {
    if (_isToday(mDate)) {
        const hours = new Date(mDate).getHours()
        const minutes = new Date(mDate).getMinutes()
        const hoursStr = hours < 10 ? '0' + hours : '' + hours
        const minutesStr = minutes < 10 ? '0' + minutes : '' + minutes
        return `${hoursStr}:${minutesStr}`
    } else {
        const dateStr = '' + new Date(mDate)
        const firstSepIdx = dateStr.indexOf(' ')
        const secSepIdx = dateStr.indexOf(' ', firstSepIdx + 1)
        const trdSepIdx = dateStr.indexOf(' ', secSepIdx + 1)
        return dateStr.substring(firstSepIdx, trdSepIdx)
    }
}

function _isToday(someDate) {
    const today = new Date()
    someDate = new Date(someDate)
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}

function toShortFormat(date) {
    let monthNames = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    return `${monthName} ${day}`;
}

function convertFilter(filterBy) {
    console.log(filterBy);
    var { mainFilter, country, propertyType, guests, dates, price, city, beds, bedrooms, bathrooms, amenities } = filterBy
    if (price && typeof price === 'string')
        price = [+price.substring(0, price.indexOf(',')), +price.substring(price.indexOf(',') + 1, price.length)]
    if (dates && typeof dates === 'string')
        dates = dates ? dates.split(',').map(date => new Date(date)) : []
    if (amenities && typeof amenities === 'string')
        amenities = amenities ? amenities.split(',').map(date => new Date(date)) : []
    return {
        mainFilter: mainFilter || '',
        country: country || '',
        city: city || '',
        propertyType: propertyType || '',
        guests: +guests || 0,
        beds: +beds || 0,
        bedrooms: +bedrooms || 0,
        bathrooms: +bathrooms || 0,
        dates: dates || [],
        amenities: amenities || [],
        price: price || [0, 1500],
    }
}

function getTitle(filterBy) {
    filterBy = convertFilter(filterBy)
    switch (filterBy.mainFilter) {
        case "country":
            return "Stays in " + filterBy.country;
        case "city":
            return "Stays in " + filterBy.city;
        case "propertyType":
            return filterBy.propertyType;
        case "guests":
            return "Stays to " + filterBy.guests + " guests";
        case "checkIn":
            return "checkIn " + filterBy.checkIn;
        default:
            return "Stays results";
    }
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}




// function _getFilterDates(checkIn, checkOut) {
//     console.log(_getDates(checkIn, checkOut));
//     if (checkIn && checkOut) return _getDates(checkIn, checkOut)
//     if (!checkIn && !checkOut) return []
//     else if (checkIn) return [new Date(checkIn)]
//     else return [new Date(checkOut)]
// }

// function _isAvailable(filterDates, stayClosedDates) {
//     return filterDates.every(date => {
//         return stayClosedDates.every(stayDate => {
//             date !== stayDate
//         })
//     })
// }
// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

// function _getDates(startDate, stopDate) {
//     var dateArray = new Array();
//     var currentDate = new Date(startDate)
//     stopDate = new Date(stopDate)
//     console.log(currentDate);
//     console.log(stopDate);
//     while (currentDate <= stopDate) {
//         dateArray.push(new Date(currentDate));
//         currentDate = currentDate.addDays(1);
//     }
//     return dateArray;
// }