const router = require('express').Router()
const { getUsers, getUserById, postUser } = require('../../controllers/users')
router
    .get('/all', getUsers)
    .get('/:userId', getUserById)
    .post('/', postUser)
// .delete('/userId', () => { })


module.exports = router