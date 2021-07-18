export const utilService = {
    objToUrl,
    getformatDate
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
        return `${ hoursStr }:${ minutesStr }`
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