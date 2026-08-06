import mongoose from '../database/mongoose.js'
import userSchema from '../schemas/UserSchema.js'

const userModel = mongoose.model('User', userSchema, 'users')

class UserRepository {
  create(data) {
    const user = new userModel(data)
    return user.save()
  }

  userExists(email) {
    return userModel.exists({ email })
  }

  findByEmailAndPassword(email, password) {
    return userModel.exists({ email, password })
  }

  findBasicInfoAndContactsById(_id) {
    return userModel.findOne({ _id }, { fullname: 1, contacts: 1 })
  }
}

export default new UserRepository()
