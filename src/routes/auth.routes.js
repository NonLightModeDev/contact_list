import { Router } from 'express'
import authController from '../controllers/AuthController.js'
import requireAuth from '../middlewares/requireAuth.js'

const authRoutes = new Router()

authRoutes.get('/login', authController.showLoginPage)
authRoutes.post('/login', authController.login)
authRoutes.get('/register', authController.showRegisterPage)
authRoutes.post('/register', authController.register)
authRoutes.get('/logout', authController.logout)

export default authRoutes