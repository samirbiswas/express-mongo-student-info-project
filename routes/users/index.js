const router = require('express').Router()
const { getUsers, getUserById, postUser,deleteUserById,patchUserById,putUserById } = require('../../controllers/users')
router
    .get('/all', getUsers)
    .get('/:userId', getUserById)
    .post('/', postUser)
    .delete('/:userId', deleteUserById)
    .patch('/:userId', patchUserById)
    .put('/:userId', putUserById)

module.exports = router