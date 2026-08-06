import { Router } from 'express'
import requireAuth from '../middlewares/requireAuth.js'

const contactRoutes = new Router()

contactRoutes.use(requireAuth)

export default contactRoutes