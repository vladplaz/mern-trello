const Router = require('express').Router
const controller = require('../controllers/user.controller')

const router = new Router()

router.get('/:userId',controller.get)

module.exports = router
