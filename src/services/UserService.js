import userRepository from '../repositories/UserRepository.js'
import NotFoundError from '../errors/NotFoundError.js'

class UserService {
    async findBasicInfoAndContacts(id) {
        const user = await userRepository.findBasicInfoAndContactsById(id)

        if(!user) {
            throw new NotFoundError('Usuário não existe!')
        }

        return user
    }
}

export default new UserService()
