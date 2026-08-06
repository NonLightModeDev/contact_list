import userService from '../services/UserService.js'
import contactService from '../services/ContactService.js'
import NotFoundError from '../errors/NotFoundError.js'

class IndexController {
    async index(req, res, next) {
        try {
            const dataUser = await userService.findBasicInfoAndContacts(req.session.userId)
            res.render('index', {
                error: null,
                data: dataUser
            })
        } catch(e) {
            if(e instanceof NotFoundError) {
                res.render('index', {
                    error: {
                        message: e.message,
                    }
                })
            }
        }
    }
}

export default new IndexController()
