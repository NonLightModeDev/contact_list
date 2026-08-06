import { Router } from 'express'
import authController from '../controllers/AuthController.js'

const authRoutes = new Router()

authRoutes.get('/login', authController.showLoginPage)
authRoutes.get('/register', authController.showRegisterPage)
authRoutes.post('/register', authController.register)

export default authRoutes