import authService from '../services/AuthService.js'
import NotFoundError from '../errors/NotFoundError.js'
import ConflictError from '../errors/ConflictError.js'

class AuthController {
  showLoginPage(req, res, next) {
    res.render('login')
  }

  showRegisterPage(req, res, next) {
    res.render('register', {
        error: null
    })
  }

  async register(req, res, next) {
    try {
      await authService.register(req.body)
      res.redirect('/login')
    } catch (e) {
      if (e instanceof ConflictError) {
        res.render('register', {
          error: {
            message: e.message
          },
          data: req.body
        })
      }
    }
  }
}

export default new AuthController()
