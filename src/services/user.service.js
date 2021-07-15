import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    getLoggedinUser,
}

window.userService = userService


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

function getById(userId) {
    return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
}


async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)
    // console.log(userCred, 'LOGIN SERVICE ');
    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    console.log(user);
    // const user = await httpService.post('auth/signup', userCred)
    // if (!user) console.log('signup')
    // return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    console.log('logout');
    // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    // console.log(user);
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}