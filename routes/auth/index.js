const router = require('express').Router()

const { registration } = require('../../controllers/auth')
router
    .get('/registration', registration)
    .post('/login')

module.exports = router
