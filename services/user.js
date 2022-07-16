const User = require('../models/User')

exports.findUserByProperty = (key, value) => {
    if (key === '_id') {
        return User.findById(value)
    }
    return User.findOne({ [key]: value })
}

exports.findUsers = () => {
    return User.find()
};

exports.createNewUser = ({ name, email, password, roles, accountStatus }) => {
    const user = new User({
        name,
        email,
        password,
        roles: roles ? roles : ['STUDENT'],
        accountStatus: accountStatus ? accountStatus : 'PENDING'
    })

    return user.save()
}