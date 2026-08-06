import { Router } from 'express'
import authRoutes from '../routes/auth.routes.js'

const routes = new Router()

routes.use(authRoutes)

export default routes