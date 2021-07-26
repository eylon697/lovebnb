const ITEM_KEY = 'stay'
const itemService = require(`./${ITEM_KEY}.service`)
const logger = require('../../services/logger.service')

module.exports = {
    query,
    getOne,
    saveOne,
    removeOne,
}

async function query(req, res) {
    try {
        const filterBy = JSON.parse(req.query.filterBy)
        const items = await itemService.query(filterBy)
        res.send(items)
    } catch (err) {
        logger.error(`Failed to get ${ITEM_KEY}s`, err)
        res.status(500).send({ err: `Failed to get ${ITEM_KEY}s` })
    }
}

async function getOne(req, res) {
    try {
        const item = await itemService.getOne(req.params._id)
        res.send(item)
    } catch (err) {
        logger.error(`Failed to get ${ITEM_KEY}`, err)
        res.status(500).send({ err: `Failed to get ${ITEM_KEY}` })
    }
}

async function saveOne(req, res) {
    try {
        const item = req.body
        const savedItem = await itemService.saveOne(item)
        res.send(savedItem)
    } catch (err) {
        logger.error(`Failed to save ${ITEM_KEY}:`, item, err);
        res.status(403).send(`Failed to save ${ITEM_KEY}`)
    }
}

async function removeOne(req, res) {
    try {
        await itemService.removeOne(req.params._id)
        res.send({ msg: 'Removed successfully' })
    } catch (err) {
        logger.error(`Failed to remove ${ITEM_KEY}`, err)
        res.status(500).send({ err: `Failed to remove ${ITEM_KEY}` })
    }
}