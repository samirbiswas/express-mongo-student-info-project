const router = require('express').Router()
const authenticate = require('../../middlewares/authenticate')
const { registrationController, loginController } = require('../../controllers/auth')
router
    .post('/registration', registrationController)
    .post('/login', loginController)

module.exports = router
