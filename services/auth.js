const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findUserByProperty, createNewUser } = require('./user')
const error = require('../ulils/error')

exports.registerService = async ({ name, email, password, roles, accountStatus }) => {
    let user = await findUserByProperty('email', email)
    if (user) throw error("User already exist", 400)

    const hash = await bcrypt.hash(password, 10)
    return createNewUser({ name, email, password: hash, roles, accountStatus })
}

exports.loginService = async ({ email, password }) => {
    let user = await findUserByProperty('email', email).lean()

    if (!user) throw error("Invalid credentials", 400)

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) throw error("Invalid credentials", 400)

    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        accountStatus: user.accountStatus
    }
    return jwt.sign(payload, 'secret-key', { expiresIn: '1h' })


}