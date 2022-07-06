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

// exports.login = async (req, res) => {
//     res.send("hello")
// }

