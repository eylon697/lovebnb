const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByUsername,
    remove,
    update,
    add,
    saveHostOrder,
    saveGuestOrder
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('user')
        var users = await collection.find(criteria).toArray()
        users = users.map(user => {
            delete user.password
            user.createdAt = ObjectId(user._id).getTimestamp()
                // Returning fake fresh data
                // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
            return user
        })
        return users
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        delete user.password

        user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
        user.givenReviews = user.givenReviews.map(review => {
            delete review.byUser
            return review
        })

        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}
async function getByUsername(userName) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ userName })
        return user
    } catch (err) {
        logger.error(`while finding user ${userName}`, err)
        throw err
    }
}

async function remove(userId) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.deleteOne({ '_id': ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function update(user) {
    try {
        // peek only updatable fields!
        const userToSave = {
            _id: ObjectId(user._id),
            userName: user.userName,
            fullName: user.fullName,
        }
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ '_id': userToSave._id }, { $set: userToSave })
        return userToSave;
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user) {
    try {
        // peek only updatable fields!
        const userToAdd = {
            userName: user.userName,
            password: user.password,
            fullName: user.fullName,
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot insert user', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [{
                userName: txtCriteria
            },
            {
                fullName: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    return criteria
}

async function saveHostOrder(userId, miniOrder) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        if (user.hostOrders) {
            const idx = user.hostOrders.findIndex(order => order._id === miniOrder._id)
            if (idx !== -1) user.hostOrders[idx] = miniOrder
            else user.hostOrders.push(miniOrder)
        } else user.hostOrders = [miniOrder]

        await collection.updateOne({ '_id': ObjectId(userId) }, { $set: user })
        return user
    } catch (err) {
        logger.error(`Faild to push mini order to host ${user._id}`, err)
        throw err
    }
}

async function saveGuestOrder(userId, miniOrder) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        if (user.orders) {
            const idx = user.orders.findIndex(order => order._id === miniOrder._id)
            if (idx !== -1) user.orders[idx] = miniOrder
            else user.orders.push(miniOrder)
        } else user.orders = [miniOrder]

        await collection.updateOne({ '_id': ObjectId(userId) }, { $set: user })
        return user
    } catch (err) {
        logger.error(`Faild to push mini order to guest ${userId}`, err)
        throw err
    }
}