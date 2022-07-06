const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.registration = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        let user = await User.findOne({ email })
        if (user) {
            res.status(401).json({
                message: 'Email alredy exits'
            })
        }
        const hash = await bcrypt.hash(password, 10)
        user = new User({
            name,
            email,
            password: hash
        })
        await user.save()

        return res.status(201).json({
            message: 'User registration successfully!'
        })

    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email }).lean()
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            })
        }

        delete user.password

        return res.status(200).json({
            message: "User login successfully",
            user
        })
    } catch (error) {
        next(error)
    }
}

