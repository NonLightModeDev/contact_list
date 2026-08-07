import { Router } from 'express'
import authRoutes from '../routes/auth.routes.js'
import contactRoutes from '../routes/contact.routes.js'
import requireAuth from '../middlewares/requireAuth.js'
import indexController from '../controllers/IndexController.js'

const routes = new Router()

routes.use(authRoutes)
routes.get('/', requireAuth, indexController.index)
routes.use(contactRoutes)
routes.use((req, res, next) => {
    res.render('not-found', {
        authenticated: true
    })
})

export default routes