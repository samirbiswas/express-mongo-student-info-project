const { registerService, loginService } = require('../services/auth')

exports.registrationController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        
        if (!name || !email || !password) {
            return res.status(200).json({
                message: 'Invalid payload!'
            })
        }
        const user = await registerService({ name, email, password })

        return res.status(201).json({
            message: 'User registration successfully!',
            user
        })
    } catch (error) {
        next(error)
    }
}

exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const token = await loginService({ email, password })

        return res.status(200).json({
            message: "User login successfully",
            token
        })
    } catch (error) {
        next(error)
    }
}

