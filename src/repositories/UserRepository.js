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

  findAllContacts(_id) {
    return userModel.findOne({ _id }, { contacts: 1 })
  }

  findContact(userId, contactId) {
    return userModel.findOne(
      {
        _id: userId,
        'contacts._id': contactId
      },
      {
        'contacts.$': 1
      }
    )
  }

  createContact(userId, data) {
    return userModel.updateOne(
      { _id: userId },
      {
        $push: {
          contacts: data
        }
      }
    )
  }

  deleteContact(userId, contactId) {
    return userModel.updateOne(
      { _id: userId },
      {
        $pull: {
          contacts: { _id: contactId }
        }
      }
    )
  }
}

export default new UserRepository()
