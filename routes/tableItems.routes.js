const Router = require('express').Router
const controller = require('../controllers/tableItems.controller')

const router = new Router()

router.post('/create', controller.create)
router.post('/edit', controller.edit)
router.post('/move', controller.move)

module.exports = router
