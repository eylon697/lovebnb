const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(userName, password) {
    logger.debug(`auth.service - login with userName: ${userName}`)

    const user = await userService.getByUsername(userName)
    if (!user) return Promise.reject('Invalid userName or password')
        // TODO: un-comment for real login
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid userName or password')

    delete user.password
    user._id = user._id.toString()
    return user
}

async function signup(userName, password, fullName) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with userName: ${userName}, fullName: ${fullName}`)
    if (!userName || !password || !fullName) return Promise.reject('fullName, userName and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ userName, password: hash, fullName })
}

module.exports = {
    signup,
    login,
}