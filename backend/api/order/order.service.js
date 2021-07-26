const ITEM_KEY = 'order'

const stayUtil = require(`../stay/stay.util`)
const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getOne,
    saveOne,
    removeOne,
    checkAvailability,
}

async function query(filterBy) {
    try {
        const collection = await dbService.getCollection(ITEM_KEY)
        return await collection.find().toArray()
    } catch (err) {
        logger.error(`Failed to find ${ITEM_KEY}s`, err)
        throw err
    }
}

async function getOne(_id) {
    try {
        const collection = await dbService.getCollection(ITEM_KEY)
        return await collection.findOne({ '_id': ObjectId(_id) })
    } catch (err) {
        logger.error(`Failed to find  ${ITEM_KEY} ${_id}`, err)
        throw err
    }
}

async function saveOne(item) {
    try {
        const collection = await dbService.getCollection(ITEM_KEY)
        if (item._id)
            await collection.updateOne({ '_id': ObjectId(item._id) }, { $set: item })
        else await collection.insertOne(item)
        return item
    } catch (err) {
        logger.error(`Failed to insert ${ITEM_KEY}`, err)
        throw err
    }
}

async function removeOne(_id) {
    try {
        const collection = await dbService.getCollection(ITEM_KEY)
        await collection.deleteOne({ '_id': ObjectId(_id) })
    } catch (err) {
        logger.error(`Failed to remove ${ITEM_KEY} ${_id}`, err)
        throw err
    }
}

async function checkAvailability(dates, stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = await collection.findOne({ '_id': ObjectId(stayId) })
        console.log(stay);
        return stayUtil.isAvailable(dates, stay.closeDates)
    } catch (err) {
        logger.error(`Failed to check availability`, err)
        throw err
    }
}