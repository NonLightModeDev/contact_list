import mongoose from '../database/mongoose.js'
import userSchema from '../schemas/UserSchema.js'

const userModel = mongoose.model('User', userSchema, 'users')

class UserRepository {
    create(data) {
        const user = new userModel(data)
        return user.save()
    }

    userExists(email) {
        return userModel.findOne({ email })
    }
}

export default new UserRepository()