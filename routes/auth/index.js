const router = require('express').Router()
const authenticate = require('../../middlewares/authenticate')
const { registration, login } = require('../../controllers/auth')
router
    .post('/registration', registration)
    .post('/login', login)

module.exports = router
