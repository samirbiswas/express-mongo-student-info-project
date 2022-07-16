const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.authenticate = async (req, res, next) => {
    try {

        let token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorize'
            })
        }
        token = token.split(' ')[1]
        const decode = jwt.verify(token, 'secret-key')

        const user = await User.findById(decode._id)
        if (!user) {
            return res.status(400).json({
                message: 'Unauthorize'
            })
        }

        req.user = decode
        next()

    } catch (error) {
        return res.status(400).json({
            message: 'Invalid token'
        })
    }
}