import userService from '../services/UserService.js'
import NotFoundError from '../errors/NotFoundError.js'

class ContactController {
  async showContactPage(req, res, next) {
    try {
      const contact = await userService.findContact(
        req.session.userId,
        req.params.id
      )
      res.render('contact', {
        contact: contact,
        authenticated: true
      })
    } catch (e) {
      if (e instanceof NotFoundError) {
        res.redirect('/')
      }
    }
  }

  async create(req, res, next) {
    await userService.createContact(req.session.userId, req.body)
    res.redirect('/')
  }

  async deleteById(req, res, next) {
    try {
      await userService.deleteContact(req.session.userId, req.params.id)
      res.sendStatus(204)
    } catch(e) {
      if (e instanceof NotFoundError) {
        res.sendStatus(404)
      }
    }
  }
}

export default new ContactController()
