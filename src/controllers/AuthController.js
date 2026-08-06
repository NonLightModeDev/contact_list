import authService from '../services/AuthService.js'
import NotFoundError from '../errors/NotFoundError.js'
import ConflictError from '../errors/ConflictError.js'

class AuthController {
  showLoginPage(req, res, next) {
    if (req.session.userId) {
      res.redirect('/')
    } else {
      res.render('login', {
        error: null
      })
    }
  }

  showRegisterPage(req, res, next) {
    if (req.session.userId) {
      res.redirect('/')
    } else {
      res.render('register', {
        error: null
      })
    }
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

  async login(req, res, next) {
    try {
      const user = await authService.login(req.body)
      req.session.userId = user._id
      res.redirect('/')
    } catch (e) {
      if (e instanceof NotFoundError) {
        res.render('login', {
          error: {
            message: e.message
          },
          data: req.body
        })
      }
    }
  }

  logout(req, res, next) {
    req.session.destroy(err => {
      if(err) {
        next(err)
      }

      res.clearCookie('connect.sid')
      res.redirect('/login')
    })
  }
}

export default new AuthController()
