// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'



export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    getLoggedinUser,
}


const BASE_URL = 'user/'

window.userService = userService


function getUsers() {
        return httpService.get(BASE_URL)
}

function getById(userId) {
        return  httpService.get(`${BASE_URL}${userId}`)
}


async function login(userCred) {
        const user = await httpService.post('auth/login', userCred)
        if (user) return _saveLocalUser(user)
}
async function signup(userCred) {

    console.log(userCred);
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    console.log('logout');
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}