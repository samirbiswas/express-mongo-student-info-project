const userServices = require('../services/user')
const error = require('../ulils/error')
const authServices = require('../services/auth')
const getUsers = async (req, res, next) => {
    try {
        const users = await userServices.findUsers()

        return res.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await userServices.findUserByProperty('_id', userId)

        if (!user) {
            throw error('User not found', 404)
        }

        return res.status(200).json(user)

    } catch (e) {
        next(e)
    }
}

const postUser = async (req, res, next) => {
    try {
        const { name, email, password, roles, accountStatus } = req.body

        const user = await authServices.registerService({ name, email, password, roles, accountStatus })
        return res.status(200).json(user)

    } catch (e) {
        next(e)
    }
}

const putUserById = (req, res, next) => {

}

const patchUserById = (req, res, next) => {

}

const deleteUserById = () => {

}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    putUserById,
    patchUserById,
    deleteUserById
}

