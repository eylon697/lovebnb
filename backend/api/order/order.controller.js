const ITEM_KEY = 'order'
const itemService = require(`./${ITEM_KEY}.service`)
const utilService = require(`./${ITEM_KEY}.util`)
const logger = require('../../services/logger.service')

const userService = require(`../user/user.service`)

module.exports = {
    query,
    getOne,
    saveOne,
    removeOne,
    checkAvailability
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
        const item = await itemService.getById(req.params._id)
        res.send(item)
    } catch (err) {
        logger.error(`Failed to get ${ITEM_KEY}`, err)
        res.status(500).send({ err: `Failed to get ${ITEM_KEY}` })
    }
}

async function saveOne(req, res) {
    try {
        const savedItem = await itemService.saveOne(req.body)
        const hostMiniOrder = utilService.getHostMiniOrder(savedItem)
        const guestMiniOrder = utilService.getGuestMiniOrder(savedItem)
        await userService.saveHostOrder(savedItem.host._id, hostMiniOrder)
        await userService.saveGuestOrder(savedItem.guest._id, guestMiniOrder)
        res.send(savedItem)
    } catch (err) {
        logger.error(`Failed to save ${ITEM_KEY}:`, err);
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

async function checkAvailability(req, res) {
    try {
        const { dates, stayId } = req.query
        const isAvailable = await itemService.checkAvailability(dates, stayId)
        res.send(isAvailable)
    } catch (err) {
        logger.error(`Failed to checkAvailability`, err)
        res.status(500).send({ err: `Failed to checkAvailability` })
    }
}