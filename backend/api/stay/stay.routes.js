const ITEM_KEY = 'stay'
const express = require('express')
const { query, getOne, saveOne, removeOne } = require(`./${ITEM_KEY}.controller`)
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const router = express.Router()

router.get('/', query)
router.get('/:_id', getOne)

// router.post('/', requireAuth, saveOne)
router.post('/', saveOne)
    // router.put('/', requireAuth, saveOne)
router.put('/', saveOne)

// router.delete('/:_id', requireAuth, removeOne)
router.delete('/:_id', removeOne)

module.exports = router