import { Router } from 'express'
import requireAuth from '../middlewares/requireAuth.js'
import contactController from '../controllers/ContactController.js'

const contactRoutes = new Router()

contactRoutes.use(requireAuth)
contactRoutes.get('/contacts/:id', contactController.showContactPage)
contactRoutes.post('/contacts', contactController.create)
contactRoutes.delete('/contacts/:id', contactController.deleteById)

export default contactRoutes