const ITEM_KEY = 'order'

const express = require('express')
const { query, getOne, saveOne, removeOne, checkAvailability } = require(`./${ITEM_KEY}.controller`)
    // const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const router = express.Router()

router.get('/', query)
router.get('/availability', checkAvailability)
router.get('/:_id', getOne)

router.post('/', saveOne)
router.put('/', saveOne)

router.delete('/:_id', removeOne)

module.exports = router