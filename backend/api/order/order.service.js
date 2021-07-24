const ITEM_KEY = 'order'

const itemUtil = require(`./${ITEM_KEY}.util`)
const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getOne,
    saveOne,
    removeOne,
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

async function saveOne(itemToSave) {
    try {
        const item = itemUtil.getItemToSave(itemToSave)
        const collection = await dbService.getCollection(ITEM_KEY)
        if (itemToSave._id)
            await collection.updateOne({ '_id': item._id }, { $set: item })
        else {
            delete item._id
            await collection.insertOne(item)
        }
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