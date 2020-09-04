const Router = require('express').Router
const controller = require('../controllers/tables.controller')

const router = new Router()

router.get('/:boardId', controller.getAll)
router.post('/create', controller.create)
router.post('/edit', controller.edit)
router.post('/move', controller.move)

module.exports = router
