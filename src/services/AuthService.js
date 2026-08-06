import userRepository from '../repositories/UserRepository.js'
import NotFoundError from '../errors/NotFoundError.js'
import ConflictError from '../errors/ConflictError.js'

class AuthService {
    async register(data) {
        const user = await userRepository.userExists(data.email)

        if(user) {
            throw new ConflictError('E-mail já cadastrado!')
        }

        return await userRepository.create(data)
    }
}

export default new AuthService()
