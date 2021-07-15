import {storageService} from './async-storage.service.js'

export const gStays=[

]

export 

const STAY_KEY='stays'

 async function query(){
    const staysInStorage = await storageService.query(STAY_KEY)
    if (!staysInStorage || !staysInStorage.length) {
        storageService.postMany(STAY_KEY,gStays)
        return gStays
    }
    return staysInStorage 
}