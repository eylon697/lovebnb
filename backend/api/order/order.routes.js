const ITEM_KEY = 'order'

const express = require('express')
const { query, getOne, saveOne, removeOne } = require(`./${ITEM_KEY}.controller`)
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const router = express.Router()

router.get('/', query)
router.get('/:_id', getOne)

router.post('/', requireAuth, saveOne)
router.put('/', requireAuth, saveOne)

router.delete('/:_id', requireAuth, removeOne)

module.exports = router