const Router = require('express').Router
const controller = require('../controllers/auth.controller')

const router = new Router()

router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router
