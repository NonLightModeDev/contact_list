import { Router } from 'express'
import authRoutes from '../routes/auth.routes.js'
import contactRoutes from '../routes/contact.routes.js'
import requireAuth from '../middlewares/requireAuth.js'
import indexContoller from '../controllers/IndexContoller.js'

const routes = new Router()

routes.use(authRoutes)
routes.get('/', requireAuth, indexContoller.index)
routes.use(contactRoutes)
routes.use((req, res, next) => {
    res.render('not-found')
})

export default routes