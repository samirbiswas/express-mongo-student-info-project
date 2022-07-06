const router = require('express').Router()

const { registration } = require('../../controllers/auth')
router
    .post('/registration', registration)
    .post('/login')

module.exports = router
