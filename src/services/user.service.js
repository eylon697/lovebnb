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


const USER_KEY = 'user'

window.userService = userService


function getUsers() {
    return storageService.query(USER_KEY)
    // return httpService.get(`user`)
}

function getById(userId) {
    return storageService.get(USER_KEY, userId)
    // return httpService.get(`user/${userId}`)
}


async function login(userCred) {
   const users = await storageService.query('user')
   const user = users.find(user => user.username === userCred.username)
   console.log(userCred);
    return _saveLocalUser(user)
    // const user = await httpService.post('auth/login', userCred)
}
async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    console.log('from service',user);
    // const user = await httpService.post('auth/signup', userCred)
    // if (!user) console.log('signup')
    return _saveLocalUser(user)
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