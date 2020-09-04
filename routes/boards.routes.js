const Router = require('express').Router
const controller = require('../controllers/boards.controller')

const router = new Router()

router.get('/all', controller.getAll)
router.post('/create', controller.create)
router.post('/edit', controller.edit)
router.post('/star', controller.star)

module.exports = router
