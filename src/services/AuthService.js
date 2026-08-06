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

    async login(data) {
        const user = await userRepository.findByEmailAndPassword(data.email, data.password)

        if(!user) {
            throw new NotFoundError('Dados incorretos!')
        }

        return user
    }
}

export default new AuthService()
