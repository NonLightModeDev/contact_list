import userService from '../services/UserService.js'
import NotFoundError from '../errors/NotFoundError.js'

class IndexController {
  async index(req, res, next) {
    try {
      const data = await userService.findAllContacts(req.session.userId)
      res.render('index', {
        data: data,
        authenticated: true
      })
    } catch (e) {
      if (e instanceof NotFoundError) {
        res.redirect('/logout')
      }
    }
  }
}

export default new IndexController()
