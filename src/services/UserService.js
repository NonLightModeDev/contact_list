import userRepository from '../repositories/UserRepository.js'
import NotFoundError from '../errors/NotFoundError.js'
import getAvatarInitials from '../utils/getAvatarInitials.js'
import getFirstAndLastName from '../utils/getFirstAndLastName.js'

class UserService {
  async findAllContacts(id) {
    const data = await userRepository.findAllContacts(id)

    if (!data) {
      throw new NotFoundError('Não há contatos!')
    }

    return data
  }

  async findContact(userId, contactId) {
    const data = await userRepository.findContact(userId, contactId)
    const contact = data.contacts[0]
    if (!contact) {
      throw new NotFoundError('Contato não encontrado!')
    }

    return contact
  }

  async createContact(userId, data) {
    const avatar_initials = getAvatarInitials(data.fullname).join('')
    const name = getFirstAndLastName(data.fullname)

    data.avatar_initials = avatar_initials
    data.firstname = name.firstName
    data.lastname = name.lastName

    return await userRepository.createContact(userId, data)
  }

  async deleteContact(userId, contactId) {
    const contact = await this.findContact(userId, contactId)
    return await userRepository.deleteContact(userId, contactId)
  }
}

export default new UserService()
