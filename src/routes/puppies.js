const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/puppies')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.find)
router.post('/', ctrl.create)

module.exports = router
